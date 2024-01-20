import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthId, selectUserAvatar } from '../../../redux/selectors';
import { uploadAvatarThunk } from '../../../redux/Auth/AuthThunk';
import {
  AvatarWrapper,
  DropZoneContainer,
  DropZoneText,
} from './AvatarUploaderStyled';
import { WrapperImg } from '../../TeacherCard/TeacherCardStyled';

const AvatarUploader = () => {
  const userId = useSelector(selectAuthId);
  const userAvatar = useSelector(selectUserAvatar);

  const dispatch = useDispatch();

  const onDrop = useCallback(
    acceptedFiles => {
      const file = acceptedFiles[0];
      dispatch(uploadAvatarThunk({ file, userId }));
    },
    [dispatch, userId]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <AvatarWrapper>
      <WrapperImg>
        {userAvatar && <img src={userAvatar} alt="user_avatar" />}
      </WrapperImg>
      <DropZoneContainer {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <DropZoneText>Drop the file here ...</DropZoneText>
        ) : (
          <DropZoneText>
            Drag 'n' drop some files here, or click to select files
          </DropZoneText>
        )}
      </DropZoneContainer>
    </AvatarWrapper>
  );
};

export default AvatarUploader;
