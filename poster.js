const poster = document.getElementById("poster");
const posterContent = document.getElementById("posterContent");
const posterTitle = document.getElementById("posterTitle");

const skew = document.getElementById("skew");
const rotate = document.getElementById("rotate");
const size = document.getElementById("size");
const color = document.getElementById("color");
const titleInput = document.getElementById("titleInput");
const resetButton = document.getElementById("resetButton");

const skewValue = document.getElementById("skewValue");
const rotateValue = document.getElementById("rotateValue");
const sizeValue = document.getElementById("sizeValue");

function updatePoster() {
  const skewAmount = skew.value;
  const rotateAmount = rotate.value;
  const fontSize = size.value;

  posterContent.style.transform = `skewX(${skewAmount}deg) rotate(${rotateAmount}deg)`;
  posterTitle.style.fontSize = `${fontSize}px`;
  poster.style.backgroundColor = color.value;
  posterTitle.innerHTML = titleInput.value.trim().replaceAll(" ", "<br>") || "POSTER";

  skewValue.textContent = `${skewAmount}°`;
  rotateValue.textContent = `${rotateAmount}°`;
  sizeValue.textContent = `${fontSize}px`;
}

[skew, rotate, size, color, titleInput].forEach((control) => {
  control.addEventListener("input", updatePoster);
});

resetButton.addEventListener("click", () => {
  skew.value = 0;
  rotate.value = 0;
  size.value = 64;
  color.value = "#f3e632";
  titleInput.value = "MAKE SOMETHING LOUD.";
  updatePoster();
});

updatePoster();
