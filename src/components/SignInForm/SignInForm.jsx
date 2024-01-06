import { registerThunk } from '../../redux/Auth/AuthThunk';
import { useDispatch } from 'react-redux';
import { useModal } from '../ModalContext/ModalContextProvider';
import { FiEyeOff } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';
import { Formik } from 'formik';
import {
  Btn,
  FormWrapper,
  ModalText,
  StyledError,
  StyledInput,
  ToggleBtn,
  WrapperInput,
} from '../SignUpForm/SignUpFormStyled';
import { validationSignIn } from '../../helpers/schemas';
import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleModal = useModal();

  const dispatch = useDispatch();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handlerSubmit = (values, { resetForm }) => {
    dispatch(registerThunk(values));
    toggleModal();
    resetForm();
  };

  return (
    <>
      <ModalText>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </ModalText>
      <Formik
        initialValues={initialState}
        validationSchema={validationSignIn}
        onSubmit={handlerSubmit}
      >
        {({ errors, touched }) => {
          return (
            <FormWrapper>
              <WrapperInput>
                <StyledInput
                  $error={errors.name && touched.name}
                  type="text"
                  name="name"
                  placeholder="Name"
                  marginBottom={4.5}
                />
                <StyledError name="name" component="span" />
              </WrapperInput>
              <StyledInput
                $error={errors.email && touched.email}
                type="email"
                name="email"
                placeholder="Email"
                marginBottom={4.5}
              />
              <StyledError name="email" component="span" />
              <StyledInput
                $error={errors.password && touched.password}
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                marginBottom={10}
              />
              <ToggleBtn type="button" onClick={togglePassword}>
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </ToggleBtn>
              <StyledError name="password" component="span" />
              <Btn type="submit">Register</Btn>
            </FormWrapper>
          );
        }}
      </Formik>
    </>
  );
};

export default SignInForm;
