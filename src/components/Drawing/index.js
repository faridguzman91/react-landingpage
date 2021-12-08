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
            <PolygonButton>1</PolygonButton>
            <PolygonButton>2</PolygonButton>

            <PolygonButton>3</PolygonButton>

            <PolygonButton>4</PolygonButton>
          </DrawingPolygonToolbar>
        </Toolbars>
      </DrawingImageContainer>

      <PublishButton>Publish</PublishButton>
      <PreviewButton>Preview</PreviewButton>
    </DrawingContainer>
  );
};

export default Drawing;
