import data from "./data";
import "./index.scss";

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

  img.classList.add("imgWeather");
  img.src = item.img;
  img.alt = item.title;

  div.append(img)
  mainContainer.append(div);
}

data.forEach(renderItem);

root.append(mainContainer);

