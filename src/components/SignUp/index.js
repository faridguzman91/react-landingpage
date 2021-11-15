import React from 'react'
import { Container, FormWrap, FormLabel, Icon, FormContent, Form, FormH1, FormInput } from './SignUpElements'
import { Button } from '../ButtonElement'

const SignUp = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to='/'>
                    <FormContent>
                        <Form>
                            <FormH1>Create new account</FormH1>
                            <FormLabel htmlFor='for'>Name</FormLabel>
                            <FormInput type="name" required />
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type="password" required />
                        </Form>
                        <Button>Continue</Button>
                    </FormContent>

                </Icon>
            </FormWrap>


        </Container>
    )
}

export default SignUp
