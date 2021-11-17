import React from "react";
import {
  StepsContainer,
  StepsWrapper,
  StepsCircles,
  StepsNumbers,
  StepsText,
  CircleContainer,
  TextContainer,
  Text,
} from "./StepsElements";

const StepsBar = ({stepComplete}) => {
  return (
    <StepsContainer>
      <StepsWrapper>
        <CircleContainer>
          <StepsCircles stepComplete={true}>
            <StepsNumbers stepComplete={true}>1</StepsNumbers>
          </StepsCircles>
      
        
          <StepsCircles>
            <StepsNumbers>2</StepsNumbers>
          </StepsCircles>
 
          <StepsCircles>
            <StepsNumbers>3</StepsNumbers>
          </StepsCircles>
   
          
          <StepsCircles>
            <StepsNumbers>4</StepsNumbers>
          </StepsCircles>

          <StepsCircles>
  <StepsNumbers>5</StepsNumbers>
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
