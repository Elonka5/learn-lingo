// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateAvatar } from '../../redux/Auth/AuthThunk';
// import { storage } from '../../firebase/firebase';
// import { useDropzone } from 'react-dropzone';
// import { useState } from 'react';
// import DisplayNameForm from './DisplayNameForm';

// const ModalSettings = () => {
//   const [uploadedFile, setUploadedFile] = useState(null);
//   const userId = useSelector(state => state.auth.userId);
//   const dispatch = useDispatch();

//   const onDrop = acceptedFiles => {
//     const file = acceptedFiles[0];
//     setUploadedFile(file);
//   };

//   const { getRootProps, getInputProps } = useDropzone({ onDrop });

//   const handleAvatarUpdate = async () => {
//     if (uploadedFile) {
//       const storageRef = ref(storage, `avatars/${userId}`);

//       try {
//         await uploadBytes(storageRef, uploadedFile);

//         const downloadURL = await getDownloadURL(storageRef);

//         dispatch(updateAvatar(downloadURL));
//         console.log('Avatar uploaded successfully');
//       } catch (error) {
//         console.error('Avatar upload failed', error);
//         console.error('Error message:', error.message);
//       }
//     }
//   };

//   return (
//     <div>
//       <div {...getRootProps()}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       </div>
//       <button onClick={handleAvatarUpdate}>Upload Avatar</button>
//     </div>
//   );
// };

// export default ModalSettings;

import React from 'react';
import AvatarUploader from './AvatarUploader';
import DisplayNameForm from './DisplayNameForm';
import ChangePasswordForm from './ChangePasswordForm';

const ModalSettings = () => {
  return (
    <div>
      <AvatarUploader />
      <DisplayNameForm />
      <ChangePasswordForm />
    </div>
  );
};

export default ModalSettings;
