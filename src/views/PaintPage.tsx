import React from "react";
import { Palette, Canvas } from "@/views/components";
import { BackBtn, SaveBtn, TwitterBtn } from "public/icons";

type PaintPageProps = {
  paletteId: string | null;
  selectedImage: string | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<null | string>>;
};

const PaintPage = (props: PaintPageProps) => {
  const { paletteId, selectedImage, setSelectedImage } = props;
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [isEraserMode, setIsEraserMode] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState<string | null>(null);

  const handleBackToMenu = () => {
    setSelectedImage(null);
  };

  const saveCanvasImage = () => {
    const link = document.createElement("a");
    link.download = "jigdingtokki.png";
    if (canvasRef.current) {
      link.href = canvasRef.current?.toDataURL("image/png");
    }
    link.click();
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
        <BackBtn onClick={handleBackToMenu} id="back-btn" />
        <div>
          <SaveBtn onClick={saveCanvasImage} id="save-btn" />
          <TwitterBtn onClick={shareATweet} id="twitter-btn" />
        </div>
      </div>
      <Canvas
        ref={canvasRef}
        setIsEraserMode={setIsEraserMode}
        selectedColor={selectedColor}
        isEraserMode={isEraserMode}
        selectedImage={selectedImage}
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
