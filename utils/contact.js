import * as Yup from 'yup';
import axios from 'axios';

export const submitValidations = (
  errors,
  values,
  isSubmitting,
  recaptchaVal
) => {
  return (
    errors.name ||
    errors.email ||
    errors.message ||
    values.name.length === 0 ||
    values.email.length === 0 ||
    values.message.length === 0 ||
    isSubmitting ||
    recaptchaVal === 'not verified'
  );
};

export const formValidation = Yup.object().shape({
  name: Yup.string().required('Make sure to input your name!'),
  email: Yup.string()
    .email('Make sure to input valid email')
    .required('Email is required to ensure I can contact you'),
  message: Yup.string().required(
    'Make sure to enter message that is needed to be discussed'
  ),
});

export const sendMessage = async (
  values,
  setWaiting,
  setConfirmMessage,
  recaptchaVal,
  formikBag,
  ref
) => {
  if (recaptchaVal === 'not verified') return;
  // if recaptcha successful & proper vals inputted then continue executing logic
  setWaiting(true);
  const confirm = await axios.post('/api/send-email', {
    name: values.name,
    email: values.email,
    message: values.message,
  });
  if (confirm?.data?.res === 'success') {
    setWaiting(false);
    setConfirmMessage('Successfully Sent!');
    ref?.current?.reset();
    formikBag.setSubmitting(false);
    formikBag.resetForm();
  } else {
    setWaiting(false);
    setConfirmMessage('Error. Try again');
  }
  const timeout = setTimeout(() => {
    setConfirmMessage('');
    clearTimeout(timeout);
  }, 4000);
};
