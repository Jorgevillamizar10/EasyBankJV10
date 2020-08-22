import styled from 'styled-components';

export const Container = styled.div`
  background-color: hsl(0, 0%, 98%);
  display: flex;
  max-width: 1500px;
  height: 500px;
  margin: 0;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: hidden;
  @media (max-width: 850px) {
    display: block;
    /* margin: 0 10px; */
    text-align: center;
    height: 800px;
  }
`;

export const Div = styled.div`
  margin-left: 135px;
  height: 100%;
  width: 30%;
  position: relative;
  top: 100px;
  @media (max-width: 1024px) {
    height: auto;
    margin: 0;
    top: -30px;
  }
  @media (max-width: 850px) {
    top: -40px;
    height: 50%;
    width: 100%;
    text-align: center;
  }
  @media (max-width: 450px) {
    top: 50px;
  }
`;

// Imagen Desktop
export const FigureDesktop = styled.figure`
  width: 100%;
  height: 70%;
  margin: 0;
  padding: 0;
  display: none;
  @media (max-width: 850px) {
    display: block;
    position: relative;
    top: 70px;
  }
  @media (max-width: 450px) {
    height: 60%;
  }
  @media (max-width: 400px) {
    height: 50%;
  }
`;

export const ImgDesktop = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  bottom: 30px;
  @media (max-width: 550px) {
    bottom: 70px;
  }
`;

export const IphoneDesktop = styled.img`
  width: 90%;
  height: 100%;
  position: relative;
  bottom: 680px;
  @media (max-width: 550px) {
    top: -715px;
  }
  @media (max-width: 450px) {
    top: -580px;
  }
  @media (max-width: 400px) {
    top: -530px;
  }
`;

// ----------------------------------------------------------

export const Title = styled.h1`
  font-size: 40px;
  font-weight: none;
  letter-spacing: 0.5px;
  @media (max-width: 850px) {
    font-size: 25px;
  }
`;

export const Parrafo = styled.p`
  font-size: 16px;
  letter-spacing: 0.3px;
  margin-top: 25px;
`;

export const Figure = styled.figure`
  display: flex;
  align-items: center;
  position: relative;
  right: -70px;
  width: 50%;
  height: 100%;
  margin: 0;
  @media (max-width: 850px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 130%;
  height: 1000px;
  position: relative;
  left: -33px;
`;

export const Iphones = styled.img`
  width: 80%;
  /* margin-top: -40px; */
  position: relative;
  left: -115%;
`;

export const Button = styled.button`
  /* background-color: #8d00ff; */
  background: linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
  border: none;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  height: 37px;
  margin: 0px;
  width: 130px;
  display: block;
  margin-top: 30px;
  outline: 0;
  &[disabled] {
    opacity: 0.3;
  }
  @media (max-width: 850px) {
    display: inline;
    justify-content: center;
  }
`;
