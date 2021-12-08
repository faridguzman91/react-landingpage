import React from 'react'
import {PublishContainer, PublishImageContainer, PublishSVG, PublishIframe, PublishButtons} from './PublishElements'
import * as BsIcons from 'react-icons/bs'
import * as BiIcons from 'react-icons/bi'

const Publish = () => {
    return (
        <PublishContainer>
            <PublishImageContainer>

                <PublishButtons>
            <PublishSVG><BsIcons.BsVectorPen/>Publish as SVG</PublishSVG>
            <PublishIframe><BiIcons.BiCodeAlt/>Publish as Iframe</PublishIframe> 
            </PublishButtons>

            </PublishImageContainer>           
        </PublishContainer>
    )
}

export default Publish
