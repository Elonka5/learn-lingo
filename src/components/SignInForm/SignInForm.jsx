import { registerThunk } from '../../redux/Auth/AuthThunk';
import { useDispatch } from 'react-redux';
import { useModal } from '../ModalContext/ModalContextProvider';
import { FiEyeOff } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';
import { Formik } from 'formik';
import {
  FormWrapper,
  ModalText,
  StyledError,
  StyledInput,
  ToggleBtn,
  WrapperInput,
} from '../SignUpForm/SignUpFormStyled';
import { validationSignIn } from '../../helpers/schemas';
import { useState } from 'react';
import Button from '../Button/Button';

const initialState = {
  displayName: '',
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
    dispatch(registerThunk({ ...values, favorites: {} }));
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
                  $error={errors.displayName && touched.displayName}
                  type="text"
                  name="displayName"
                  placeholder="Name"
                />
                <StyledError name="displayName" component="span" />
              </WrapperInput>
              <WrapperInput>
                <StyledInput
                  $error={errors.email && touched.email}
                  type="email"
                  name="email"
                  placeholder="Email"
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
              <Button type="submit" text="Registration" />
            </FormWrapper>
          );
        }}
      </Formik>
    </>
  );
};

export default SignInForm;
