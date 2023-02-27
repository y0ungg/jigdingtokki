const menu = document.getElementById("menu--container");
const painting = document.getElementById("painting--container");
const selectedImage = document.querySelectorAll(".border img");
const palette = document.getElementById("palette");
const backBtn = document.getElementById("back-btn");

const image = document.createElement("img");

selectedImage.forEach((img) => {
  img.addEventListener("click", () => {
    image.src = `chrome-extension://${chrome.runtime.id}/images/${img.id}.png`;
    palette.classList.add(img.id);
    menu.style.display = "none";
    painting.style.display = "flex";
  });
});

const getImage = () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  if (context) {
    context.drawImage(image, 0, 0);
    context.strokeStyle = "black";
    context.stroke();
  }
};

image.addEventListener("load", getImage);

const backToMenu = () => {
  menu.style.display = "block";
  painting.style.display = "none";
};

backBtn.addEventListener("click", backToMenu);
