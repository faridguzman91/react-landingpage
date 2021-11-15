import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { NavBarContainer, Nav, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements'
import { animateScroll as scroll } from 'react-scroll'
// import styled from 'styled-components'
// import { Nav } from './NavBarElements'
// import { NavLogo } from './NavBarElements'


const NavBar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavBarContainer>
                    <NavLogo to='/' onclick={toggleHome}>MapTool</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact={true} offset={-80}>Welcome</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="usage" smooth={true} duration={500} spy={true} exact={true} offset={-80}>Create</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="publish" smooth={true} duration={500} spy={true} exact={true} offset={-80}>Publish</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="language" smooth={true} duration={500} spy={true} exact={true} offset={-80}>Language</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup" smooth={true} duration={500} spy={true} exact={true} offset={-80}>Sign Up</NavLinks>
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
