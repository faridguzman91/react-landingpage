import React from "react";
import {
  DrawingContainer,
  DrawingTools,
  ImageContainer,
  Toolbars,
  DrawingPolygonToolbar,
  DrawingToolbar,
  DrawingGuidelineButton,
  DrawingGridButton,
  DrawingToggleImageButton,
  DrawingFillScreenButton,
  DrawingColorSwatchButton,
  PolygonButton,
  PublishButton,
  PreviewButton,
  DrawingImageContainer,
} from "./DrawingElements";
import * as RiIcons from 'react-icons/ri'
import * as MdIcons from 'react-icons/md'
import * as BiIcons from 'react-icons/bi'
import * as AiIcons from 'react-icons/ai'


const Drawing = () => {
  return (
    <DrawingContainer>
      <DrawingImageContainer>
        <Toolbars>
          <DrawingToolbar>

            <DrawingGuidelineButton title="Toggle GuideLines">
                <RiIcons.RiPencilRuler2Fill/>
                </DrawingGuidelineButton>

            <DrawingGridButton title = "Toggle Grids"
>
                <MdIcons.MdGrid3X3/>
                </DrawingGridButton>

            <DrawingToggleImageButton title = "Toggle Image"
>
                <BiIcons.BiImageAlt/>
                </DrawingToggleImageButton>

            <DrawingFillScreenButton title = "Toggle Fill Screen">
                <AiIcons.AiOutlineFullscreen/>
                </DrawingFillScreenButton>

            <DrawingColorSwatchButton title = "Toggle Color Swatches">
                <MdIcons.MdPalette/>
                </DrawingColorSwatchButton>

          </DrawingToolbar>

          <ImageContainer>Uploaded Image</ImageContainer>

          <DrawingPolygonToolbar>
            <PolygonButton title="house #01">1</PolygonButton>
            <PolygonButton title="house #02">2</PolygonButton>

            <PolygonButton title="house #03">3</PolygonButton>

            <PolygonButton title="house #04">4</PolygonButton>
          </DrawingPolygonToolbar>
        </Toolbars>
      </DrawingImageContainer>

      <PublishButton>Publish</PublishButton>
      <PreviewButton>Preview</PreviewButton>
    </DrawingContainer>
  );
};

export default Drawing;
