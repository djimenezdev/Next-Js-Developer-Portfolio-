import React, { useRef, useState } from 'react';
import {
  buttonClasses,
  formValidation,
  sendMessage,
  submitValidations,
} from '@utils/contact';
import ReCAPTCHA from 'react-google-recaptcha';
import { Formik, Form, Field } from 'formik';

const MessageComp = (props) => (
  <textarea
    rows='4'
    type='text'
    className={`font-light rounded-md bg-gradient-to-r from-[#38bdf8] to-[#3b82f6]  border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500 ${
      props.errors.message &&
      props.touched.message &&
      'outline-none ring-2 border-none ring-red-600'
    }`}
    {...props}
  ></textarea>
);

export const ContactForm = () => {
  const [waiting, setWaiting] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState('');
  const [recaptchaVal, setRecaptchaVal] = useState('not verified');
  const ref = useRef(null);

  return (
    <Formik
      onSubmit={(values, formikBag) =>
        sendMessage(
          values,
          setWaiting,
          setConfirmMessage,
          recaptchaVal,
          formikBag,
          ref
        )
      }
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={formValidation}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <Form className='form rounded-lg bg-white p-4 flex flex-col'>
          <label htmlFor='name' className='text-sm text-gray-600 mx-4'>
            {' '}
            Your Name
          </label>
          <Field
            name='name'
            placeholder='Enter name here'
            className={`font-light rounded-md bg-gradient-to-r from-[#38bdf8] to-[#3b82f6]  border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500 ${
              errors.name &&
              touched.name &&
              'outline-none ring-2 border-none ring-red-600'
            }`}
          />
          {errors.name && touched.name && (
            <p className='text-red-600 text-xs font-semibold mx-4 mt-1'>
              {errors.name}
            </p>
          )}

          <label htmlFor='email' className='text-sm text-gray-600 mx-4 mt-4'>
            Email
          </label>
          <Field
            name='email'
            placeholder='Enter email here'
            type='email'
            className={`font-light rounded-md bg-gradient-to-r from-[#38bdf8] to-[#3b82f6]  border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500 ${
              errors.email &&
              touched.email &&
              'outline-none ring-2 border-none ring-red-600'
            }`}
          />
          {errors.email && touched.email && (
            <p className='text-red-600 text-xs font-semibold mx-4 mt-1'>
              {errors.email}
            </p>
          )}

          <label htmlFor='message' className='text-sm text-gray-600 mx-4 mt-4'>
            Message
          </label>
          <Field
            name='message'
            as={MessageComp}
            errors={errors}
            touched={touched}
            placeholder='Enter message here'
          />
          {errors.message && touched.message && (
            <p className='text-red-600 text-xs font-semibold mx-4 mt-1'>
              {errors.message}
            </p>
          )}

          <ReCAPTCHA
            ref={ref}
            className='self-center mt-3'
            sitekey='6Le9JUYgAAAAALYbqc4CA2xjD6UACIBXwcyhOQGm'
            onChange={(value) => setRecaptchaVal(value)}
            theme='dark'
            type='image'
            onExpired={() => {
              alert('Recaptcha expired. Try again');
              if (recaptchaVal === 'not verified') return;
              setRecaptchaVal('not verified');
            }}
            onError={() => {
              alert('Network error. Try again.');
              if (recaptchaVal === 'not verified') return;
              setRecaptchaVal('not verified');
            }}
          />

          <button
            type='submit'
            className={
              buttonClasses(isSubmitting, errors, values, recaptchaVal) +
              ' self-center'
            }
            disabled={submitValidations(
              errors,
              values,
              isSubmitting,
              recaptchaVal
            )}
          >
            {waiting && confirmMessage?.length === 0
              ? 'Loading...'
              : !waiting && confirmMessage?.length > 0
              ? confirmMessage
              : 'Send Message'}
          </button>
        </Form>
      )}
    </Formik>
  );
};