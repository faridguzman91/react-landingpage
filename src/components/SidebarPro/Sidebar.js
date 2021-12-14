import React from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
import {
    StepsContainer,
    StepsWrapper,
    StepsCircles,
    StepsNumbers,
    StepsTriangle,
    StepsToggle,
    CircleContainer,
    TextContainer,
    Text,
} from "./StepsElements";
import "react-pro-sidebar/dist/css/styles.css";
import * as FaIcons from "react-icons/fa";
import './sidebar.styles.scss'

const Sidebar = () => {
    return (
        <div>
            <ProSidebar>

                <SidebarHeader>
                    <h1>Logo</h1>
                </SidebarHeader>
                <Menu iconShape="square">
                    <MenuItem icon={<FaIcons.FaGem />}>Dashboard</MenuItem>
                    <SubMenu title="Components" icon={<FaIcons.FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
                <SidebarContent>
                    <>



                        <StepsWrapper>
                            <CircleContainer>
                                <StepsCircles stepComplete={true}>
                                    <StepsNumbers stepComplete={true}>1</StepsNumbers>
                                </StepsCircles>
                                <StepsCircles stepComplete={false}>
                                    <StepsNumbers stepComplete={false}>2</StepsNumbers>
                                </StepsCircles>
                                <StepsCircles stepComplete={false}>
                                    <StepsNumbers stepComplete={false}>3</StepsNumbers>
                                </StepsCircles>
                                <StepsCircles stepComplete={false}>
                                    <StepsNumbers stepComplete={false}>4</StepsNumbers>
                                </StepsCircles>
                                <StepsCircles stepComplete={false}>
                                    <StepsNumbers stepComplete={false}>5</StepsNumbers>
                                </StepsCircles>



                            </CircleContainer>
                            <TextContainer>
                                <Text>Create new Account</Text>
                                <Text>Create a new project</Text>
                                <Text>Edit houses data</Text>
                                <Text>Draw and Trace</Text>
                                <Text>Publish trace</Text>
                            </TextContainer>


                            {/* <StepsText>Draw lots</StepsText> */}
                        </StepsWrapper>

                    </>
                </SidebarContent>
                <SidebarFooter>
                    <p>Kreate Space</p>
                </SidebarFooter>

            </ProSidebar>

        </div>
    );
};

export default Sidebar;
