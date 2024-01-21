import { useState } from 'react';
import { useModal } from '../ModalContext/ModalContextProvider';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../../redux/Auth/AuthThunk';
import {
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
import { Notify } from 'notiflix';
import { selectAuthLoading } from '../../redux/selectors';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';

const initialState = {
  email: '',
  password: '',
};

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const isLoading = useSelector(selectAuthLoading);

  const toggleModal = useModal();
  const dispatch = useDispatch();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handlerSubmit = (values, { resetForm }) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => {
        toggleModal();
        resetForm();
        Notify.success("Welcome back! You're now logged in.", {
          timeout: 1000,
        });
      })
      .catch(error => {
        Notify.failure(error, { timeout: 2000 });
      });
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
                  {showPassword ? (
                    <FiEye aria-label="show-password" />
                  ) : (
                    <FiEyeOff aria-label="hide-password" />
                  )}
                </ToggleBtn>
                <StyledError name="password" component="span" />
              </WrapperInput>
              <Button type="submit" text="Log in" disabled={isLoading}>
                {isLoading ? <Loader /> : 'Log in'}
              </Button>
            </FormWrapper>
          );
        }}
      </Formik>
    </>
  );
};

export default SignUpForm;
