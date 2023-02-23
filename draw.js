const image = document.createElement("img");
image.src = `chrome-extension://${chrome.runtime.id}/images/stage1-a.png`;
// for (let x = 0; x <= 450; x += 15) {
//   context.moveTo(x, 0);
//   context.lineTo(x, 450);
// }
// for (let y = 0; y <= 450; y += 15) {
//   context.moveTo(0, y);
//   context.lineTo(450, y);
// }

const getImage = () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  if (context) {
    context.drawImage(image, 0, 0);
    context.strokeStyle = "black";
    context.stroke();
  }
};

window.addEventListener("load", getImage);

const doPaint = (event) => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const x = event.offsetX;
  const y = event.offsetY;
  if (context) {
    context.fillStyle = "green";
    context.fillRect(x - 8, y - 8, 15, 15);
  }
};

canvas.addEventListener("mousedown", getNearestSquare);

function getNearestSquare(event) {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const x = Math.floor(event.offsetX / 15) * 15;
  const y = Math.floor(event.offsetY / 15) * 15;
  if (context) {
    context.fillStyle = "#FF0000";
    context.fillRect(x, y, 15, 15);
  }
}
