import styled from 'styled-components'
import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'



export const ServicesContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;
;

@media screen and (max-width: 768px) {
    height: 1100px;
}

@media screen and (max-width: 768px) {
    height: 1300px;
}

`

export const ServicesWrapper = styled.div`
max-width: 90%;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 36px;
padding: 0 50px;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}

`

export const ServicesCard = styled.div`
/* position: relative; */
/* z-index: 999; */
background-color: #ffffff;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 10px;
height: 420px;
padding: 40px;
box-shadow: 0 2px 2px 2px #28282846;
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`

export const ServicesIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
color: #000000;
`

export const ServicesH1 = styled.div`
font-size: 2.5rem;
font-family: 'Silka', sans-serif;
color: #515151;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 2rem;

}
`

export const ServicesH2 = styled.div`
font-size: 1.3rem;
color: #000000;
font-family: 'Silka', sans-serif;
margin-bottom:10px;

@media screen and (max-width: 480px) {
    font-size: 2rem;

}
`

export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
color: #000000;
`
