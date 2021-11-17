import React from 'react'
import SignUp from '../components/SignUp'
import NavBar from '../components/NavBar'
import StepsBar from '../components/Steps'
// import StepWizard from 'react-step-wizard'

const SignUpPage = () => {
    return (
        <>
            <div>
                <NavBar />
                <StepsBar/>
                <SignUp />
            </div>
        </>
    )
}

export default SignUpPage
