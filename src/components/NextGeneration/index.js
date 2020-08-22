import React from 'react';
import {
  Div,
  Figure,
  Img,
  Container,
  Title,
  Parrafo,
  Button,
  Iphones,
  ImgDesktop,
  FigureDesktop,
  IphoneDesktop,
} from './styles';
import IntroDesktop from '../../images/bg-intro-desktop.svg';
import IntroMobile from '../../images/bg-intro-mobile.svg';
import IntroIphones from '../../images/image-mockups.png';

export const NextGeneration = () => {
  return (
    <Container>
      <FigureDesktop>
        <ImgDesktop src={IntroMobile} alt='fondo-mobile' />
        <IphoneDesktop src={IntroIphones} alt='iphones' />
      </FigureDesktop>
      <Div>
        <Title>
          Next generation <br /> digital banking
        </Title>
        <Parrafo>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending,saving,
          <br /> budgeting,investing, and much more
        </Parrafo>
        <Button>Request Invite</Button>
      </Div>

      <Figure>
        <Img src={IntroDesktop} alt='fondo' />
        <Iphones src={IntroIphones} alt='iphones' />
      </Figure>
    </Container>
  );
};
