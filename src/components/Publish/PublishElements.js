import styled from "styled-components";

export const PublishContainer = styled.div 
`
height: 98vh;
width: 100vw;
background-color: #cacaca;
`

export const PublishImageContainer = styled.div`
top: 20px;
display: flex;
justify-content: center;
align-content: center;
width: 75vw;
height: 80vh;
border: 1px solid #b1b1b1;
position: relative;
left: 22vw;
background-image: url('https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
background-size: contain;
background-repeat: no-repeat;
background-position-x: center;
object-fit: contain;
`

export const PublishSVG = styled.button`
width: 180px;
height: 40px;
padding: 20px;
background-color: #007bff;
padding: 2px;
color: #fff;
border: none;
cursor: pointer;
margin-right: 50px;
display: flex;
justify-content: center;
align-items: center;
font-size: 18px;
border-radius: 5px;


&:hover {
    color: #000;
    background-color: #fff;
}


`
export const PublishButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-end;
`

export const PublishIframe = styled.button
`
width: 180px;
height: 40px;
padding: 10px;
background-color: #007bff;
padding: 2px;
color: #fff;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 18px;
border-radius: 5px;

&:hover {
    color: #000;
    background-color: #fff;
}

`