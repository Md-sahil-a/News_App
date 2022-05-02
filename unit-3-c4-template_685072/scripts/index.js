// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar , sidebar } from "../components/navbar.js";
import { show, defaultappend, showthe} from "../components/fetch.js";

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();
let side =document.getElementById("sidebar");
side.innerHTML = sidebar();

let searching = (e)=>{
    if(e.key == "Enter"){
        window.location.href="search.html";
    }
}

document.getElementById("search_input").addEventListener("keydown", searching);


show().then((res)=>{
    defaultappend(res.articles);
});



function dsearch(){
    let q = document.getElementById("search_input").ariaValueMax;
    showthe(q).then((res)=>{
        defaultappend(res.articles);

    });
}

let cat = document.getElementById("sidebar").children;

for(let x of cat){
    x.addEventListener("click", dsearch);
}





