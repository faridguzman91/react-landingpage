import React from "react";
import {
  Container,
  FormWrap,
  // FormLabel,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormNewProject,
  FormName,
  FormInput1,
  FormInput2,
  FormInput3,
  FormLabel1,
  FormLabel2,
  FormLabel3,
  FormButton,
  UploadFormButton,
  ProjectsWrapper,
  ProjectsCardsContainer,
  ProjectCard,
  ProjectsWrapperTitle,
} from "./NewProjectElements";
import { AiOutlineUpload } from "react-icons/ai";

const NewProjectPage = () => {
  return (
    <Container>
      <FormWrap>
        {/* <Icon to="/">Back</Icon> */}
        <FormContent>
          <FormName>Create New Project</FormName>

          <Form>
            <FormLabel1 htmlFor="for">
              Project Name
              <FormInput1 type="name" required />
            </FormLabel1>

            <FormLabel2 htmlFor="for">
              Number of Houses
              <FormInput2 type="email" required />
            </FormLabel2>

            <FormLabel3 htmlFor="for">
              <UploadFormButton
                alt="Upload Image"
                title="Max upload size: 5mb. Max resolution: 1920x1080"
              >
                <AiOutlineUpload />
              </UploadFormButton>
              Upload Image
            </FormLabel3>

            <FormButton>Add project</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
      <ProjectsWrapper>
        <ProjectsWrapperTitle>Project list</ProjectsWrapperTitle>

        <ProjectsCardsContainer>
          <ProjectCard />

          <ProjectCard />

          <ProjectCard />
        </ProjectsCardsContainer>
      </ProjectsWrapper>
    </Container>
  );
};

export default NewProjectPage;
