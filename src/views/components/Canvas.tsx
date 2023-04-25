import React from "react";
import { filter, takeLast } from "@/utils";
import { useForwardRef } from "@/hooks/useForwardRef";
import { CancelBtn, DeleteBtn, EraserBtn, PenBtn } from "public/icons";
import soundSrc from 'public/sound.webm'

type CanvasProps = {
  setIsEraserMode: React.Dispatch<React.SetStateAction<boolean>>;
  isEraserMode: boolean;
  selectedImage: string | null;
  selectedColor: string | null;
  isSoundOn: boolean;
};

type Coord = {
  x: number;
  y: number;
};

type DrawHistory = Coord & {
  type: "draw" | "remove";
  color: string | null;
};

const drawHistory: Array<DrawHistory> = [];

export const Canvas = React.forwardRef(
  (props: CanvasProps, ref: React.ForwardedRef<HTMLCanvasElement>) => {
    const {
      setIsEraserMode,
      isEraserMode,
      selectedImage,
      selectedColor,
      isSoundOn,
    } = props;
    const canvasRef = useForwardRef<HTMLCanvasElement>(ref);
    const soundRef = React.useRef<HTMLAudioElement>(null)

    const [matrix, setMatrix] = React.useState(
      Array(30)
        .fill(null)
        .map(() => Array(30).fill(null))
    );

    const doPaint = (event: React.MouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      const sound = soundRef.current

      const x = Math.floor(event.nativeEvent.offsetX / 15) * 15;
      const y = Math.floor(event.nativeEvent.offsetY / 15) * 15;
      const parsedX = Number(x / 15);
      const parsedY = Number(y / 15);

      if (context && isEraserMode) {
        context.clearRect(x, y, 15, 15);

        const newMatrix = [...matrix];
        newMatrix[parsedX][parsedY] = null;
        setMatrix(newMatrix);

        drawHistory.push({ x, y, type: "remove", color: null });
      } else if (context && selectedColor) {
        isSoundOn && sound?.play()

        context.fillStyle = selectedColor;
        context.fillRect(x, y, 15, 15);

        const newMatrix = [...matrix];
        newMatrix[parsedX][parsedY] = selectedColor;
        setMatrix(newMatrix);

        drawHistory.push({ x, y, type: "draw", color: selectedColor });
      }
    };

    const undoPaint = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");

      const isCurrentlyPainted = (e: DrawHistory) => {
        if (!e?.x || !e?.y) return false;
        return matrix[Number(e.x / 15)][Number(e?.y / 15)] !== null;
      };
      const isHistoryTypeDraw = (x: DrawHistory) => x.type === "draw";

      const recentDrawHistory = takeLast([
        ...filter(isCurrentlyPainted, filter(isHistoryTypeDraw, drawHistory)),
      ]);

      if (recentDrawHistory) {
        const { x, y } = recentDrawHistory;
        context?.clearRect(x, y, 15, 15);

        const newMatrix = [...matrix];
        newMatrix[Number(x / 15)][Number(y / 15)] = null;
        setMatrix(newMatrix);

        drawHistory.push({ x, y, type: "remove", color: null });
      } else return;
    };

    const removePaint = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");

      context?.clearRect(0, 0, 450, 450);
      drawHistory.splice(0);
      setMatrix(
        Array(30)
          .fill(null)
          .map(() => Array(30).fill(null))
      );
    };

    return (
      <>
        <div id="canvas--container">
          <canvas
            onClick={doPaint}
            ref={ref}
            id="canvas"
            className={isEraserMode ? "eraser" : "pen"}
            width="450"
            height="450"
          />
          {selectedImage && <img id="canvas--image" src={selectedImage} />}
        </div>
        <div className="painting--button">
          <div>
            <PenBtn onClick={() => setIsEraserMode(false)} id="pen-btn" />
            <EraserBtn onClick={() => setIsEraserMode(true)} id="eraser-btn" />
          </div>
          <div>
            <CancelBtn id="cancel-btn" onClick={undoPaint} />
            <DeleteBtn id="delete-btn" onClick={removePaint} />
          </div>
        </div>
        <audio ref={soundRef}>
          <source src={soundSrc} type='audio/webm' />
        </audio>
      </>
    );
  }
);
