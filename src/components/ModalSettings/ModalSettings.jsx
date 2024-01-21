import { useSelector } from 'react-redux';
import { selectTeachersLoading } from '../../redux/selectors';
import Loader from '../Loader/Loader';
import AvatarUploader from './AvatarUploader/AvatarUploader';
import UserProfileForm from './UserProfile/UserProfile';
import { WrapperAvatarAndProfile } from './UserProfile/UserProfileStyled';

const ModalSettings = () => {
  const isLoading = useSelector(selectTeachersLoading);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <WrapperAvatarAndProfile>
          <AvatarUploader />
          <UserProfileForm />
        </WrapperAvatarAndProfile>
      )}
    </>
  );
};

export default ModalSettings;
