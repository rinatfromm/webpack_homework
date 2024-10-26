import data from "./data";
import "./index.scss";

const body = document.querySelector("body");
const root = document.querySelector("#app");

const title = document.createElement("h1");
title.innerText = "Weather sound";
title.classList.add("titleWeather");
root.append(title);

const mainContainer = document.createElement("div");
mainContainer.classList.add("mainContainer");

let currentSound = null;

function renderItem(item) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const icon = document.createElement("img");
  const volumeSlider = document.createElement("input");

  div.classList.add("imageWrapper");
  img.classList.add("imgWeather");
  icon.classList.add("iconOverlay");
  volumeSlider.classList.add("volumeSlider");

  img.src = item.img;
  img.alt = item.title;

  icon.src = item.icon;
  icon.alt = `${item.title} icon`;

  const sound = new Audio(item.sound);

  volumeSlider.type = "range";
  volumeSlider.min = "0";
  volumeSlider.max = "1";
  volumeSlider.step = "0.1";

  volumeSlider.addEventListener("input", (event) => {
    sound.volume = event.target.value;
  });

  div.addEventListener("click", (event) => {
    if (event.target === volumeSlider) return;

    body.style.backgroundImage = `url(${item.img})`;
    title.style.color = item.color;

    if (currentSound && currentSound !== sound) {
      currentSound.pause();
      currentSound.currentTime = 0;
    }

    if (currentSound === sound) {
      if (sound.paused) {
        sound.play();
      } else {
        sound.pause();
      }
    } else {
      currentSound = sound;
      sound.play();
    }
    console.log(`Clicked on: ${item.title}`);
  });

  div.append(img, icon, volumeSlider);
  mainContainer.append(div);
}

data.forEach(renderItem);
root.append(mainContainer);
