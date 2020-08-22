import styled from 'styled-components';

export const Section = styled.section`
  background-color: hsl(220, 16%, 96%);
  display: flex;
  max-width: 1500px;
  height: 500px;
  margin: 0;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    height: auto;
  }
  @media (max-width: 840px) {
    height: auto;
  }
`;

export const Container = styled.div`
  margin-left: 168px;
  height: 35%;
  position: relative;
  top: 50px;
  flex-wrap: wrap;
  /* align-items: center;
  justify-content: center; */
  @media (max-width: 1024px) {
    height: auto;
    top: 0;
    margin: 10px;
  }
  @media (max-width: 840px) {
    height: auto;
    top: -30px;
    margin: 35px 30px;
  }
  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 25px;
  letter-spacing: 0.5px;
`;

export const Parrafo = styled.p`
  font-size: 20px;
`;

export const SecondContainer = styled.div`
  margin-left: 168px;
  height: 60%;
  display: grid;
  grid-template-columns: repeat(4, minmax(80px, 240px));
  justify-content: center;
  grid-gap: 28px;
  position: relative;
  @media (max-width: 1024px) {
    margin: 10px;
  }
  @media (max-width: 840px) {
    display: block;
    text-align: center;
    margin-top: 30px;
    top: -60px;
  }
`;

export const Article = styled.article`
  margin: 0px;
  padding: 0px;
  display: block;
`;

export const ParrafxArt = styled.p`
  font-size: 14px;
`;

export const Img = styled.img`
  margin: 0;
  width: 60px;
  height: 60px;
`;
