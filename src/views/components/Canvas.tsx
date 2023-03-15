import React, { forwardRef } from "react";
import { filter, takeLast } from "@/utils";
import { useForwardRef } from "@/hooks/useForwardRef";

type CanvasProps = {
  setIsEraserMode: React.Dispatch<React.SetStateAction<boolean>>;
  isEraserMode: boolean;
  selectedImage: string | null;
  selectedColor: string | null;
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

export const Canvas = forwardRef(
  (props: CanvasProps, ref: React.ForwardedRef<HTMLCanvasElement>) => {
    const { setIsEraserMode, isEraserMode, selectedImage, selectedColor } =
      props;
    const canvasRef = useForwardRef<HTMLCanvasElement>(ref);

    const [matrix, setMatrix] = React.useState(
      Array(30)
        .fill(null)
        .map(() => Array(30).fill(null))
    );

    const doPaint = (event: React.MouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");

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

      // 가장 최근 기록중에 draw이며, 현재 지워지지 않은 노드를 찾는다.
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
            <img
              onClick={() => setIsEraserMode(false)}
              id="pen-btn"
              src="icons/pen-btn.png"
            />
            <img
              onClick={() => setIsEraserMode(true)}
              id="eraser-btn"
              src="icons/eraser-btn.png"
            />
          </div>
          <div>
            <img
              id="cancel-btn"
              src="icons/cancel-btn.png"
              onClick={undoPaint}
            />
            <img
              id="delete-btn"
              src="icons/delete-btn.png"
              onClick={removePaint}
            />
          </div>
        </div>
      </>
    );
  }
);
