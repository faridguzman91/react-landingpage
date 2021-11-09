import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="cases" onClick={toggle}>Cases</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
                    <SidebarLink to="language" onClick={toggle}>Language</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Account</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to='/signin'>
                        Sign Up
                    </SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar
