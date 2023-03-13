import React from "react";

type MenuPageProps = {
  setSelectedImage: React.Dispatch<React.SetStateAction<null | string>>;
  setPaletteId: React.Dispatch<React.SetStateAction<null | string>>;
};

const MenuPage = (props: MenuPageProps) => {
  const { setSelectedImage, setPaletteId } = props;

  const handleSelectImage = (e: React.MouseEvent<HTMLImageElement>) => {
    const id = e.currentTarget.id;
    setPaletteId(id);
    setSelectedImage(`/images/${id}.png`);
  };

  const handleCloseMenu = () => {
    window.close();
  };

  return (
    <div id="menu--container">
      <div>
        <span>Color By Number</span>
        <img
          onClick={handleCloseMenu}
          id="close-btn"
          src="assets/close-btn.png"
        />
      </div>
      <div id="menu">
        <div>직딩 토끼의 하루</div>
        <img className="stage" src="assets/stage1.png" />
        <div className="border">
          <img
            onClick={handleSelectImage}
            id="stage1-a"
            src="border-menu/b-stage1-a.png"
          />
          <img
            onClick={handleSelectImage}
            id="stage1-b"
            src="assets/border.png"
          />
          <img
            onClick={handleSelectImage}
            id="stage1-c"
            src="assets/border.png"
          />
        </div>
        <img className="stage" src="assets/stage2.png" />
        <div className="border">
          <img
            onClick={handleSelectImage}
            id="stage2-a"
            src="border-menu/b-stage2-a.png"
          />
          <img
            onClick={handleSelectImage}
            id="stage2-b"
            src="border-menu/b-stage2-b.png"
          />
          <img
            onClick={handleSelectImage}
            id="stage2-c"
            src="assets/border.png"
          />
        </div>
        <img className="stage" src="assets/stage3.png" />
        <div className="border">
          <img
            onClick={handleSelectImage}
            id="stage3-a"
            src="assets/border.png"
          />
          <img
            onClick={handleSelectImage}
            id="stage3-b"
            src="assets/border.png"
          />
          <img
            onClick={handleSelectImage}
            id="stage3-c"
            src="assets/border.png"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
