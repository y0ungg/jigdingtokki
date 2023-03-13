import React from "react";
import MenuPage from "@/views/MenuPage";
import PaintPage from "@/views/PaintPage";

const App = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [paletteId, setPaletteId] = React.useState<string | null>(null);

  return (
    <>
      {!selectedImage ? (
        <MenuPage
          setPaletteId={setPaletteId}
          setSelectedImage={setSelectedImage}
        />
      ) : (
        <PaintPage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          paletteId={paletteId}
        />
      )}
    </>
  );
};

export default App;
