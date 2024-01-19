import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadAvatarAsync } from '../../redux/Auth/UserThunk';

const AvatarUploader = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.userId);
  console.log(userId);

  const [file, setFile] = useState(null);

  const handleFileChange = e => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      dispatch(uploadAvatarAsync({ file, userId }));
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Avatar</button>
    </div>
  );
};

export default AvatarUploader;
