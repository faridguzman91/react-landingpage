import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div `
  /* min-height: 98vh; */
  /* position: fixed; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #f7f7f7;
  /* background-image: url('https://images.unsplash.com/photo-1557243962-5a60796cd474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
  background-size: cover; */
object-fit: contain;
background-repeat: no-repeat;
fill-opacity: 0.8;
font-family: 'GalanoGrotesqueMedium', sans-serif;


`;

export const FormWrap = styled.div `
  /* height: 100%; */
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
  background: #e1e1e1;
  /* max-width: fit-content; */
  height: auto;
  width: 70vw;
  z-index: 1;
  padding: 20px;

  display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
  margin: 0 auto;

  border-radius: 4px;
 box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
  position: relative;
  top: 80px;
   background-attachment: fixed;


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

export const FormName = styled.h1 `
position: relative;
padding: 20px;
font-family: GalanoGrotesqueMedium;
top: 80px;
/* margin-bottom: 100px; */
background: #e1e1e1;
  `


export const FormNewProject = styled.div`
  margin-bottom: 40px;
  color: #000000;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel1 = styled.label `
 grid-area: 1 / 1 / 2 / 2;
 display: flex;
 justify-content: center;
 align-items: center;
  /* margin-bottom: 8px; */
  font-size: 14px;
  color: #000000;
`;

export const FormLabel2 = styled.label`
 grid-area: 1 / 2 / 2 / 3;
  display: flex;
 justify-content: center;
 align-items: center;
/*
  margin-bottom: 8px; */
  font-size: 14px;
  color: #000000;
`;
export const FormLabel3 = styled.label`
grid-area: 1 / 3 / 2 / 4;
 display: flex;
 justify-content: center;
 align-items: center;
  /* margin-bottom: 8px; */
  font-size: 14px;
  color: #000000;
`;


export const FormInput1 = styled.input `
  padding: 8px;
  margin-bottom: 32px;
  border: none;
  margin: 0 auto;
  /* border-radius: 8px; */
`;

export const FormInput2 = styled.input`
  padding: 8px;
  margin-bottom: 32px;
  border: none;
  margin: 0 auto;
  /* border-radius: 8px; */
`;

export const FormInput3= styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 8px;
`;


export const FormButton = styled.button `
  grid-area: 2 / 3 / 3 / 4;
  background: #007bff;
  padding: 16px;
  border: none;
  /* border-radius: 4px; */
  cursor: pointer;
  color: #ffffff;
  font-size: 16px;
  width: max-content;
  Position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
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
padding: 16px ;
font-size: 2rem;
display: flex;
margin-right: 20px;
padding: 20px;
cursor: pointer;
justify-content: center;
align-items: center;
border: none;
border-radius: 4px;
color: #000;
margin-bottom: 20px;
width: max-content;
/* height: 80px; */

&:hover {
    background: #007bff;
    color: white;
    transition: 0.1s ease-in
}
`

export const ProjectsWrapper = styled.div `
top: 100px;
height: max-content;
margin-top: 10px;
margin-bottom: 100px;
width: 70vw;
position: relative;
background-color: transparent;

justify-content: flex-start;
align-items: flex-start;
padding: 1px;
`

export const ProjectsWrapperTitle = styled.h1 `
font-family: GalanoGrotesqueMedium;
font-size: 20px;
position: relative;
top: 1px;
left: 1px;
margin-top: 10px;
padding: ;

`

export const ProjectsCardsContainer = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: space-space-evenly;
align-items: center;
margin-top: 50px;
`

export const ProjectCard = styled.div `
padding: 2%;
/* flex-grow: 1; */

display: flex;
height: 280px;
width: 40px;
border: 1px solid gray;
flex: 0 1 25%;
`