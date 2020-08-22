import styled from 'styled-components';

export const Section = styled.section`
  background-color: hsl(0, 0%, 98%);
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

export const Title = styled.h2`
  font-size: 25px;
  letter-spacing: 0.5px;
  margin-left: 168px;
  /* margin-top: 0; */
  margin-bottom: 0;
  position: relative;
  left: -0.5%;
  top: -10px;
  width: 100%;
  @media (max-width: 1024px) {
    height: auto;
    top: 5px;
    left: 0;
    margin: 10px;
  }
  @media (max-width: 500px) {
    text-align: center;
    top: 25px;
  }
`;

export const Container = styled.div`
  margin-left: 168px;
  height: 75%;
  display: grid;
  grid-template-columns: repeat(4, minmax(80px, 240px));
  justify-content: center;
  grid-gap: 28px;
  position: relative;
  left: -10px;
  top: -30px;
  @media (max-width: 1024px) {
    margin: 10px;
    left: 0;
    top: 0;
  }
  @media (max-width: 840px) {
    display: flex;
    flex-wrap: wrap;
    margin: 35px 0;
    text-align: center;
  }
  @media (max-width: 828px) {
    display: block;
    margin: 30px 60px;
  }
`;

export const Article = styled.article`
  margin: 0;
  background: rgba(0, 0, 0, 0.06);
  border: 1px solid white;
  border-radius: 10px;
  @media (max-width: 840px) {
    width: auto;
    text-align: center;
    margin-top: 30px;
  }
`;

export const Figure = styled.figure`
  width: 100%;
  height: 45%;
  margin: 0;

  @media (max-width: 840px) {
    height: 25%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
`;

export const Div = styled.div`
  width: 80%;
  height: 50%;
  position: relative;
  /* top: -16px; */
  margin-left: 20px;
`;

export const Subtitle = styled.h3`
  margin: 0;
  &:hover {
    color: hsl(136, 65%, 51%);
    cursor: pointer;
  }
  @media (max-width: 1050px) {
    font-size: 18px;
  }
`;

export const Credits = styled.p`
  margin-top: 10px;
  font-size: 12px;
  @media (max-width: 1050px) {
    font-size: 10px;
    margin-top: 5px;
  }
`;

export const Parrafo = styled.p`
  font-size: 14px;
  @media (max-width: 1050px) {
    font-size: 12px;
    margin-top: 5px;
  }
`;
