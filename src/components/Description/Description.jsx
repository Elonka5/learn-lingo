import React from 'react';
import {
  DescrWrapper,
  TextDescription,
  TitleDescription,
} from './DescriptionStyled';

const Description = () => {
  return (
    <section>
      <DescrWrapper>
        <li>
          <TitleDescription>32,000 +</TitleDescription>
          <TextDescription>Experienced tutors</TextDescription>
        </li>
        <li>
          <TitleDescription>300,000 +</TitleDescription>
          <TextDescription>5-star tutor reviews</TextDescription>
        </li>
        <li>
          <TitleDescription>120 +</TitleDescription>
          <TextDescription>Subjects taught</TextDescription>
        </li>
        <li>
          <TitleDescription>200 +</TitleDescription>
          <TextDescription>Tutor nationalities</TextDescription>
        </li>
      </DescrWrapper>
    </section>
  );
};

export default Description;
