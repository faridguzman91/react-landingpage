
import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { NavBarContainer, Nav, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements'
import { animateScroll as scroll } from 'react-scroll'
// import styled from 'styled-components'
// import { Nav } from './NavBarElements'
// import { NavLogo } from './NavBarElements'

import Logo from '../../components/assets/kreatespace/logo_rechthoekPNG.png'


const NavBar = ({ toggle }) => {
    //react scroll
    //if browser window hits 80px Y axis, set true else false

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    //cleanup effect, no dependancy

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
                    <NavLogo to='/' onclick={toggleHome}>Map Tool by
                 
                        <img src={Logo} style={{ height: 20, width: 150, marginLeft : 10 }}
                        
                        />
                 
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                      
                 
                        <NavItem>
                            <NavLinks to="publish" smooth={true} duration={800} spy={true} exact={true} offset={-80}>Steps</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="language" smooth={true} duration={800} spy={true} exact={true} offset={-80}>Language</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup" smooth={true} duration={800} spy={true} exact={true} offset={-80}>Sign Up</NavLinks>
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
