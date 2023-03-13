import React from "react";
import { ListNode, removeSelectedPoint } from "@/utils/listNode";

type CanvasProps = {
  isEraserMode: boolean;
  selectedImage: string;
  selectedColor: string;
};

let initialHead = new ListNode<number[]>(null, null);
const pointArray = Array(30)
  .fill(null)
  .map(() => Array(30).fill(null));

export const Canvas = (props: CanvasProps) => {
  const { isEraserMode, selectedImage, selectedColor } = props;
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  let headCursor = initialHead;

  const doPaint = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext("2d");

    const x = Math.floor(event.nativeEvent.offsetX / 15) * 15;
    const y = Math.floor(event.nativeEvent.offsetY / 15) * 15;
    if (context && isEraserMode) {
      context.clearRect(x, y, 15, 15);
      pointArray[Number(x / 15)][Number(y / 15)] = null;
      initialHead = removeSelectedPoint(initialHead, [
        Number(x / 15),
        Number(y / 15),
      ]);
    } else if (context) {
      context.fillStyle = selectedColor;
      context.fillRect(x, y, 15, 15);
      pointArray[Number(x / 15)][Number(y / 15)] = selectedColor;
      headCursor.val = [Number(x / 15), Number(y / 15)];
      headCursor.next = new ListNode<number[]>(null, null);
      headCursor = headCursor.next;
    }
  };

  return (
    <div id="canvas--container">
      <canvas
        onClick={doPaint}
        ref={canvasRef}
        id="canvas"
        className={isEraserMode ? "eraser" : "pen"}
        width="450"
        height="450"
      />
      <img id="canvas--image" src={selectedImage} />
    </div>
  );
};
