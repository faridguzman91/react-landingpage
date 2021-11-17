import React from "react";
import {
  StepsContainer,
  StepsWrapper,
  StepsCircles,
  StepsNumbers,
  StepsTriangle,
  CircleContainer,
  TextContainer,
  Text,
} from "./StepsElements";

const StepsBar = ({stepComplete}) => {
  return (
    <StepsContainer>
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
  );
};

export default StepsBar;
