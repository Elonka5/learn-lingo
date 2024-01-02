import { useState } from 'react';
import { registerThunk } from '../../redux/Auth/AuthThunk';
import { useDispatch } from 'react-redux';
import { useModal } from '../ModalContext/ModalContextProvider';

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={values.name}
          onChange={handleChange}
        />
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

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignInForm;
