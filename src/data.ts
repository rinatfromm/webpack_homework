import rain from "./assets/rainy-bg.jpg";
import summer from "./assets/summer-bg.jpg";
import winter from "./assets/winter-bg.jpg";
import cloudRain from "./assets/icons/cloud-rain.svg";
import cloudSnow from "./assets/icons/cloud-snow.svg";
import sun from "./assets/icons/sun.svg";
import rainSound from "./assets/sounds/rain.mp3";
import summerSound from "./assets/sounds/summer.mp3";
import winterSound from "./assets/sounds/winter.mp3";
import WeatherItem from './types/WeatherItem'


const data: WeatherItem[] = [
  {
    id: 1,
    title: "Rain",
    img: rain,
    icon: cloudRain,
    color: "#4a90e2",
    sound: rainSound,
  },
  {
    id: 2,
    title: "Summer",
    img: summer,
    icon: cloudSnow,
    color: "#f9d423",
    sound: summerSound,
  },
  {
    id: 3,
    title: "Winter",
    img: winter,
    icon: sun,
    color: "#8ec6e6",
    sound: winterSound,
  },
];

export default data;
