import React, {useState} from "react";
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
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai"
import VisibilityToggle from "./VisibilityToggle";



const StepsBar = ({stepComplete}) => {
  
  const [sideBar , setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);

 

  return (
    <>    
    <StepsContainer>
    
      <StepsToggle>
        {/* {toggleBar ? <StepsContainer /> : toggleBar} */}

        <AiFillCaretLeft title="Hide"/>
      </StepsToggle>

    <StepsTriangle/>
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
    </StepsContainer>
    </>
  );
};

export default StepsBar;
