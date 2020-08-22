import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  max-width: 1500px;
  height: 400px;
  margin: 0;
  background: linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
  flex: wrap;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
  }
`;

export const ContainerInputs = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: wrap;
  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
    margin-top: 20px;
  }
`;

export const Input = styled.input`
  width: 70%;
  height: 10%;
  margin: 20px 0;
  border-left: 0px;
  border-top: 0px;
  border-right: 0px;
  border-bottom: 2px solid white;
  font-size: 16px;
  /* border-radius: 25px; */
  /* border: none; */
  padding: 0px 20px;
  letter-spacing: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  outline: none;
  &::placeholder {
    color: white;
  }
  @media (max-width: 900px) {
    height: 20%;
    font-size: 14px;
  }
`;

export const ContactInfo = styled.div`
  width: 40%;
  height: 100%;
  /* margin: 10px 10px;
  border-radius: 30px; */
  /* background: linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%)); */
  /* background: hsl(136, 65%, 51%); */
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const SubTitle = styled.h3`
  color: white;
  margin: 35px 35px;
  font-weight: none;
  font-size: 28px;
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 25px;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
    text-align: center;
  }
`;

export const Article = styled.div`
  margin: 35px 25px;
  padding: 0;
  display: flex;
  /* align-items: center;
  justify-content: center; */
  flex-direction: row;
  /* text-align: center; */
  flex: wrap;
  @media (max-width: 900px) {
    margin: 20px 25px;
  }
`;

export const SubContainer = styled.div`
  margin: 0 30px;
`;

export const H4 = styled.h4`
  color: white;
  margin: 0;
  font-size: 20px;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const ArticleParr = styled.p`
  color: white;
  margin: 5px 0;
  font-size: 16px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
