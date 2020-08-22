import React from 'react';
import { Container, Title, Parraf, Texto } from './styles';

export const ContactUs = () => {
  return (
    <Container>
      <Texto>
        <Title>Contact Us</Title>
        <Parraf>
          There's nothing we like more than rolling up our sleeves and starting
          a brand new project.
          <br />
          Let's make something great together.
        </Parraf>
      </Texto>
    </Container>
  );
};
