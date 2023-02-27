const images = document.querySelectorAll(".border > img");
const colors = document.querySelectorAll(".color");

const useState = (defaultValue) => {
  let value = defaultValue;
  const getValue = () => value;
  const setValue = (newValue) => (value = newValue);
  return [getValue, setValue];
};

let selectedColor;

const setPalette = () => {
  const paletteName = palette.className;
  selectedColor = PALETTE_COLORS[paletteName].one;
  colors.forEach((color) => {
    color.src = `chrome-extension://${chrome.runtime.id}/palette/${paletteName}/${color.id}.png`;
    color.addEventListener(
      "click",
      () => (selectedColor = PALETTE_COLORS[paletteName][color.id])
    );
  });
};

images.forEach((image) => {
  image.addEventListener("click", setPalette);
});

const doPaint = (event) => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const x = Math.floor(event.offsetX / 15) * 15;
  const y = Math.floor(event.offsetY / 15) * 15;
  if (context) {
    context.fillStyle = selectedColor;
    context.fillRect(x, y, 15, 15);
  }
};

canvas.addEventListener("mousedown", doPaint);
