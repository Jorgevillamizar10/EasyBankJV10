import styled, { css } from 'styled-components';
import { Link as LinkRouter } from '@reach/router';
import { rebot, fadeIn } from '../../styles/animation';

export const Cabecera = styled.div`
  background-color: white;
  height: 70px;
  margin: 0;
  padding: 0;
`;

export const Div = styled.div`
  position: relative;
  z-index: 100;
  background-color: white;
  display: flex;
  max-width: 1000px;
  align-items: center;
  justify-content: space-between;
  margin-left: 170px;
  flex-wrap: wrap;
  flex: 1;
  @media (max-width: 1024px) {
    margin-left: 0;
  }
  @media (max-width: 840px) {
    margin-top: 10px;
    height: auto;
    flex-direction: column;
  }
  @media (max-width: 550px) {
    height: 60px;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const ButtonMenu = styled.button`
  width: 40px;
  height: 40px;
  margin: 0;
  border: none;
  display: none;
  background-color: white;
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.fixed &&
    css`
  {
    ${rebot()}
    border-radius: 50%;
    /* efecto de profundidad */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    /* left: 0; */
    margin 0 auto;
    padding: 5px;
    position: fixed;
    right:20px;
    top: 20px;
    z-index:1;
  }
  `}
  /* Para mejores practicas usamos las props en vez de classname -> &.fixed  */
  @media (max-width: 550px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DesktopMenu = styled.nav`
  display: none;
  @media (max-width: 550px) {
    ${fadeIn()}
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 170px;
    margin: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    background: white;
    color: white;
    flex-wrap: wrap;
    position: fixed;
    top: 80px;
    outline: none;
    z-index: 1000;
  }
`;

export const DesktopList = styled.ol`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: block;
  color: black;
`;

export const LinkDesk = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 16px;
  margin-top: 13px;
  text-decoration: none;
  color: black;
  &:hover {
    color: hsl(136, 65%, 51%);
    cursor: pointer;
  }
  &[aria-current] {
    color: hsl(136, 65%, 51%);
  }
`;

export const Figure = styled.figure`
  margin: 0;
  padding: 0;
  @media (max-width: 550px) {
    position: relative;
    left: -70px;
    margin-left: 60px;
    /* margin-left: 10px; */
  }
`;
export const MenuH = styled.img`
  width: 20px;
  height: 20px;
  /* line-height: 40px; */
  /* text-align: center; */
  /*Para incluirlo dentro del Head*/
  position: relative;
  /*el fixed para que se mantenga fijo cuando me muevo*/
  z-index: 4;
  /* left: 410px; */
`;

export const Img = styled.img`
  height: 30px;
  margin: 0;
  padding: 0;
`;

export const Nav = styled.nav`
  height: 70px;
  margin: 0;
  padding: 0;
  display: flex;
  max-width: 500px;
  width: 100%;
  @media (max-width: 840px) {
    margin: 5px 0;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;

export const Link = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  height: 100%;
  text-decoration: none;
  width: 100%;
  &:hover {
    color: black;
    /* border-bottom: 4px solid linear-gradient(to right, #21c08b, #ab88ff); */
    background: linear-gradient(
        to right,
        hsl(136, 65%, 51%),
        hsl(192, 70%, 51%)
      )
      bottom no-repeat;
    background-size: 100% 4px;
  }
  &[aria-current] {
    color: black;
    background: linear-gradient(
        to right,
        hsl(136, 65%, 51%),
        hsl(192, 70%, 51%)
      )
      bottom no-repeat;
    background-size: 100% 4px;
  }
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
  /* display: block; */
  outline: 0;
  &[disabled] {
    opacity: 0.3;
  }
  @media (max-width: 840px) {
    margin-bottom: 10px;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;
