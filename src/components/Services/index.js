import { useState, useRef, useEffect } from 'react'
import Icon1 from '../images/react.svg'
import Icon2 from '../images/upload_image.svg'
import Icon3 from '../images/web_devices.svg'
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon, ServicesP } from './ServicesElements'
import { gsap } from 'gsap'

const Services = () => {

    //gsap animation function https://greensock.com/react/

    const boxRef = useRef();

    useEffect(() => {
        gsap.to(boxRef.current, { rotation: 720, x: 0 })
    });


    return (
        <>
            <ServicesContainer>
                <ServicesH1>Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard ref={boxRef}>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Improve workflow</ServicesH2>
                        <ServicesP> A translation of our software towards a more robust and generic software could increase our production capacity. </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP> Make it possible to setup production in other locations or give clients the possibility to do parts of the work thus speeding up the process and lowering the costs.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Virtual Tool</ServicesH2>
                        <ServicesP> Unlock our faster way of displaying available lot on your pages and projects.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
