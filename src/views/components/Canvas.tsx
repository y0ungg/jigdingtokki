import React from "react";

type CanvasProps = {
  isEraserMode: boolean;
  selectedImage: string;
};

export const Canvas = (props: CanvasProps) => {
  const { isEraserMode, selectedImage } = props;
  const canvasRef = React.useRef(null);

  return (
    <div id="canvas--container">
      <canvas
        ref={canvasRef}
        id="canvas"
        className={isEraserMode ? "eraser" : "pen"}
        width="450"
        height="450"
      />
      <img id="canvas--image" src={selectedImage} />
    </div>
  );
};
