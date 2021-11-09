import React from 'react'
import { FaBars } from 'react-icons/fa'
import { NavBarContainer, Nav, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavBarElements'
// import styled from 'styled-components'
// import { Nav } from './NavBarElements'
// import { NavLogo } from './NavBarElements'


const NavBar = () => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to='/'>MapTool</NavLogo>
                    <MobileIcon>
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
                            <NavLinks to="account">My Account</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar
