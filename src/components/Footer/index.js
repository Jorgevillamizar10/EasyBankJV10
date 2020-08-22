import React from 'react';
import {
  Section,
  Logo,
  Icon,
  Nav,
  Link,
  IconCopy,
  Button,
  Parrafo,
  FirstContainer,
  DivIcons,
  DivMenu,
  Lista,
  SecondContainer,
} from './styles';
import Logo2 from '../../images/logo.svg';
import Facebook from '../../images/icon-facebook.svg';
import Youtube from '../../images/icon-youtube.svg';
import Twitter from '../../images/icon-twitter.svg';
import Pinterest from '../../images/icon-pinterest.svg';
import Instagram from '../../images/icon-instagram.svg';
import Copyright from '../../images/derechos-de-autor.svg';

export const Footer = () => {
  return (
    <Section>
      <FirstContainer>
        <Logo src={Logo2} alt='logo' />
        <DivIcons>
          <Icon src={Facebook} alt='logo' />
          <Icon src={Youtube} alt='logo' />
          <Icon src={Twitter} alt='logo' />
          <Icon src={Pinterest} alt='logo' />
          <Icon src={Instagram} alt='logo' />
        </DivIcons>
      </FirstContainer>
      <DivMenu>
        <Nav>
          <Lista>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/'>Blog</Link>
          </Lista>
          <Lista>
            <Link to='/careers'>Careers</Link>
            <Link to='/'>Suport</Link>
            <Link to='/'>Privacy Policy</Link>
          </Lista>
        </Nav>
      </DivMenu>

      <SecondContainer>
        <Button>Request Invite</Button>
        <Parrafo>
          <IconCopy src={Copyright} /> Easybank. All Rights Reserved
        </Parrafo>
      </SecondContainer>
    </Section>
  );
};
