import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateDisplayNameThunk,
  changePasswordAsync,
} from '../../../redux/Auth/AuthThunk';
import { Notify } from 'notiflix';
import { selectAuthId } from '../../../redux/selectors';
import { validationUserChange } from '../../../helpers/schemas';
import {
  FormWrapper,
  StyledError,
  StyledInput,
  ToggleBtn,
  WrapperInput,
} from '../../SignUpForm/SignUpFormStyled';
import { useModal } from '../../ModalContext/ModalContextProvider';
import { useState } from 'react';
import { FiEyeOff } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';
import { StyledLabel, StyledText } from './UserProfileStyled';
import Button from '../../Button/Button';

const UserProfileForm = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const userId = useSelector(selectAuthId);

  const toggleModal = useModal();
  const dispatch = useDispatch();

  const toggleOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };

  const toggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const initialValues = {
    displayName: '',
    oldPassword: '',
    newPassword: '',
  };
  const handleSubmit = async (values, { resetForm }) => {
    const { displayName, oldPassword, newPassword } = values;

    if (displayName.trim() === '' && newPassword.trim() === '') {
      Notify.failure('Please provide a display name or a new password.', {
        timeout: 2000,
      });
      return;
    }

    if (displayName.trim() !== '') {
      dispatch(updateDisplayNameThunk({ userId, newDisplayName: displayName }));
    }

    if (newPassword.trim() !== '') {
      dispatch(changePasswordAsync({ userId, oldPassword, newPassword }))
        .unwrap()
        .then(() => {
          toggleModal();
          resetForm();
          Notify.success('Account updated successfully!', {
            timeout: 1000,
          });
        })
        .catch(error => {
          Notify.failure(error, { timeout: 2000 });
        });
    } else {
      resetForm();
      Notify.success('Account updated successfully!', {
        timeout: 1000,
      });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationUserChange}
      onSubmit={handleSubmit}
    >
      <FormWrapper>
        <StyledText>Your Name</StyledText>
        <WrapperInput style={{ marginBottom: '56px' }}>
          <StyledInput type="text" name="displayName" />
          <StyledError name="displayName" component="span" />
        </WrapperInput>

        <StyledText>Password:</StyledText>
        <StyledLabel>Outdated password:</StyledLabel>
        <WrapperInput style={{ marginBottom: '24px' }}>
          <StyledInput
            type={showOldPassword ? 'text' : 'password'}
            name="oldPassword"
          />
          <ToggleBtn type="button" onClick={toggleOldPassword}>
            {showOldPassword ? (
              <FiEye aria-label="show-password" />
            ) : (
              <FiEyeOff aria-label="hide-password" />
            )}
          </ToggleBtn>
          <StyledError name="oldPassword" component="span" />
        </WrapperInput>
        <StyledLabel>New Password:</StyledLabel>
        <WrapperInput style={{ marginBottom: '42px' }}>
          <StyledInput
            type={showNewPassword ? 'text' : 'password'}
            name="newPassword"
          />
          <ToggleBtn type="button" onClick={toggleNewPassword}>
            {showNewPassword ? (
              <FiEye aria-label="show-password" />
            ) : (
              <FiEyeOff aria-label="hide-password" />
            )}
          </ToggleBtn>
          <StyledError name="newPassword" component="span" />
        </WrapperInput>
        <Button type="submit" text="Save" />
      </FormWrapper>
    </Formik>
  );
};

export default UserProfileForm;
