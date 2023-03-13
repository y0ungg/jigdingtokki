import React from "react";
import { PALETTE_COLORS } from "../../constants";

type PaletteProps = {
  paletteId: string | null;
  setIsEraserMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Palette = (props: PaletteProps) => {
  const { paletteId, setIsEraserMode } = props;
  const [selectedColor, setSelectedColor] = React.useState<string | null>(null);

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
