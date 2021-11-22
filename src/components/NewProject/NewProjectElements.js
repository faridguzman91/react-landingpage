import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div `
  min-height: 90vh;
  /* position: fixed; */
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #e4e4e4;
`;

export const FormWrap = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;
export const Icon = styled(Link)
`
  margin-left: 52px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 200;
  font-size: 12px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.div `
  background: #e4e4e4;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  /* box-shadow: 0 1px 1px #52525291; */
  position: relative;
  top: 100px;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.div `
  margin-bottom: 40px;
  color: #000000;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label `
  margin-bottom: 8px;
  font-size: 14px;
  color: #000000;
`;

export const FormInput = styled.input `
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 8px;
`;

export const FormButton = styled.button `
  background: #007bff;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-size: 20p;

  &:hover {
    background: #fff;
    color: #000;
     transition: 0.1s ease-in
  }
`;

export const Text = styled.div `
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const UploadFormButton = styled.div `
background: #fff;
padding: 16px 0;
font-size: 3rem;
display: flex;
justify-content: center;
align-items: center;
border: none;
border-radius: 4px;
color: #000;
margin-bottom: 20px;
width: 100px;
height: 80px;

&:hover {
    background: #007bff;
    color: white;
    transition: 0.1s ease-in
}
`