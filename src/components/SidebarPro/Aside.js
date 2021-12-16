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

// import sidebarBg from './assets/bg2.jpg';

const Aside = ({ collapsed, toggled, handleToggleSidebar }) => {
    const intl = useIntl();

    return (
        <ProSidebar

            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}

        >
            <SidebarHeader>
                <div
                    style={{
                        padding: '24px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 14,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    Map Tool
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
