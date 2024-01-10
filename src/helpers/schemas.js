import * as yup from 'yup';

export const validationSignIn = yup.object().shape({
  name: yup
    .string()
    .required('name is required')
    .max(12, 'the name must containe maximum of 12 characters')
    .matches(
      /^[a-zA-Z0-9_]{3,20}$/,
      'Invalid username. Must be alphanumeric with underscores. Length between 3 and 12 characters.'
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
    .max(64, 'the password must containe maximum of 64 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      'Password must contain 1 lowercase, 1 uppercase letter and 1 number.'
    ),
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

export const validationBooking = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ]+\s[a-zA-Zа-яА-ЯґҐєЄіІїЇ]+$/,
      '2 words are required.'
    )
    .required('name is required'),
  email: yup
    .string()
    .matches(/^[a-zA-Z0-9.~+_-]+@[^\s@]+\.[^\s@]+$/, 'This is an ERROR email')
    .required('email is required'),
  phone: yup
    .string()
    .required('phone is required')
    .matches(
      /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
      'Phone number must be in format +38(055)555-55-55.'
    ),
});
