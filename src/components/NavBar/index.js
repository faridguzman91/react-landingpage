import React from 'react'
import { FaBars } from 'react-icons/fa'
import { NavBarContainer, Nav, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements'
// import styled from 'styled-components'
// import { Nav } from './NavBarElements'
// import { NavLogo } from './NavBarElements'


const NavBar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to='/'>MapTool</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">Welcome</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="cases">Cases</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="language">Language</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to="/signin">My Account</NavBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar
