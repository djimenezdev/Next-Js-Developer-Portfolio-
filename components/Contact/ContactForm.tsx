import React, { useRef, useState } from 'react';
import { formValidation, sendMessage, submitValidations } from '@utils/contact';
import ReCAPTCHA from 'react-google-recaptcha';
import { Formik, Form, Field } from 'formik';
import { MessageComp } from './MessageComp';

export const ContactForm = () => {
  const [waiting, setWaiting] = useState<boolean>(false);
  const [confirmMessage, setConfirmMessage] = useState<string>('');
  const [recaptchaVal, setRecaptchaVal] = useState<string>('not verified');
  const ref = useRef<HTMLElement>(null);

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
            className={`
            ${
              errors.name ||
              errors.email ||
              errors.message ||
              values.name.length === 0 ||
              values.email.length === 0 ||
              values.message.length === 0 ||
              isSubmitting ||
              recaptchaVal === 'not verified'
                ? 'opacity-75 cursor-default'
                : 'opacity-100 cursor-pointer'
            } self-center py-3 bg-blue-500 rounded-md w-1/2 mx-4 mt-8  text-gray-50 text-sm font-bold`}
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
