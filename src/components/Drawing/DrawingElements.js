import styled from 'styled-components'

export const DrawingContainer = styled.div `
background:#dcdcdc;
width: 100vw;
height: 98vh;

`

export const DrawingTools = styled.div `

`

export const DrawingToolbar = styled.div `
position: relative;
background-color: #fff;
top: 10%;
left: 1vw;
width: 70px;
height: 300px;
border: 1px solid #0000005e;
border-radius: 20px;
box-shadow: 0px 2px 2px #0000005e;
display: flex;
flex-direction: column;
padding: 20px;
justify-content:space-between;
align-items: center;
z-index: 999;


`

export const Toolbars = styled.div `
width: 100%;
display: flex;
z-index: ;
`

export const ImageContainer = styled.div 
`
position: absolute;
// top: 50%;
// left: 50%;
width: 100%;
height: 100%;
background-image: url('https://images.unsplash.com/photo-1616344787023-a1829b69beea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
opacity: .7;
`

export const DrawingGuidelineButton = styled.button
`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
border-radius: 50px;
font-size: 20px;
`

export const DrawingGridButton = styled.button
`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
border-radius: 50px;
font-size: 20px;

`

export const DrawingToggleImageButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
border-radius: 50px;
font-size: 22px;


`

export const DrawingFillScreenButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
border-radius: 50px;
font-size: 22px;

`

export const DrawingColorSwatchButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
border-radius: 50px;
font-size: 22px;

`

export const DrawingPolygonToolbar = styled.div `
position: relative;
left: 85%;
top: 10%;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 70px;
height: 400px;
border: 1px solid #0000005e;
border-radius: 20px;
box-shadow: 0px 2px 2px #0000005e;
background-color: #fff;
`

export const PolygonButton = styled.button `
width: 40px;
height: 40px;
border-radius: 50px;

`

export const PublishButton = styled.button `
width: 100px;
height: 40px;
bottom: 10px;
left: 90%;
position: relative;
cursor: pointer;
background-color: #007bff;
color: white;
border: none;

&:hover {
    background-color: #fff;
    color: black;
    transition: 0.2s ease-in-out;
    box-shadow: 0px 2px 2px #0000005e;
}
`

export const PreviewButton = styled.button `
width: 100px;
height: 40px;
bottom: 10px;
left: 75%;
position: relative;
cursor: pointer;
background-color: #007bff;
color: white;
border: none;

&:hover {
    background-color: #fff;
    color: black;
    transition: 0.2s ease-in-out;
    box-shadow: 0px 2px 2px #0000005e;
}

`

export const DrawingImageContainer = styled.div `
display: flex;
position: relative;
background: #fff;
top: 50px;
left: 20vw;
width: 78vw;
height: 45vw;
border: 0.5px solid #00000057;


`
