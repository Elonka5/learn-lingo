import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateDisplayNameThunk,
  changePasswordAsync,
} from '../../redux/Auth/AuthThunk';
import { Notify } from 'notiflix';
import { selectAuthId } from '../../redux/selectors';
import { validationUserChange } from '../../helpers/schemas';

const UserProfileForm = () => {
  const userId = useSelector(selectAuthId);
  const dispatch = useDispatch();

  const initialValues = {
    displayName: '',
    oldPassword: '',
    newPassword: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    const { displayName, oldPassword, newPassword } = values;

    try {
      if (displayName !== '') {
        await dispatch(
          updateDisplayNameThunk({ userId, newDisplayName: displayName })
        );
      }

      if (oldPassword !== '' && newPassword !== '') {
        dispatch(changePasswordAsync({ userId, oldPassword, newPassword }));
      }
      resetForm();
      Notify.success('Account updated successfully!', {
        timeout: 1000,
      });
    } catch (error) {
      Notify.failure(error, { timeout: 2000 });
    }
  };

  // const { displayName, oldPassword, newPassword } = values;

  // try {
  //   if (displayName !== '') {
  //     const updatedUser = dispatch(
  //       updateDisplayNameThunk({ userId, newDisplayName: displayName })
  //     );
  //     const updatedDisplayName = updatedUser.displayName;
  //     dispatch(updateUserName(updatedDisplayName));
  //     Notify.success('Display Name changed successfully');
  //   }

  //   if (oldPassword !== '' || newPassword !== '') {
  //     dispatch(changePasswordAsync({ oldPassword, newPassword }));
  //   } else if (displayName === '') {
  //     Notify.failure(
  //       'Please enter the old or new password for password change, or enter a new display name.'
  //     );
  //   }
  //   resetForm();
  // } catch (error) {
  //   Notify.failure(error.message);
  // }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationUserChange}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>New Display Name:</label>
          <Field type="text" name="displayName" />
          <ErrorMessage name="displayName" component="div" />
        </div>
        <div>
          <label>Old Password:</label>
          <Field type="password" name="oldPassword" />
          <ErrorMessage name="oldPassword" component="div" />
        </div>
        <div>
          <label>New Password:</label>
          <Field type="password" name="newPassword" />
          <ErrorMessage name="newPassword" component="div" />
        </div>
        <div>
          <button type="submit">Save Changes</button>
        </div>
      </Form>
    </Formik>
  );
};

export default UserProfileForm;

//const handleSubmit = (values, { resetForm }) => {
//     const { displayName, oldPassword, newPassword } = values;

//     if (displayName !== '') {
//       dispatch(updateDisplayNameThunk({ userId, newDisplayName: displayName }))
//         .then(updatedUser => {
//           const updatedDisplayName = updatedUser.displayName;
//           dispatch(updateUserName(updatedDisplayName));
//           Notify.success('Display Name changed successfully');
//         })
//         .catch(error => {
//           Notify.failure(error.message);
//         });
//     }

//     if (oldPassword !== '' || newPassword !== '') {
//       dispatch(changePasswordAsync({ oldPassword, newPassword }))
//         .then(() => {
//           Notify.success('Password changed successfully');
//         })
//         .catch(error => {
//           if (error && error.message === 'auth/invalid-credential') {
//             Notify.failure(
//               'Old password is incorrect. Please enter the correct old password.'
//             );
//           } else {
//             Notify.failure(`Password change failed: ${error.message}`);
//           }
//         });
//     } else if (displayName === '') {
//       Notify.failure(
//         'Please enter the old or new password for password change, or enter a new display name.'
//       );
//     }

//     // Clear the form after successful changes
//     resetForm();
//   };
