let show = async ()=>{
    const res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`);
    const data = await res.json();
    return data;
}


let showthe = async ()=>{
    const res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`);
    const data = await res.json();
    return data;
}

let arr = [];
let defaultappend = (data)=>{
    data.forEach((el)=>{
        const div = document.createElement("div");
        div.setAttribute("class","news");
        
        const img = document.createElement("img");
        img.src = el.urlToImage;
        div.addEventListener("click", function(){
            addtolocal(el);
        })
        const p1 = document.createElement("h1");
        p1.innerText = el.title;
        const p2 = document.createElement("p");
        p2.innerText = el.description;
        div.append(img, p1, p2);
        document.getElementById("results").append(div);
    });

}
function addtolocal(el){
    arr.push(el);
    localStorage.setItem("news", JSON.stringify(arr));
    window.location.href = "./news.html";
}




let search = async (q)=>{
    const res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${q}`);
    const data = await res.json();
    return data;
}

let appendsearch = (data)=>{
    data.forEach((el)=>{
        const div = document.createElement("div");
        div.setAttribute("class","news");
        const img = document.createElement("img");
        img.src = el.urlToImage;
        const p1 = document.createElement("h1");
        p1.innerText = el.title;
        const p2 = document.createElement("p");
        p2.innerText = el.description;
        div.append(img, p1, p2);
       document.getElementById("results").append(div);
    })

}

export{show, defaultappend, search, appendsearch, showthe};