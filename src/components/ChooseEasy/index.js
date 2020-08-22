import React from 'react';
import {
  Section,
  Container,
  SecondContainer,
  Article,
  Title,
  ParrafxArt,
  Img,
} from './styles';

import IconOnline from '../../images/icon-online.svg';
import IconBudge from '../../images/icon-budgeting.svg';
import IconOnboard from '../../images/icon-onboarding.svg';
import IconApi from '../../images/icon-api.svg';

export const ChooseEasy = () => {
  return (
    <Section>
      {/* titulo y parrafo */}
      <Container>
        <Title>Why choose Easybank?</Title>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub.
          <br /> Control your finances like never before.
        </p>
      </Container>
      {/* articulos */}
      <SecondContainer>
        <Article>
          <Img src={IconOnline} alt='icon' />
          <h3>Online Banking</h3>
          <ParrafxArt>
            Our modern web and mobile <br /> applications allow you to keep
            <br /> track of your finances wherever <br /> you are in the world
          </ParrafxArt>
        </Article>
        <Article>
          <Img src={IconBudge} alt='icon' />
          <h3>Simple Budgeting</h3>
          <ParrafxArt>
            See exactly where your money <br /> goes each month. Receive
            <br /> notifications when you're close to hitting your limits.
          </ParrafxArt>
        </Article>
        <Article>
          <Img src={IconOnboard} alt='icon' />
          <h3>Fast Onboarding</h3>
          <ParrafxArt>
            We don't do branches.Open your <br /> account in minutes online and
            start taking control of your <br /> finances right away.
          </ParrafxArt>
        </Article>
        <Article>
          <Img src={IconApi} alt='icon' />
          <h3>Open Api</h3>
          <ParrafxArt>
            Manage your savings, investments,pension, and much more from one
            account.Tracking your money has never been easier.
          </ParrafxArt>
        </Article>
      </SecondContainer>
    </Section>
  );
};
