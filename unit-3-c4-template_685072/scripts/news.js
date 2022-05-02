// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

var data = JSON.parse(localStorage.getItem("news"));

data.forEach((el)=>{
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = el.urlToImage;
    const h1 = document.createElement("h1");
    h1.innerText = el.title;
    const p1 = document.createElement("p");
    p1.innerText = el.description;
    div.append(img, h1, p1);
    document.getElementById("detailed_news").append(div);
})