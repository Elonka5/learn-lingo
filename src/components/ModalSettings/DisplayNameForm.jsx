import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDisplayNameAsync } from '../../redux/Auth/AuthThunk';
import { useEffect } from 'react';
import { updateUserName } from '../../redux/Auth/AuthSlice';

const DisplayNameForm = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.userId);
  const userName = useSelector(state => state.auth.name);

  const [displayName, setDisplayName] = useState('');

  const handleInputChange = e => {
    setDisplayName(e.target.value);
  };

  const handleUpdateDisplayName = newDisplayName => {
    dispatch(updateDisplayNameAsync({ userId, displayName: newDisplayName }))
      .then(updatedUser => {
        const updatedDisplayName = updatedUser.displayName;
        dispatch(updateUserName(updatedDisplayName));
      })
      .catch(error => {});
  };

  useEffect(() => {
    if (userName !== undefined) {
      console.log('User Data after update:', userName);
    }
  }, [userName]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter new Name"
        value={displayName}
        onChange={handleInputChange}
      />
      <button onClick={() => handleUpdateDisplayName(displayName)}>
        Change name
      </button>
    </div>
  );
};

export default DisplayNameForm;
