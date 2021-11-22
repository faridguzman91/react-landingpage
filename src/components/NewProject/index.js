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
import { AiOutlineUpload } from 'react-icons/ai'

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
              <UploadFormButton alt="Upload Image" title='Max upload size: 5mb. Max resolution: 1920x1080'>< AiOutlineUpload /></UploadFormButton>
              <FormButton>Continue</FormButton>
            </Form>
          </FormContent>
        </Icon>
      </FormWrap>
    </Container>
  );
};

export default NewProjectPage;
