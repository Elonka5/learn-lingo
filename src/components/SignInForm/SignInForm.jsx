import { useState } from 'react';
import { registerThunk } from '../../redux/Auth/AuthThunk';
import { useDispatch } from 'react-redux';
import { useModal } from '../ModalContext/ModalContextProvider';
import {
  FormWrapper,
  ModalText,
  StyledInput,
} from '../SignUpForm/SignUpFormStyled';

const initialState = {
  email: '',
  name: '',
  password: '',
};

const SignInForm = () => {
  const [values, setValues] = useState(initialState);
  const toggleModal = useModal();

  //   const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(registerThunk(values));
    toggleModal();
  };

  const handleChange = evt => {
    const { value, name } = evt.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <ModalText>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </ModalText>
      <FormWrapper onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          marginBottom={4.5}
          required
        />
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
        <button type="submit">Register</button>
      </FormWrapper>
    </>
  );
};

export default SignInForm;
