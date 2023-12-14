const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const ouiBtn = document.querySelector(".oui-btn");
const nonBtn = document.querySelector(".non-btn");

ouiBtn.addEventListener("click", () => {
  question.innerHTML = "Surprise !!!";
  gif.src =
    "https://media.giphy.com/media/C8xcudemadpVYDX5xr/giphy.gif";
});

nonBtn.addEventListener("mouseover", () => {
  const nonBtnRect = nonBtn.getBoundingClientRect();
  const maxX = window.innerWidth - nonBtnRect.width;
  const maxY = window.innerHeight - nonBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  nonBtn.style.left = randomX + "px";
  nonBtn.style.top = randomY + "px";
});