import React from "react";
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
  UploadFormButton
} from "./NewProjectElements";

const NewProjectPage = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">
          <FormContent>
            <Form>
              <FormH1>Create a new project</FormH1>
              <FormLabel htmlFor="for">Project Name</FormLabel>
              <FormInput type="name" required />
              <FormLabel htmlFor="for">Number of Houses</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Upload Image</FormLabel>
              <UploadFormButton>max size: 5mb minimal resolution 1920 x 1080</UploadFormButton>
              <FormButton>Continue</FormButton>
            </Form>
          </FormContent>
        </Icon>
      </FormWrap>
    </Container>
  );
};

export default NewProjectPage;
