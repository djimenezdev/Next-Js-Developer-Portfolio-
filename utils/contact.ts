import * as Yup from 'yup';
import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { FormValues } from './types';

export const submitValidations = (
  errors: FormValues,
  values: FormValues,
  isSubmitting: boolean,
  recaptchaVal: string
): boolean => {
  if (
    errors.name ||
    errors.email ||
    errors.message ||
    values.name.length === 0 ||
    values.email.length === 0 ||
    values.message.length === 0 ||
    isSubmitting ||
    recaptchaVal === 'not verified'
  ) {
    return true;
  }
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
  values: FormValues,
  setWaiting: Dispatch<SetStateAction<boolean>>,
  setConfirmMessage: Dispatch<SetStateAction<string>>,
  recaptchaVal: string,
  formikBag: any,
  ref: any
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
