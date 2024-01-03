import React, { useState } from 'react';
import { useModal } from '../ModalContext/ModalContextProvider';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/Auth/AuthThunk';
import { FormWrapper, ModalText, StyledInput } from './SignUpFormStyled';

const initialState = {
  email: '',
  password: '',
};

const SignUpForm = () => {
  const [values, setValues] = useState(initialState);

  const toggleModal = useModal();
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(loginThunk(values));
    toggleModal();
  };

  const handleChange = evt => {
    const { value, name } = evt.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <ModalText>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </ModalText>
      <FormWrapper onSubmit={handleSubmit}>
        <StyledInput
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          marginBottom={4.5}
          required
        ></StyledInput>
        <StyledInput
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          marginBottom={10}
          required
        ></StyledInput>
        <button type="submit">Log In</button>
      </FormWrapper>
    </>
  );
};

export default SignUpForm;
