import styled from 'styled-components'

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
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
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
background-color: #fff;
display: flex;
flex-direction: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 1 1px 1px 1px #0000003a;
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
`

export const ServicesH1 = styled.div`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 2rem;

}
`

export const ServicesH2 = styled.div`
font-size: 1rem;
margin-bottom:10px;

@media screen and (max-width: 480px) {
    font-size: 2rem;

}
`

export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`
