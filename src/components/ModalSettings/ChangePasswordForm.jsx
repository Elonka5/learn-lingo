import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePasswordAsync } from '../../redux/Auth/AuthThunk';

const ChangePasswordForm = () => {
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = () => {
    dispatch(changePasswordAsync({ oldPassword, newPassword }));
  };

  return (
    <div>
      <label>
        Old Password:
        <input
          type="password"
          value={oldPassword}
          onChange={e => setOldPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        New Password:
        <input
          type="password"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  );
};

export default ChangePasswordForm;
