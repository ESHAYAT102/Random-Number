function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomInt = getRandomInt(100, 1000);

const randomNumberDiv = document.getElementById("randomNumber");
randomNumberDiv.textContent = randomInt;

randomNumberDiv.addEventListener("click", function () {
  const textarea = document.createElement("textarea");
  textarea.value = this.textContent;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
});
