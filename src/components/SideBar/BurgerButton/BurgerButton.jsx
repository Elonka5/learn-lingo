import { useState } from 'react';
import { useSpring } from 'react-spring';
import { useEffect } from 'react';
import { BurgerBtn, ContainerBMenu, Wrapper } from './BurgerButtonStyled';

const CONFIG = {
  mass: 2,
  tension: 1750,
  friction: 100,
  clamp: true,
};

const BurgerButton = ({ onClick, isModalOpen }) => {
  const [animation, setAnimation] = useState({
    buns: false,
    patty: false,
  });

  const handleClick = () => {
    const copy = { ...animation };
    const { buns, patty } = copy;
    if (buns && patty) {
      setAnimation({
        patty: !patty,
        buns: !buns,
      });
    } else {
      setAnimation({
        ...copy,
        patty: !patty,
      });
    }

    onClick();
  };
  useEffect(() => {
    if (!isModalOpen) {
      setAnimation(prevAnimation => ({
        ...prevAnimation,
        buns: false,
        patty: false,
      }));
    }
  }, [isModalOpen]);

  const handlePattyCallback = () => {
    const copy = { ...animation };
    const { buns, patty } = copy;
    if (!buns && patty) {
      setAnimation({
        ...copy,
        buns: !buns,
      });
    }
  };

  const topSpring = useSpring({
    config: CONFIG,
    transform: animation.buns
      ? `translate(2px, 6px) rotate(45deg)`
      : `translate(0px, 0px) rotate(0deg)`,
  });

  const midSpring = useSpring({
    config: CONFIG,
    transform: animation.patty ? `translateX(100%)` : `translateX(0%)`,
    onRest: handlePattyCallback,
  });

  const bottomSpring = useSpring({
    config: CONFIG,
    transform: animation.buns
      ? `translate(2px, -8px) rotate(-45deg)`
      : `translate(0px, 0px) rotate(0deg)`,
  });

  return (
    <Wrapper>
      <ContainerBMenu
        onClick={() => {
          handleClick();
        }}
      >
        <BurgerBtn style={topSpring} />
        <BurgerBtn style={midSpring} />
        <BurgerBtn style={bottomSpring} />
      </ContainerBMenu>
    </Wrapper>
  );
};

export default BurgerButton;
