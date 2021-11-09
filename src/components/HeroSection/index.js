import React from 'react'
import Video from '../../video/reactapp.mp4'
import { HeroContainer, HeroBg, VideoBg } from './HeroSectionElements'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoplay loop muted src={Video} type='video/mp4' />
            </HeroBg>

        </HeroContainer>
    )
}

export default HeroSection
