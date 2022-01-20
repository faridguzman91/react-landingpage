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
import { FaTachometerAlt, FaGem, FaListOl, FaRegQuestionCircle, FaCog } from 'react-icons/fa';
import {UserIcon, projectsIcon, unitsIcon, drawIcon, publishIcon, dashboardIcon, settingsIcon} from './StepsElements'
import {RiDashboardFill} from 'react-icons/ri'
import { Logo } from './StepsElements';
import './sidebar.styles.scss'
// import { sidebarHeaderObjOne, sidebarHeaderObjTwo } from './SidebarData';
import logo from './logo/logo_rechthoekPNG.png'
import logo2 from './logo/logo_vierkant_blauw_wit.png'
import '../assets/wwzr/style.css'



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
             
                {/* <Menu iconShape="circle">
                    <SubMenu
                        suffix={<span className="badge yellow">4</span>}
                        title="Open Menu"
                        icon={<FaListOl />}
                    >
                        <MenuItem>Account</MenuItem>
                        <MenuItem>Projects</MenuItem>
                        <MenuItem>Units</MenuItem>
                        <MenuItem>Draw</MenuItem>
                        <MenuItem>Publish</MenuItem>
                    </SubMenu>

                </Menu> */}

                <Menu>

                  <MenuItem icon={<div className="wwrz-icn-user"  style={{fontSize: 20}}></div>}>Account</MenuItem>
  <MenuItem icon={<div className='wwrz-icn-projects'  style={{fontSize: 20}}></div>}>Projects</MenuItem>
  <MenuItem icon={<div className='wwrz-icn-units' style={{fontSize: 20}}></div>}>Units</MenuItem>
  <MenuItem icon={<div className='wwrz-icn-draw'  style={{fontSize: 20}}></div>}>Draw</MenuItem>
  <MenuItem icon={<div className="wwrz-icn-publish"  style={{fontSize: 20}}></div>}>Publish</MenuItem>
  </Menu>
 
            </SidebarContent>

            <Menu iconShape="circle">
  <MenuItem icon={<RiDashboardFill/>}>Dashboard</MenuItem>
  <MenuItem icon={<FaCog />}>Settings</MenuItem>
</Menu>


            <SidebarFooter style={{ textAlign: 'left' }}>
                <div className='sidebarFooter'>
                <FaRegQuestionCircle className="sbFooterIcon"/>Need some help?
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default Aside;
