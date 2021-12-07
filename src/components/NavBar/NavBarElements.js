//@ts-nocheck

import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const Fonts = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Pangolin&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100&family=Montserrat:wght@300;400;500;600;700&display=swap');
`

//$ variables dependant on Data.js property values

export const Nav = styled.nav`
font-family: 'Lato', sans-serif;
background: ${({ scrollNav }) => (scrollNav ? '#3392ffe3' : '#ffffff6e')};
height: 80px;
color: ${({ scrollNav }) => (scrollNav ? '#ffffff' : '#ffffff')};
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
transition: 0.3s all ease;
z-index: 10;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`

export const NavBarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 100;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
font-family: 'Silka Italic', sans-serif;
font-weight: 100;
color: ${({ scrollNav }) => (scrollNav ? '#ffffff' : '#000000')};
justify-self: flex-start;
cursor: pointer;
font-size: 1.5 rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`
export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000000;
}
`

export const NavMenu = styled.ul`
font-family: 'Lato', sans-serif;
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavItem = styled.li`
height: 80px;
color: ${({ scrollNav }) => (scrollNav ? '#ffffff' : 'transparent')};
transition: 0.2s ease-in-out;
`

export const NavLinks = styled(LinkScroll)`

color: #000000;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
    border-bottom: 5px solid #ffffff;
    transition: 0.2s ease-in-out;
    color: #ffffff;
}
    &:hover {
        color: #464646;
        /* border: 1px solid black; */
        transition: 0.2s ease-in-out;
    }

`

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtnLink = styled(LinkR)`
font-family: 'Lato', sans-serif;
border-radius: 50px;
background:  #3392FF;
white-space: nowrap;
padding: 10px 22px;
color: #ffffff;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s all ease-in-out;
    background: #00aaff;
    color: #2b2b2b;
    border-radius: 1px solid black;
    box-shadow: 0px 2px 2px #0000008b;
}

`
