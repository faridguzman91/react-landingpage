import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'
// import Img1 from '../images/img1.jpeg'

//$ variables dependant on Data.js property values

export const HeroContainer = styled.div`
background: #ffffff;
display: flex;
justify-content: center;
align-items: center;
padding: 30px;
height: 850px;
position: relative;
background-image: url('../images/background_img/img1.jpeg');
z-index: 1;

:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('../images/background_img/img1.jpeg');
    z-index: 1;
}
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
padding: 20px;
`

export const VideoBg = styled.video`
width: 60%;
height: 90%;
margin: auto;
right: 10vw;
top: 10px;
padding: 8px;
border-radius: 20px;
border: 1px solid #333333;
position: absolute;
-o-object-fit: cover;
object-fit: cover;
background: #525252;
box-shadow: 0px 2px 2px 2px #00000067;
margin-bottom: 10px;
`

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;

position: absolute;
padding: 70px;
display: flex;
flex-direction: column;
align-items: center;
top: 30%;
left: 5%;
/* background: inherit; */
border-radius: 20px;
overflow: hidden;
z-index: 1000;
/* box-shadow: 0px 2px 2px 2px #00000054; */
 border: 2px solid #595959;

&:after{
    content: '';
    z-index: 0;
 width: 100%;
 height: 100%;
 background: inherit; 
 position: absolute;
 left: 0px;
 /* left position */
 right: 0px;
 /* top: -25px;   */
 /* top position */
 bottom: 0;
 box-shadow: inset 0 0 0 200px #f7f7f7de;

 filter: blur(1px);

}

`

export const HeroH1 = styled.h1`
color: #3d3d3d;
font-size: 48px;
text-align: center;
z-index: 990;

@media screen and (max-width: 768px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
}

`

export const HeroP = styled.p`
z-index: 9999;
margin-top: 24px;
color: #313131;
font-size: 24px;
text-align: center;
max-width: 600px;
text-shadow: 0 0 0 2px;

@media screen and (max-width: 768px) {
    font-size: 24px;
}

@media screen and (max-width: 480px) {
    font-size: 18px;
}
`

export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Lato', sans-serif;
z-index: 999;

%:hover {
    transition: all 0.2s ease-in-out;
}
`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;

&:hover {
    transition: all 0.2s ease-in-out;
}
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;

&:hover {
    transition: all 0.2s ease-in-out;
}
`
