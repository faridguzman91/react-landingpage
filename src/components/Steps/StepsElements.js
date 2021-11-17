import styled from 'styled-components'


export const StepsContainer = styled.div `
width: 20%;
height: 90vh;
background-color: #fff;
position: fixed;
`

export const StepsWrapper = styled.div `
display: grid;
grid-template-columns: 0.2fr 1fr;
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px; 
top: 200px;
position: relative;
padding: 20px;


`

export const CircleContainer = styled.div`
grid-area: 1 / 1 / 2 / 2; 
display: flex;
flex-direction: column;
`

export const StepsCircles = styled.div `
display: flex;

justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
background: ${({ stepComplete }) => (stepComplete ? '#3482e9' : '#fff')};
margin-bottom: 50px;
box-shadow: 0px 2px 2px #00000041;
`

export const StepsNumbers = styled.div `
color: ${({ stepComplete }) => (stepComplete ? '#ffffff' : '#000000')};
font-family: 'Silka', sans-serif;

`

export const StepsText = styled.h1 `
font-family: 'Silka', sans-serif;
font-size: 16px;
display: flex;
`

export const TextContainer = styled.div `
grid-area: 1 / 2 / 2 / 3; 
display: flex;
flex-direction: column; 
margin: 0 auto;

`

export const Text = styled.div`
font-family: 'Silka', sans-serif;
padding: 16px;
font-size: 1vw;
margin-bottom: 45px;
position: relative;

`
    
