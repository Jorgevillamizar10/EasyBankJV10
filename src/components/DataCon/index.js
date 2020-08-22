import React from 'react';
import {
  Section,
  ContactInfo,
  ContainerInputs,
  SubTitle,
  Article,
  SubContainer,
  H4,
  ArticleParr,
  Input,
} from './styles';
import Alfiler from '../../images/iconos/alfiler2.svg';
import Reloj from '../../images/iconos/reloj2.svg';
import Comentario from '../../images/iconos/comentario2.svg';

export const DataCon = () => {
  return (
    <Section>
      {/* Div Inoputs */}
      <ContainerInputs>
        <Input type='text' placeholder='Name' />
        <Input type='text' placeholder='Email' />
        <Input type='text' placeholder='Message' />
      </ContainerInputs>
      {/* Contact Info */}
      <ContactInfo>
        <SubTitle>Contact Info</SubTitle>
        {/* Primero */}
        <Article>
          <img src={Alfiler} width='60px' />
          <SubContainer>
            <H4>Our Office</H4>
            <ArticleParr>
              1244 Dive St #1000, San Francisco, CA 98756
            </ArticleParr>
          </SubContainer>
        </Article>
        {/* Segundo */}
        <Article>
          <img src={Reloj} width='60px' />
          <SubContainer>
            <H4>Open Office Hours</H4>
            <ArticleParr>
              M-F 8am - 6pm <br />
              S-S 10am - 4pm
            </ArticleParr>
          </SubContainer>
        </Article>
        {/* Tercero */}
        <Article>
          <img src={Comentario} width='60px' />
          <SubContainer>
            <H4>Get in Touch</H4>
            <ArticleParr>
              Easybank@gmail.com <br />
              (541)931-4567
            </ArticleParr>
          </SubContainer>
        </Article>
      </ContactInfo>
    </Section>
  );
};
