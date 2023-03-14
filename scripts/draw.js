// const images = document.querySelectorAll(".border > img");
// const eraser = document.getElementById("eraser-btn");
// const pen = document.getElementById("pen-btn");
// const undo = document.getElementById("cancel-btn");
// const remove = document.getElementById("delete-btn");
// const download = document.getElementById("save-btn");
// const tweet = document.getElementById("twitter-btn");
// const context = canvas.getContext("2d");

// let selectedColor;
// let isEraserMode = false;

// const setCursorPen = () => {
//   isEraserMode = false;
//   canvas.classList.remove("eraser");
//   canvas.classList.add("pen");
// };

// eraser.addEventListener("click", () => {
//   isEraserMode = true;
//   canvas.classList.remove("pen");
//   canvas.classList.add("eraser");
// });

// pen.addEventListener("click", setCursorPen);

// const setPalette = () => {
//   const paletteName = palette.className;
//   selectedColor = PALETTE_COLORS[paletteName][0];
//   PALETTE_COLORS[paletteName].forEach((code, idx) => {
//     const colorBg = document.createElement("div");
//     colorBg.classList.add("color");
//     colorBg.style.background = `${code} url("chrome-extension://${chrome.runtime.id}/assets/color-btn.png")`;
//     const number = document.createElement("div");
//     number.classList.add("number");
//     number.innerText = idx < 10 ? `  ${idx + 1}` : idx + 1;
//     colorBg.appendChild(number);
//     palette.appendChild(colorBg);
//     colorBg.addEventListener("click", () => {
//       setCursorPen();
//       selectedColor = PALETTE_COLORS[paletteName][idx];
//     });
//   });
// };

// images.forEach((image) => {
//   image.addEventListener("click", setPalette);
// });

const downloadImage = () => {
  const link = document.createElement("a");
  link.download = "jigdingtokki.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
};

download.addEventListener("click", downloadImage);

// const shareATweet = () => {
//   window.open(
//     `https://twitter.com/intent/tweet?text=[tip: 이미지를 저장해서 함께 올려보세요] 직딩 토끼의 하루가 궁금하다면👀&hashtags=직딩토끼의하루,jigdingtokki,피포페인팅,월루&via=jigdingtokki`,
//     "Tweet",
//     "popup, width=450, height=450"
//   );
// };

// tweet.addEventListener("click", shareATweet);
