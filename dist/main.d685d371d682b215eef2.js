(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&(t=i.currentScript.src),!t)){var n=i.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"images/rainy-bg.jpg",i=e.p+"images/summer-bg.jpg",n=e.p+"images/winter-bg.jpg",r=[{id:1,title:"Rain",img:t,icon:e.p+"images/cloud-rain.svg"},{id:2,title:"Summer",img:i,icon:e.p+"images/cloud-snow.svg"},{id:3,title:"Winter",img:n,icon:e.p+"images/sun.svg"}],a=document.querySelector("#app"),c=document.createElement("h1");c.innerText="Weather sound",c.classList.add("titleWeather"),a.append(c);const s=document.createElement("div");s.classList.add("mainContainer"),r.forEach((function(e){const t=document.createElement("div"),i=document.createElement("img"),n=document.createElement("img");t.classList.add("imageWrapper"),i.classList.add("imgWeather"),n.classList.add("iconOverlay"),i.src=e.img,i.alt=e.title,n.src=e.icon,n.alt=`${e.title} icon`,t.append(i,n),s.append(t)})),a.append(s)})();
//# sourceMappingURL=main.d685d371d682b215eef2.js.map