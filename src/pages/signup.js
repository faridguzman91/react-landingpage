import React from 'react'
import SignUp from '../components/SignUp'
import NavBar from '../components/NavBar'
import StepsBar from '../components/Steps'
import StepWizard from 'react-step-wizard'

const SignUpPage = () => {
    return (
        <>
            <div>
                <NavBar />
                <StepsBar/>
                <SignUp />
                {/* <StepWizard>
                    <Step1 />
                    <Step2 />
                    <Step3 />
                    <Step4 />

                </StepWizard> */}
            </div>
        </>
    )
}

export default SignUpPage
