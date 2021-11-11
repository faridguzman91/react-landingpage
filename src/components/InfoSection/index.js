import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements'
import { Button } from '../ButtonElement'
//n


const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, lightTextDescription, darkText, headLine, description, buttonLabel, img, alt }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    {/* Create SVGs for your configurators easily */}
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>
                                    {/* With the Map Tool */}
                                    {headLine}
                                </Heading>
                                <Subtitle darkText={darkText} lightTextDescription={lightTextDescription}>
                                    {/* Quickly and easily draw available lot using the drawing tool */}
                                    {description}
                                </Subtitle>
                                <BtnWrap>
                                    <Button to='signup'>
                                        {/* Try it for free */}
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
