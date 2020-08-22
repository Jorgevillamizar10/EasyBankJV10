import styled from 'styled-components';
import Reunion from '../../images/Reunion2.jpg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 1500px;
  height: 500px;
  margin: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Reunion});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  flex: wrap;
  @media (max-width: 550px) {
    height: 70%;
  }
`;

export const Texto = styled.div`
  display: block;
`;

export const Title = styled.h1`
  font-size: 100px;
  box-shadow: rgba(0, 0, 0, 1);
  color: white;
  position: relative;
  @media (max-width: 550px) {
    font-size: 60px;
  }
  @media (max-width: 450px) {
    font-size: 50px;
  }
`;

export const Parraf = styled.p`
  font-size: 25px;
  color: white;
  position: relative;
  margin: 0 50px;
  top: -40px;
  @media (max-width: 550px) {
    font-size: 18px;
  }
  @media (max-width: 450px) {
    font-size: 14px;
    top: -25px;
  }
`;
