import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useModal } from '../ModalContext/ModalContextProvider';
import { OverlayStyle } from './Overlay.styled';
import ModalBox from '../ModalBox/ModalBox';

const Overlay = ({ children }) => {
  const toggleModal = useModal();

  const backdropClick = evt => {
    if (evt.target === evt.currentTarget) toggleModal();
  };

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        toggleModal();
      }
    };

    document.body.style.overflow = 'hidden';

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';

      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  return createPortal(
    <OverlayStyle
      $isLogoModal={children.props.isLogoModal}
      onClick={backdropClick}
    >
      {children.props.isLogoModal ? (
        children
      ) : (
        <ModalBox {...children.props}>{children}</ModalBox>
      )}
    </OverlayStyle>,
    document.body
  );
};

export default Overlay;
