import React, { useState } from 'react';
import { useModal } from '../ModalContext/ModalContextProvider';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/Auth/AuthThunk';
import {
  Btn,
  FormWrapper,
  ModalText,
  StyledError,
  StyledInput,
  ToggleBtn,
  WrapperInput,
} from './SignUpFormStyled';
import { FiEyeOff } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';
import { Formik } from 'formik';
import { validationSignUp } from '../../helpers/schemas';

const initialState = {
  email: '',
  password: '',
};

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleModal = useModal();
  const dispatch = useDispatch();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handlerSubmit = (values, { resetForm }) => {
    dispatch(loginThunk(values));
    toggleModal();
    resetForm();
  };

  return (
    <>
      <ModalText>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </ModalText>
      <Formik
        initialValues={initialState}
        validationSchema={validationSignUp}
        onSubmit={handlerSubmit}
      >
        {({ errors, touched }) => {
          return (
            <FormWrapper>
              <WrapperInput>
                <StyledInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  $error={errors.email && touched.email}
                />
                <StyledError name="email" component="span" />
              </WrapperInput>
              <WrapperInput style={{ marginBottom: '40px' }}>
                <StyledInput
                  $error={errors.password && touched.password}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                />
                <ToggleBtn type="button" onClick={togglePassword}>
                  {showPassword ? <FiEye /> : <FiEyeOff />}
                </ToggleBtn>
                <StyledError name="password" component="span" />
              </WrapperInput>
              <Btn type="submit">Log In</Btn>
            </FormWrapper>
          );
        }}
      </Formik>
    </>
  );
};

export default SignUpForm;
