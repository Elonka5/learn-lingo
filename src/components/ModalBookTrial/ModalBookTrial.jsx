import React from 'react';
import { validationBooking } from '../../helpers/schemas';
import {
  AvatarWrapper,
  RadioInput,
  ReasonText,
  StyledForm,
  StyledLabel,
  StyledWrapperForm,
  WrapperRadioBtn,
} from './ModalBookTrialStyled';
import { Formik } from 'formik';
import {
  ModalText,
  StyledError,
  StyledInput,
  WrapperInput,
} from '../SignUpForm/SignUpFormStyled';
import { useDispatch } from 'react-redux';
import { sendUserDataThunk } from '../../redux/Auth/UserDataThunk';
import { useModal } from '../ModalContext/ModalContextProvider';
import Button from '../Button/Button';

const initialState = {
  email: '',
  name: '',
  phone: '',
  reason: '',
  selectedTeacherId: null,
};

const ModalBookTrial = ({ id, name, surname, avatar_url }) => {
  const toggleModal = useModal();
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    const userData = { ...values, selectedTeacherId: id };

    dispatch(sendUserDataThunk(userData));
    resetForm();
    toggleModal();
  };

  return (
    <>
      <ModalText
        style={{
          marginBottom: '20px',
        }}
      >
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </ModalText>
      <AvatarWrapper>
        <img src={avatar_url} height="44px" width="44px" alt="Teacher avatar" />
        <div>
          <p> Your teacher</p>
          <p>{`${name} ${surname}`}</p>
        </div>
      </AvatarWrapper>
      <Formik
        initialValues={initialState}
        validationSchema={validationBooking}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values }) => (
          <StyledForm>
            <ReasonText>
              What is your main reason for learning English?
            </ReasonText>
            <WrapperRadioBtn>
              <StyledLabel
                className={values.reason === 'Career and business' && 'checked'}
              >
                <RadioInput
                  type="radio"
                  name="reason"
                  value="Career and business"
                />
                Career and business
              </StyledLabel>
              <StyledLabel
                className={values.reason === 'Lesson for kids' && 'checked'}
              >
                <RadioInput
                  type="radio"
                  name="reason"
                  value="Lesson for kids"
                />
                Lesson for kids
              </StyledLabel>
              <StyledLabel
                className={values.reason === 'Living abroad' && 'checked'}
              >
                <RadioInput type="radio" name="reason" value="Living abroad" />
                Living abroad
              </StyledLabel>
              <StyledLabel
                className={
                  values.reason === 'Exams and coursework' && 'checked'
                }
              >
                <RadioInput
                  type="radio"
                  name="reason"
                  value="Exams and coursework"
                />
                Exams and coursework
              </StyledLabel>
              <StyledLabel
                className={
                  values.reason === 'Culture, travel or hobby' && 'checked'
                }
              >
                <RadioInput
                  type="radio"
                  name="reason"
                  value="Culture, travel or hobby"
                />
                Culture, travel or hobby
              </StyledLabel>
            </WrapperRadioBtn>
            <StyledWrapperForm>
              <WrapperInput>
                <StyledInput
                  $error={errors.name && touched.name}
                  type="text"
                  name="name"
                  placeholder="Full name"
                />
                <StyledError name="name" component="span" />
              </WrapperInput>
              <WrapperInput>
                <StyledInput
                  $error={errors.email && touched.email}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <StyledError name="email" component="span" />{' '}
              </WrapperInput>
              <WrapperInput style={{ marginBottom: '40px' }}>
                <StyledInput
                  $error={errors.phone && touched.phone}
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                />
                <StyledError name="phone" component="span" />{' '}
              </WrapperInput>
            </StyledWrapperForm>
            <Button type="submit" text="Book" variant="modalbook" />
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default ModalBookTrial;
