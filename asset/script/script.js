const hamburger = document.querySelector(".hamburger-btn");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link")


hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
});

navLink.forEach(el => el.addEventListener("click", function(){
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}));

window.onscroll = profil

let profile = document.querySelector("#profile");
let stick = profile.offsetTop;

function profil(){
    if(window.pageYOffset >= (stick - 40)) profile.classList.add("sticky");
    else profile.classList.remove("sticky");
}

loopContent(listPC, '#pc')
loopContent(listMobile, '#mobile')

function loopContent(content, divId)
{
    content.forEach(({title, src, alt, text, link}, element) => {
        let imgList = document.createElement('img');
        let titleList = document.createElement('h2');
        let textList = document.createElement('p');
        let divArticle = document.createElement('div');
        let anchor = document.createElement('a');
    
        imgList.src = src;
        imgList.alt = alt;
        imgList.classList.add('img-cropping');
    
        anchor.href = link;
        anchor.target = '_blank';
        anchor.innerHTML = "Mainkan Sekarang"
        anchor.classList.add("button");
    
        divArticle.classList.add('article-body');
        titleList.innerHTML = title;
        textList.classList.add("text-justify");
        textList.innerHTML = text;
        divArticle.appendChild(titleList);
        divArticle.appendChild(textList);
        divArticle.appendChild(anchor);
    
        document.querySelector(divId).appendChild(imgList);
        document.querySelector(divId).appendChild(divArticle);
    });
}