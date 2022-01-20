import React, { useState } from "react";
// import StepsBar from "../Steps";
import {
  Container,
  FormWrap,
  FormLabel,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormInput,
  FormButton,
} from "./SignUpElements";
import Checkbox from "./Checkbox";

const SignUp = () => {

  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  return (
    <Container>
      {/* <StepsBar /> */}
      <FormWrap>
        <Icon to="/">  </Icon>
          <FormContent>
            <Form>
              <FormH1>Create new account</FormH1>
              <FormLabel htmlFor="for" >Name <FormInput type="name" placeholder="Enter name" required />
</FormLabel>
              
                <FormLabel htmlFor="for">Company
                <FormInput type="Company" placeholder="Enter company name" required />

                </FormLabel>
              
              <FormLabel htmlFor="for">Email
              <FormInput type="email" placeholder="Enter your email" required />

              </FormLabel>
              
              {/* <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" placeholder = "Enter password"required /> */}

              {/* <label>
                                <Checkbox checked={this.state.checked} onChange={this.handleCheckboxChange}/>
                            </label> */}
              <Checkbox
                label="I have read and agreed to the Map Tool Privacy Policy and Terms of Service"
                value={checkedOne}
                onChange={handleChangeOne}
              />
         

              <p>Already Have an account? <a href="login">Login</a></p>
              <br/>

              <FormButton>Sign Up</FormButton>
            </Form>
          </FormContent>

      </FormWrap>
    </Container>
  );
};

export default SignUp;
