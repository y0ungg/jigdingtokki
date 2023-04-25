import React from "react";
import MenuPage from "@/views/MenuPage";
import PaintPage from "@/views/PaintPage";

const App = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [paletteId, setPaletteId] = React.useState<string | null>(null);
  const [isSoundOn, setIsSoundOn] = React.useState(true);

  return (
    <>
      {!selectedImage ? (
        <MenuPage
          setPaletteId={setPaletteId}
          setSelectedImage={setSelectedImage}
          setIsSoundOn={setIsSoundOn}
          isSoundOn={isSoundOn}
        />
      ) : (
        <PaintPage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          paletteId={paletteId}
          isSoundOn={isSoundOn}
        />
      )}
    </>
  );
};

export default App;
