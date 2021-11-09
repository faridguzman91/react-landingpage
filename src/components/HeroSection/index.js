import React, { useState } from 'react'
import Video from '../../video/reactapp.mp4'
import { Button } from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroSectionElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoplay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Map Tool</HeroH1>
                <HeroP>Try our free account</HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
