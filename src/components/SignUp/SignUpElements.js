import styled from "styled-components";
import { Link } from "react-router-dom";
import Checkbox from "./Checkbox";

export const Container = styled.div`
  min-height: 9;
  /* position: fixed; */
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  /* background-image: url("https://images.unsplash.com/photo-1629118938047-0f28bbe5af7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80"); */
  /* background: linear-gradient(126deg, rgba(235,235,235,1) 0%, rgba(242,242,242,1) 35%, rgba(199,199,199,1) 100%);  */
  background-size: cover;
  object-fit: contain;
  background-repeat: no-repeat;
  fill-opacity: 0.8;
  background-attachment: fixed;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Silka', sans-serif;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;
export const Icon = styled(Link)`
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

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.div`
  background: transparent;

  /* backdrop-filter: blur(10px); */
  max-width: fit-content;
  height: 700px;
  width: max-content;
/* clip-path: inset(10em); */
  /* filter: blur(5px); */
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: none;
  position: relative;
  font-family: GalanoGrotesqueMedium;
  /* filter: blur(80px); */
  /* top: 80px; */
  /* padding: 0px; */

  background-attachment: fixed;

  &::after {
    /* width: 400px;
  height: 550px; */
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: inherit;

    box-shadow: inset 200px rgba(225, 225, 225, 0.734);
    filter: blur(1px);
    z-index: 3;
  }

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.div`
  margin-bottom: 40px;
  color: #000000;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  z-index: 5;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #000000;
  font-family: "Silka", sans-serif;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormInput = styled.input`
  padding: 8px;
  margin-bottom: 1px;
  border: 1px solid grey;
  border-radius: 0px;
  font-family: "Silka", sans-serif;
  z-index: 5;
  width: 80%;
  
`;

export const FormButton = styled.button`
  background: #007bff;
  padding: 0px 0;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  z-index: 5;
  margin: 0 auto;
  width: 100px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #fff;
    color: #000;
    transition: 0.2s ease-in;
  }
`;

export const Text = styled.div`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
  font-family: "Silka", sans-serif;
  z-index: 5;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox " })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  z-index: 5;
`;

export const CheckboxIcon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  z-index: 5;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? "#000" : "#fff")};
  border-radius: 3px;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${CheckboxIcon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const CheckboxContainer = styled.div`
  display: initial;
  vertical-align: super;
  margin-bottom: 10px;
  padding: 5px;
  color: #000;
  width: 500px;
  font-size: 14px;
  text-align: left;
  z-index: 5;

  input {
    margin-right: 10px;
  }
`;
