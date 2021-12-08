import React from 'react'
import SignUp from '../components/SignUp'
import NavBar from '../components/Navbar2/Navbar.js'
import StepsBar from '../components/Steps'
import NewProject from "../pages/newproject";
import EditHouse from "../components/EditHouse";
import NewProjectPage from '../components/NewProject';
import MapTool from '../components/Drawing'
import Sidebar from 'react-sidebar';

// import StepWizard from 'react-step-wizard'



const SignUpPage = () => {

  

    return (
        <>
            <div>
                {/* <Sidebar sidebar = {<b>Sidebar Content</b>}
                         open={this.state.sidebarOpen}
                         onSetOpen={this.onSetSideBarOpen}
                         styles={{ sidebar: { background: "white" } }}
                         >
                </Sidebar> */}
                <NavBar />
                <StepsBar/>
                <SignUp />
                <NewProjectPage />
                <EditHouse />
                <MapTool/>

            </div>
        </>
    )
}

export default SignUpPage
