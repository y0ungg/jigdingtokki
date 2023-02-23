const menu = document.getElementById("menu");
const painting = document.getElementById("painting");
const stageOneTypeA = document.getElementById("stage1-a");

stageOneTypeA.addEventListener("click", () => {
  menu.style.display = "none";
  painting.style.display = "flex";
});
