import * as yup from 'yup';

export const validationSignIn = yup.object().shape({
  name: yup
    .string()
    .required('name is required')
    .matches(
      /^[a-zA-Z0-9_]{3,20}$/,
      'Invalid username. Must be alphanumeric with underscores. Length between 3 and 20 characters.'
    ),
  email: yup
    .string()
    .email('email is not valid')
    .min(6, 'the email must containe minimum six letters')
    .max(64, 'the email must containe maximum of 64 characters')
    .required('email is required')
    .trim()
    .matches(
      /^[a-zA-Z0-9]+[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/,
      'email is not valid'
    ),
  password: yup
    .string()
    .required('password is required')
    .min(8, 'the password must containe minimum of 8 characters')
    .max(64, 'the password must containe maximum of 64 characters'),
});

export const validationSignUp = yup.object().shape({
  email: yup
    .string()
    .email('email is not valid')
    .min(6, 'the email must containe min six leters')
    .max(64, 'the email must containe maximum of 64 characters')
    .required('email is required')
    .trim()
    .matches(
      /^[a-zA-Z0-9]+[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/,
      'email is not valid'
    ),
  password: yup
    .string()
    .required('password is required')
    .min(8, 'the password must containe min of 8 characters')
    .max(64, 'the password must containe maximum of 64 characters'),
});
