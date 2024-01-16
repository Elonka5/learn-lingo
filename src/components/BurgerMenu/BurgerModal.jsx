import React from 'react';
import { useSpring, animated } from 'react-spring';
import Navigation from '../Navigation/Navigation';

const BurgerModalSide = ({ isMenuOpen, closeBurgerMenu }) => {
  const animation = useSpring({
    left: isMenuOpen ? '0%' : '-100%',
    width: isMenuOpen ? '60%' : '0%',
    opacity: isMenuOpen ? 1 : 0,
    from: { left: '-100%', width: '0%', opacity: 0 },
    config: { duration: 500, tension: 120, friction: 14 },
  });

  return (
    <animated.div
      style={{
        position: 'fixed',
        top: 70,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 100,
        willChange: 'transform',
        transformOrigin: 'left center',
        backdropFilter: isMenuOpen ? 'blur(5px)' : 'blur(0)',
      }}
    >
      <animated.div
        style={{
          ...animation,
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          backgroundColor: '#9FBAAE',
          padding: '160px 20px',
        }}
      >
        <Navigation closeBurgerMenu={closeBurgerMenu} />
      </animated.div>
    </animated.div>
  );
};

export default BurgerModalSide;
