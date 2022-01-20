import styled from 'styled-components'

export const StepsTriangle = styled.div`
width: 100%;
height: 0;
border-style: solid; 
border-width: 10vw 20vw 0 0;
border-color: #007bff transparent transparent transparent;
position: relative;
z-index: 999;
`

export const StepsToggle = styled.div`
width: 40px;
height: 40px;
background: #007bff;
position: absolute;
border-radius: 50px;
right: -20px;
top: 40%;
color: white;
font-size: 25px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
z-index: 100;

&:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    translate: scale(1.15);
    
}
`

export const Logo = styled.img`
background-image: url('src\components\SidebarPro\logo\logo_vierkant_blauw_wit.png');
width: 100px;
height: 100px;
`


export const StepsContainer = styled.div`
/* width: 20%; */
width: ${({ toggleBar }) => (toggleBar ? '20px' : '20%')};
height: 100vh;
background-color: #ffffffef;
position: relative;
z-index:999;
top: 0;
border-right: 1px solid #b3b3b3;
`

export const StepsWrapper = styled.div`
display: grid;
grid-template-columns: 0.2fr 1fr;
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px; 
/* top: 200px; */
position: relative;
padding: 20px;


`

export const CircleContainer = styled.div`
grid-area: 1 / 1 / 2 / 2; 
display: flex;
flex-direction: column;
`

export const StepsCircles = styled.div`
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

export const StepsNumbers = styled.div`
color: ${({ stepComplete }) => (stepComplete ? '#ffffff' : '#000000')};
font-family: 'Silka', sans-serif;

`

export const StepsText = styled.h1`
font-family: 'Silka', sans-serif;
font-size: 16px;
display: flex;
`

export const TextContainer = styled.div`
grid-area: 1 / 2 / 2 / 3; 
display: flex;
flex-direction: column; 
margin: 0 auto;

`

export const Text = styled.div`
font-family: 'Silka', sans-serif;
padding: 16px;
font-size: 18px;
margin-bottom: 45px;
position: relative;

`

//sidebar icons


export const UserIcon = styled.i`
font-family: wwzr;
content: '\e933';
font-size: 20px;
`

export const projectsIcon = styled.i`
font-family: wwzr;
content: '\e916';
font-size: 20px;
`

export const unitsIcon = styled.i`
font-family: wwzr;
content: '\e91e';
font-size: 20px;
`

export const drawIcon = styled.i`
font-family: wwzr;
content: '\e90f';
font-size: 20px;

`

export const publishIcon = styled.i`
font-family: wwzr;
content: '\e931';
font-size: 20px;
`

export const dashboardIcon = styled.i`
font-family: wwzr;
content: '/e94c';
font-size: 20px;
`


export const settingsIcon = styled.i``