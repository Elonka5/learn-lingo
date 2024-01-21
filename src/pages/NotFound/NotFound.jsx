import { StyledNav } from '../../components/Hero/Hero.styled';
import { BackgroundNotFound, WrapperNotFound } from './NotFoundStyled';
import notFoundImg from '../../assets/images/not_found.png';
import notFoundImgWebp from '../../assets/images/not_found_webp.webp';

const NotFound = () => {
  return (
    <BackgroundNotFound>
      <WrapperNotFound>
        <h1>4 0 4</h1>
        <picture>
          <source
            media="(min-width: 320px)"
            srcSet={`${notFoundImgWebp} 1x`}
            type="image/webp"
          />
          <source
            media="(min-width: 320px)"
            srcSet={`${notFoundImg} 1x`}
            type="image/png"
          />
          <img src={notFoundImg} alt="not_found_image" loading="lazy" />
        </picture>

        <p>
          Ooops!
          <br /> We can't seem to find a page you are looking for! <br /> Don't
          worry and try it out again!
        </p>
        <StyledNav to="/">Go Back</StyledNav>
      </WrapperNotFound>
    </BackgroundNotFound>
  );
};

export default NotFound;
