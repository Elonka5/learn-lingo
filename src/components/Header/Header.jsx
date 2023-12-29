import React from 'react';
import { useModal } from '../ModalContext/ModalContextProvider';
import ModalRegistration from '../ModalRegistration/ModalRegistration';

const Header = () => {
  const toggleModal = useModal();
  return (
    <div>
      <h2>Learn Lingo</h2>
      <div>
        <p>Home</p>
        <p>Teachers</p>
      </div>
      <div>
        <button>Log In</button>
        <button
          onClick={() =>
            toggleModal(
              <ModalRegistration size="medium" title="Registration" />
            )
          }
          type="button"
        >
          Registration
        </button>
      </div>
    </div>
  );
};

export default Header;
