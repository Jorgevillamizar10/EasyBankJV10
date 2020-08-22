import React from 'react';
import {
  Section,
  Title,
  Container,
  Article,
  Figure,
  Img,
  Div,
  Subtitle,
  Credits,
  Parrafo,
} from './styles';
import Currency from '../../images/image-currency.jpg';
import Restaurant from '../../images/image-restaurant.jpg';
import Plane from '../../images/image-plane.jpg';
import Confeti from '../../images/image-confetti.jpg';

export const LatestArticles = () => {
  return (
    <Section>
      <Title>Latest Articles</Title>
      <Container>
        <Article>
          <Figure>
            <Img src={Currency} alt='img' />
          </Figure>
          <Div>
            <Credits>By Claire Robinson</Credits>
            <Subtitle>Receive money in any currency with no fees</Subtitle>
            <Parrafo>
              The world is getting smaller and we're becoming more mobile.So why
              should you be forced to only receive money in a single...
            </Parrafo>
          </Div>
        </Article>
        <Article>
          <Figure>
            <Img src={Restaurant} alt='img' />
          </Figure>
          <Div>
            <Credits>By Wilson Hutton</Credits>
            <Subtitle>Treat yourself without worrying about money</Subtitle>
            <Parrafo>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you ...
            </Parrafo>
          </Div>
        </Article>
        <Article>
          <Figure>
            <Img src={Plane} alt='img' />
          </Figure>
          <Div>
            <Credits>By Wilson Hutton</Credits>
            <Subtitle>Take your Easybank card wherever you go</Subtitle>
            <Parrafo>
              We want you to enjoy our travels.This is why we don't charge any
              fees on purchases while you're abroad.We'll even show you ...
            </Parrafo>
          </Div>
        </Article>
        <Article>
          <Figure>
            <Img src={Confeti} alt='img' />
          </Figure>
          <Div>
            <Credits>By Claire Robinson</Credits>
            <Subtitle>Our invite-only Beta accounts are now live!</Subtitle>
            <Parrafo>
              After a lot of hard work by the whole team,we're excited to launch
              our closed beta.It's easy to request an invite through the site
              ...
            </Parrafo>
          </Div>
        </Article>
      </Container>
    </Section>
  );
};
