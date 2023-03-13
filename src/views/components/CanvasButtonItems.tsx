import React from "react";

type CanvasButtonItemsProps = {
  setIsEraserMode: React.Dispatch<React.SetStateAction<boolean>>;
  isEraserMode: boolean;
};

export const CanvasButtonItems = (props: CanvasButtonItemsProps) => {
  const { setIsEraserMode, isEraserMode } = props;

  const handleEraserMode = () => {
    setIsEraserMode(!isEraserMode);
  };

  return (
    <div className="painting--button">
      <div>
        <img onClick={handleEraserMode} id="pen-btn" src="assets/pen-btn.png" />
        <img
          onClick={handleEraserMode}
          id="eraser-btn"
          src="assets/eraser-btn.png"
        />
      </div>
      <div>
        <img id="cancel-btn" src="assets/cancel-btn.png" />
        <img id="delete-btn" src="assets/delete-btn.png" />
      </div>
    </div>
  );
};
