// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
import { search , appendsearch } from "../components/fetch.js";

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();
let searchit = (e)=>{
    if(e.key == "Enter"){
        let q = document.getElementById("search_input").value;
        search(q).then((res)=>{
            appendsearch(res.articles);
        })
    }
}

document.getElementById("search_input").addEventListener("keydown", searchit);