import bgm from "../movie/bgm.mp3";

const audio = new Audio(bgm);
const soundControlTrigger = (e) => {
  e.preventDefault();
  e.target.classList.toggle("on");
  if (e.target.classList.contains("on")) {
    audio.play();
    soundIcon.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  } else {
    audio.pause();
    soundIcon.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
  }
};

const soundIcon = document.querySelector(".sound__icon");
const soundControlButton = document.querySelector(".sound");
soundControlButton.addEventListener("click", soundControlTrigger);
