import { useModal } from '../ModalContext/ModalContextProvider';
import { DivModalBox, DivTitleWrapper } from './ModalBox.styled';
import { IoMdClose } from 'react-icons/io';

const ModalBox = ({ children, title, size, isLogoModal = false }) => {
  const toggleModal = useModal();

  return (
    <DivModalBox $size={size}>
      {!isLogoModal && (
        <DivTitleWrapper>
          <h2>{title}</h2>
          <IoMdClose aria-label="close_button" onClick={() => toggleModal()} />
        </DivTitleWrapper>
      )}
      {children}
    </DivModalBox>
  );
};

export default ModalBox;
