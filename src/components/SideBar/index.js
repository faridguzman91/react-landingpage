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
                    <SidebarLink to="about">About</SidebarLink>
                    <SidebarLink to="cases">Cases</SidebarLink>
                    <SidebarLink to="contact">Contact</SidebarLink>
                    <SidebarLink to="language">Language</SidebarLink>
                    <SidebarLink to="signup">Account</SidebarLink>
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
