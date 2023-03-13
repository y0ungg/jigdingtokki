import React from "react";
import { Palette, Canvas, CanvasButtonItems } from "@/views/components";

type PaintPageProps = {
  paletteId: string | null;
  selectedImage: string | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<null | string>>;
};

const PaintPage = (props: PaintPageProps) => {
  const { paletteId, selectedImage, setSelectedImage } = props;
  const [isEraserMode, setIsEraserMode] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState<string | null>(null);

  const handleBackToMenu = () => {
    setSelectedImage(null);
  };

  const shareATweet = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=[tip: 이미지를 저장해서 함께 올려보세요] 직딩 토끼의 하루가 궁금하다면👀&hashtags=직딩토끼의하루,jigdingtokki,피포페인팅,월루&via=jigdingtokki`,
      "Tweet",
      "popup, width=450, height=450"
    );
  };

  return (
    <div id="painting--container">
      <div className="painting--button">
        <img
          onClick={handleBackToMenu}
          id="back-btn"
          src="assets/back-btn.png"
        />
        <div>
          <img id="save-btn" src="assets/save-btn.png" />
          <img
            onClick={shareATweet}
            id="twitter-btn"
            src="assets/twitter-btn.png"
          />
        </div>
      </div>
      <Canvas
        selectedColor={selectedColor}
        isEraserMode={isEraserMode}
        selectedImage={selectedImage}
      />
      <CanvasButtonItems
        isEraserMode={isEraserMode}
        setIsEraserMode={setIsEraserMode}
      />
      <Palette
        setSelectedColor={setSelectedColor}
        paletteId={paletteId}
        setIsEraserMode={setIsEraserMode}
      />
    </div>
  );
};

export default PaintPage;
