import React from 'react';
import { NavLink } from 'react-router-dom';
import heroImgWebp from '../../assets/images/hero_img_webp.webp';
import heroImgWebpRetina from '../../assets/images/hero_img_webp@2xmobile.webp';
import heroImg from '../../assets/images/hero_img.png';
import heroImgMobile from '../../assets/images/hero_img@2xmobile.png';

const Hero = () => {
  return (
    <div>
      <div>
        <h1>
          Unlock your potential with the best <span>language</span> tutors
        </h1>
        <p>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <NavLink to="/teachers" />
      </div>
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
    </div>
  );
};

export default Hero;
