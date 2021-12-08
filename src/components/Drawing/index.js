import React from 'react'
import { DrawingContainer, DrawingTools, ImageContainer, Toolbars, DrawingPolygonToolbar, DrawingToolbar, DrawingGuidelineButton, DrawingGridButton, DrawingToggleImageButton,
    DrawingFillScreenButton, DrawingColorSwatchButton, DrawingImageContainer } from './DrawingElements'

const Drawing = () => {
    return (
        <DrawingContainer>
        
           
            <DrawingImageContainer>

               <Toolbars>             
            <DrawingToolbar>
                <DrawingGuidelineButton></DrawingGuidelineButton>
                <DrawingGridButton></DrawingGridButton>
                <DrawingToggleImageButton></DrawingToggleImageButton>
                <DrawingFillScreenButton></DrawingFillScreenButton>
                <DrawingColorSwatchButton></DrawingColorSwatchButton>
                </DrawingToolbar>

                <ImageContainer>Image</ImageContainer>
                

                <DrawingPolygonToolbar>
                    
                    </DrawingPolygonToolbar>   
                    </Toolbars>                  
                     </DrawingImageContainer>
        </DrawingContainer>
    )
}

export default Drawing
