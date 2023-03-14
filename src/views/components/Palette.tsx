import React from "react";
import { PALETTE_COLORS } from "@/constants";

type PaletteProps = {
  paletteId: string | null;
  setIsEraserMode: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedColor: React.Dispatch<React.SetStateAction<string | null>>;
};

export const Palette = (props: PaletteProps) => {
  const { paletteId, setIsEraserMode, setSelectedColor } = props;

  const handleSelectColor = (idx: number) => {
    setIsEraserMode(false);
    if (paletteId) setSelectedColor(PALETTE_COLORS[paletteId][idx]);
  };

  return (
    <div id="palette">
      {paletteId &&
        PALETTE_COLORS[paletteId].map((color, idx) => {
          const code = `${color} url("icons/color-btn.png")`;
          return (
            <div
              style={{ background: code }}
              className="color"
              onClick={() => handleSelectColor(idx)}
              key={color}
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
