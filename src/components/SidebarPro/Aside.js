/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useIntl } from 'react-intl';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaListOl } from 'react-icons/fa';
import { Logo } from './StepsElements';
import './sidebar.styles.scss'
// import { sidebarHeaderObjOne, sidebarHeaderObjTwo } from './SidebarData';
import logo from './logo/logo_rechthoekPNG.png'
import logo2 from './logo/logo_vierkant_blauw_wit.png'



// import sidebarBg from './assets/bg2.jpg';

const Aside = ({ collapsed, toggled, handleToggleSidebar, img,  }) => {


    return (
        <ProSidebar 
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
            // {...sidebarHeaderObjOne}
            // {...sidebarHeaderObjTwo}
        >
            <SidebarHeader> 
                <div className="logobox">
                    <img src={logo2} className='kreateSquare' alt="logo"/>
              <img src={logo} className="kreateRect" alt="logo" />
              </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<FaTachometerAlt />}

                    >
                        Dashboard
                    </MenuItem>
                    <MenuItem icon={<FaGem />}> My Account</MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <SubMenu
                        suffix={<span className="badge yellow">5</span>}
                        title="Steps"
                        icon={<FaListOl />}
                    >
                        <MenuItem>Create Account</MenuItem>
                        <MenuItem>Create new project</MenuItem>
                        <MenuItem>Edit Houses Data</MenuItem>
                        <MenuItem>Draw</MenuItem>
                        <MenuItem>Publish</MenuItem>
                    </SubMenu>

                </Menu>
            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center' }}>
                Kreate Space
            </SidebarFooter>
        </ProSidebar>
    );
};

export default Aside;
