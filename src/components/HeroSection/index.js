import React, { useState } from 'react'
import Video from '../../video/reactapp.mp4'
import { Button } from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroSectionElements'
import '../LandingPage/landingpage.scss'
import 'animate.css'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg className='heroBackground'>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' className="animate__animated animate__fadeInUp" />
            </HeroBg>
            <HeroContent className = "animate__animated animate__fadeInUp">
                <HeroH1>Map Tool</HeroH1>
                <HeroP>Now draw interactive maps yourself</HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
