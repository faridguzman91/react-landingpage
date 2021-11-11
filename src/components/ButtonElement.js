import styled from 'styled-components'
// import { Link } from 'react-scroll'


//$ variables dependant on Data.js property values

export const Button = styled.div`
font-family: 'Silka', sans-serif;
border-radius: 50px;
background: ${({ primary }) => (primary ? '#46acfa' : '#010606')};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
color: ${({ dark }) => (dark ? '#010606' : '#fff')};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
box-shadow: 0px 2px 2px 2px #00000018;

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#000')};

}


`