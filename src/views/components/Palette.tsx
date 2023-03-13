import React from "react";
import { PALETTE_COLORS } from "@/constants";

type PaletteProps = {
  paletteId: string | null;
  setIsEraserMode: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
};

export const Palette = (props: PaletteProps) => {
  const { paletteId, setIsEraserMode, setSelectedColor } = props;

  const handleSelectColor = (idx: number) => {
    setIsEraserMode(false);
    setSelectedColor(PALETTE_COLORS[paletteId][idx]);
  };

  return (
    <div id="palette">
      {paletteId &&
        PALETTE_COLORS[paletteId].map((color, idx) => {
          const code = `${color} url("assets/color-btn.png")`;
          return (
            <div
              style={{ background: code }}
              className="color"
              onClick={() => handleSelectColor(idx)}
            >
              <div className="number">
                {idx < 10 ? `  ${idx + 1}` : idx + 1}
              </div>
            </div>
          );
        })}
    </div>
  );
};
