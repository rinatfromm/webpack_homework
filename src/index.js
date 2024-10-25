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

function renderItem(item) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const icon = document.createElement("img");

  div.classList.add("imageWrapper");
  img.classList.add("imgWeather");
  icon.classList.add("iconOverlay");

  img.src = item.img;
  img.alt = item.title;

  icon.src = item.icon;
  icon.alt = `${item.title} icon`;

  div.addEventListener("click", () => {
    body.style.backgroundImage = `url(${item.img})`;
    title.style.color = item.color;
    console.log(`Clicked on: ${item.title}`);
  });

  div.append(img, icon);
  mainContainer.append(div);
}

data.forEach(renderItem);
root.append(mainContainer);
