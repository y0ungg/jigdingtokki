import React from "react";
import {
  Ask,
  CloseBtn,
  Locked,
  SoundOff,
  SoundOn,
  StageA,
  StageB,
  StageC,
} from "public/icons";
import { StageAA, StageBA, StageBB } from "public/border-menu";

type MenuPageProps = {
  setSelectedImage: React.Dispatch<React.SetStateAction<null | string>>;
  setPaletteId: React.Dispatch<React.SetStateAction<null | string>>;
  setIsSoundOn: React.Dispatch<React.SetStateAction<boolean>>;
  isSoundOn: boolean;
};

const MenuPage = (props: MenuPageProps) => {
  const { setSelectedImage, setPaletteId, setIsSoundOn, isSoundOn } = props;

  const handleSelectImage = (e: React.MouseEvent<SVGElement>) => {
    const id = e.currentTarget.id;
    setPaletteId(id);
    setSelectedImage(`/images/${id}.png`);
  };

  const handleCloseMenu = () => {
    window.close();
  };

  const handleSoundSwitch = () => {
    setIsSoundOn(!isSoundOn);
  };

  return (
    <div id="menu--container">
      <div>
        <span>Color By Number</span>
        <CloseBtn onClick={handleCloseMenu} id="close-btn" />
      </div>
      <div id="menu">
        <div>
          {isSoundOn ? (
            <SoundOn onClick={handleSoundSwitch} />
          ) : (
            <SoundOff onClick={handleSoundSwitch} />
          )}
          <Ask />
        </div>
        <div id="subject">직딩 토끼의 하루</div>
        <StageA className="stage" />
        <div className="border">
          <StageAA onClick={handleSelectImage} id="stage1-a" />
          <Locked id="stage1-b" />
          <Locked id="stage1-c" />
        </div>
        <StageB className="stage" />
        <div className="border">
          <StageBA onClick={handleSelectImage} id="stage2-a" />
          <StageBB onClick={handleSelectImage} id="stage2-b" />
          <Locked id="stage2-c" />
        </div>
        <StageC className="stage" />
        <div className="border">
          <Locked id="stage3-a" />
          <Locked id="stage3-b" />
          <Locked id="stage3-c" />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
