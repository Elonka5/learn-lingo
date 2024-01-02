import React, { useState } from 'react';
import { useModal } from '../ModalContext/ModalContextProvider';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/Auth/AuthThunk';

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
    <div className="sign-in-container">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
        ></input>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default SignUpForm;
