import { useEffect } from 'react';
import { useState } from 'react';
import { ScrollButton } from './ButtonToTopStyled';
import { FaArrowUp } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const ButtonToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showTopBtn && (
        <ScrollButton onClick={goToTop}>
          <IconContext.Provider value={{}}>
            <FaArrowUp />
          </IconContext.Provider>
          <span> To Top</span>
        </ScrollButton>
      )}
    </>
  );
};

export default ButtonToTop;
