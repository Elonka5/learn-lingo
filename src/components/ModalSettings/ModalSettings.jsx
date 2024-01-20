import AvatarUploader from './AvatarUploader/AvatarUploader';
import UserProfileForm from './UserProfile';

const ModalSettings = () => {
  return (
    <div>
      <AvatarUploader />
      {/* <DisplayNameForm />
      <ChangePasswordForm /> */}
      <UserProfileForm />
    </div>
  );
};

export default ModalSettings;
