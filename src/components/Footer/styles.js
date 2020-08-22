import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Section = styled.footer`
  background-color: hsl(233, 26%, 24%);
  display: flex;
  max-width: 1500px;
  height: 130px;
  margin: 0;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1100px) {
    height: auto;
    flex-direction: column;
    text-align: center;
  }
`;

export const FirstContainer = styled.div`
  margin-left: 160px;
  width: 15%;
  height: 80%;
  position: relative;
  /* top: 10px; */
  display: block;
  /* text-align: center; */
  /* background: red; */
  @media (max-width: 1100px) {
    height: auto;
    margin-left: 0;
    margin-bottom: 30px;
    /* text-align: center; */
    width: 50%;
  }
`;

export const DivIcons = styled.div`
  width: 100%;
  height: 40%;
  margin: 0;
  position: relative;
  top: 40px;
  display: flex;
  /* align-items:center; */
  justify-content: space-between;
`;

export const Logo = styled.img`
  filter: hue-rotate(0) brightness(100);
  position: relative;
  top: 20px;
`;

export const Icon = styled.img`
  width: 25px;
  height: 24px;
  margin: 0;
  &:hover {
    cursor: pointer;
    filter: hue-rotate(103deg) saturate(48.9%) brightness(43.7%);
  }
`;

export const DivMenu = styled.div`
  /* background: green; */
  width: 25%;
  height: 80%;
  position: relative;
  /* top: -5px; */
  right: 100px;
  margin: 5px 40px;
  @media (max-width: 1100px) {
    margin: 20px 0;
    right: 0;
    width: 50%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  color: white;
  @media (max-width: 700px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const Lista = styled.ol`
  margin: 0;
  @media (max-width: 500px) {
    padding: 0 20px;
  }
`;

export const Link = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 15px;
  margin-top: 13px;
  color: white;
  text-decoration: none;
  &:hover {
    color: hsl(136, 65%, 51%);
    cursor: pointer;
  }
`;

export const SecondContainer = styled.div`
  width: 20%;
  height: 80%;
  /* background: green; */
  position: relative;
  margin-right: 150px;
  @media (max-width: 1100px) {
    height: auto;
    margin-right: 0;
    margin-bottom: 15px;
    width: 50%;
  }
`;

export const IconCopy = styled.img`
  width: 15px;
  height: 15px;
  margin: 0;
  position: relative;
  top: 2.5px;
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
  position: relative;
  right: -65px;
  top: -15px;
  &[disabled] {
    opacity: 0.3;
  }
  @media (max-width: 1100px) {
    right: 0px;
    display: inline;
    justify-content: center;
  }
`;

export const Parrafo = styled.p`
  position: relative;
  right: -15px;
  font-size: 13px;
  color: gray;
  @media (max-width: 1000px) {
    right: 0;
  }
`;
