import { HeroWrapper, StyledNav, Title, TitleWrapper } from './Hero.styled';
import heroImgWebp from '../../assets/images/hero_img_webp.webp';
import heroImgWebpRetina from '../../assets/images/hero_img_webp@2xmobile.webp';
import heroImg from '../../assets/images/hero_img.png';
import heroImgMobile from '../../assets/images/hero_img@2xmobile.png';

const Hero = () => {
  return (
    <section>
      <HeroWrapper>
        <TitleWrapper>
          <Title>
            Unlock your potential with the best <span>language</span> tutors
          </Title>
          <p>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <StyledNav to="/teachers">Get started</StyledNav>
        </TitleWrapper>
        <div>
          <picture>
            <source
              media="(min-width: 320px)"
              srcSet={`${heroImgWebp} 1x, ${heroImgWebpRetina} 2x`}
              type="image/webp"
            />
            <source
              media="(min-width: 320px)"
              srcSet={`${heroImg} 1x, ${heroImgMobile} 2x`}
              type="image/png"
            />
            <img src={heroImg} alt="hero_image" loading="lazy" />
          </picture>
        </div>
      </HeroWrapper>
    </section>
  );
};

export default Hero;
