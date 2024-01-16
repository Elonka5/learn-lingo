import React from 'react';
import { StyledNav } from '../../components/Hero/Hero.styled';
import { BackgroundNotFound, WrapperNotFound } from './NotFoundStyled';

const NotFound = () => {
  return (
    <BackgroundNotFound>
      <WrapperNotFound>
        <h1>4 0 4</h1>
        <p>
          Ooops! We can't seem to find a page you are looking for! <br /> Don't
          worry and try it out again!
        </p>
        <StyledNav to="/catalog" style={{ width: '288px' }}>
          Go to Catalog
        </StyledNav>
      </WrapperNotFound>
    </BackgroundNotFound>
  );
};

export default NotFound;
