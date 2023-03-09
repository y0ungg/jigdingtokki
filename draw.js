const images = document.querySelectorAll(".border > img");
const colors = document.querySelectorAll(".color");
const eraser = document.getElementById("eraser-btn");
const pen = document.getElementById("pen-btn");
const undo = document.getElementById("cancel-btn");
const remove = document.getElementById("delete-btn");
const context = canvas.getContext("2d");

let selectedColor;
let isEraserMode = false;

const setCursorPen = () => {
  isEraserMode = false;
  canvas.classList.remove("eraser");
  canvas.classList.add("pen");
};

const setPalette = () => {
  const paletteName = palette.className;
  selectedColor = PALETTE_COLORS[paletteName].one;
  colors.forEach((color) => {
    color.src = `chrome-extension://${chrome.runtime.id}/palette/${paletteName}/${color.id}.png`;
    color.addEventListener("click", () => {
      setCursorPen();
      selectedColor = PALETTE_COLORS[paletteName][color.id];
    });
  });
};

images.forEach((image) => {
  image.addEventListener("click", setPalette);
});

eraser.addEventListener("click", () => {
  isEraserMode = true;
  canvas.classList.remove("pen");
  canvas.classList.add("eraser");
});

pen.addEventListener("click", setCursorPen);

const pointArray = [];

const doPaint = (event) => {
  const x = Math.floor(event.offsetX / 15) * 15;
  const y = Math.floor(event.offsetY / 15) * 15;
  pointArray.unshift({ x, y });
  if (context && isEraserMode) {
    context.clearRect(x, y, 15, 15);
  } else if (context) {
    context.fillStyle = selectedColor;
    context.fillRect(x, y, 15, 15);
  }
};

canvas.addEventListener("mousedown", doPaint);

undo.addEventListener("click", () => {
  if (pointArray.length === 0) return;
  const { x, y } = pointArray[0];
  context.clearRect(x, y, 15, 15);
  pointArray.shift();
});

remove.addEventListener("click", () => {
  pointArray.splice(0);
  context.clearRect(0, 0, 450, 450);
});
