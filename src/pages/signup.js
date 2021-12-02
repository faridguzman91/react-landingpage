import React from 'react'
import SignUp from '../components/SignUp'
import NavBar from '../components/NavBar'
import StepsBar from '../components/Steps'
import NewProject from "../pages/newproject";
import EditHouse from "../components/EditHouse";
import NewProjectPage from '../components/NewProject';

// import StepWizard from 'react-step-wizard'

const SignUpPage = () => {
    return (
        <>
            <div>
                <NavBar />
                <StepsBar/>
                <SignUp />
                <NewProjectPage />
                <EditHouse />

            </div>
        </>
    )
}

export default SignUpPage
