const projects = document.querySelector(".projects");
const dropdown = document.querySelector(".project-dropdown");
const h1About = document.querySelector(".about");
const hero = document.querySelector(".hero");
const heroImg = document.querySelector(".hero-img");
const heroText = document.querySelector(".hero-text");
const space = document.querySelector(".space")
const articleImg = document.querySelector(".article");
const spotlight = document.querySelector(".glow");
const main = document.querySelector(".main");
const storyProject = document.getElementById("story");
const articlePage = document.getElementById("article");
const heroName = document.querySelector(".name");
const heroDetails = document.querySelector(".details");
const nav = document.querySelector(".nav");
const back = document.querySelector(".back");

let clicked = 0;

back.addEventListener("click",()=>{
    nav.style.transform = "translateX(0)";
    nav.style.opacity = "1";
    heroText.style.transform = "translateX(0)";
    back.style.opacity = "0";
    heroImg.style.opacity = "1";
    if(clicked==1){
        articleImg.style.transform = "skewY(5deg) translateX(0)";
        articleImg.style.opacity = "0";
    }else if(clicked==2){
        space.style.transform = "skewY(5deg) translateX(0)";
        space.style.opacity = "0";
    }
    heroName.innerText = "Mel James Calzada";
    heroDetails.innerHTML = `Full Stack Developer<br>Philippines<br><span class="email"><i class="fa-solid fa-envelope"></i>MelPoPo21@gmail.com</span>
                <br>
                <br>
                <span>Technologies</span>
                <br>
                <i class="fa-brands fa-html5 expertise"></i>HTML
                <br>
                <i class="fa-brands fa-css3-alt expertise"></i>CSS
                <br>
                <i class="fa-brands fa-js"></i>Javascript
                <br>
                <i class="fa-brands fa-java"></i>Java
                <br>
                <i class="fa-brands fa-node-js"></i>Node.js
                <br>
                <i class="fa-brands fa-python"></i>Python
                <br>
                <i class="fa-solid fa-database"></i>SQL
                <br>
                <i class="fa-brands fa-laravel"></i>Laravel`;
    clicked = 0;
})

articlePage.addEventListener("click",()=>{
    nav.style.transform = "translateX(-2em)";
    nav.style.opacity = "0";
    heroText.style.transform = "translateX(-8em)";
    back.style.opacity = "1";
    articleImg.style.transform = "skewY(0deg) translateX(-2em)";
    heroImg.style.opacity = "0";
    clicked = 1;
})
articlePage.addEventListener("mouseenter",()=>{
    heroImg.style.opacity = "0";
    articleImg.style.opacity = "1";
    heroName.innerText = "Article Page";
    heroDetails.innerHTML = `Technologies<br><i class="fa-brands fa-html5"></i>HTML<br><i class="fa-brands fa-css3-alt"></i>CSS<br><i class="fa-brands fa-js"></i>Javascript<br><br><a href="https://artikulo.netlify.app/" target="_blank">Visit Page</a>`;
})
articlePage.addEventListener("mouseleave",()=>{
    if(clicked == 0){
        heroImg.style.opacity = "1";
        articleImg.style.opacity = "0";
        heroName.innerText = "Mel James Calzada";
        heroDetails.innerHTML = `Full Stack Developer<br>Philippines<br><span class="email"><i class="fa-solid fa-envelope"></i>MelPoPo21@gmail.com</span>
                    <br>
                    <br>
                    <span>Technologies</span>
                    <br>
                    <i class="fa-brands fa-html5 expertise"></i>HTML
                    <br>
                    <i class="fa-brands fa-css3-alt expertise"></i>CSS
                    <br>
                    <i class="fa-brands fa-js"></i>Javascript
                    <br>
                    <i class="fa-brands fa-java"></i>Java
                    <br>
                    <i class="fa-brands fa-node-js"></i>Node.js
                    <br>
                    <i class="fa-brands fa-python"></i>Python
                    <br>
                    <i class="fa-solid fa-database"></i>SQL
                    <br>
                    <i class="fa-brands fa-laravel"></i>Laravel`;
    }
})

storyProject.addEventListener("click",()=>{
    nav.style.transform = "translateX(-2em)";
    nav.style.opacity = "0";
    heroText.style.transform = "translateX(-8em)";
    back.style.opacity = "1";
    space.style.transform = "skewY(0deg) translateX(-2em)";
    heroImg.style.opacity = "0";
    clicked = 2;
})
storyProject.addEventListener("mouseenter",()=>{
    heroImg.style.opacity = "0";
    space.style.opacity = "1";
    heroName.innerText = "Story of My Life";
    heroDetails.innerHTML = `Technologies<br><i class="fa-brands fa-html5"></i>HTML<br><i class="fa-brands fa-css3-alt"></i>CSS<br><br><a href="https://spacestoree.netlify.app/" target="_blank">Visit Page</a>`;
})
storyProject.addEventListener("mouseleave",()=>{
    if(clicked == 0){
        heroImg.style.opacity = "1";
        space.style.opacity = "0";
        heroName.innerText = "Mel James Calzada";
        heroDetails.innerHTML = `Full Stack Developer<br>Philippines<br><span class="email"><i class="fa-solid fa-envelope"></i>MelPoPo21@gmail.com</span>
                    <br>
                    <br>
                    <span>Technologies</span>
                    <br>
                    <i class="fa-brands fa-html5 expertise"></i>HTML
                    <br>
                    <i class="fa-brands fa-css3-alt expertise"></i>CSS
                    <br>
                    <i class="fa-brands fa-js"></i>Javascript
                    <br>
                    <i class="fa-brands fa-java"></i>Java
                    <br>
                    <i class="fa-brands fa-node-js"></i>Node.js
                    <br>
                    <i class="fa-brands fa-python"></i>Python
                    <br>
                    <i class="fa-solid fa-database"></i>SQL
                    <br>
                    <i class="fa-brands fa-laravel"></i>Laravel`;
    }
})

projects.addEventListener("mouseenter",()=>{
    dropdown.style.height = "100%";
    h1About.style.transform = "translateY(4.5em)";
    dropdown.style.pointerEvents = "auto";
})
projects.addEventListener("mouseleave",()=>{
    setTimeout(()=>{
        if(!dropdown.matches(":hover")){
            dropdown.style.pointerEvents = "none";
            h1About.style.transform = "translateY(0)";
            dropdown.style.height = "0";
        }
    },200)
    
})
dropdown.addEventListener("mouseenter",()=>{
    dropdown.style.height = "100%";
    dropdown.style.pointerEvents = "auto";
})
dropdown.addEventListener("mouseleave",()=>{
    dropdown.style.pointerEvents = "none";
    h1About.style.transform = "translateY(0)";
    dropdown.style.height = "0";
})

window.addEventListener("mousemove",(e)=>{
    let w = window.innerWidth;
    let h = window.innerHeight;

    hero.style.transform = "translateX(" + (-(e.clientX)-(w/2))/200 + "%) translateY(" + (-(e.clientY)-(h/2))/200 + "%)";

    let x = e.clientX ;
    let y = e.clientY;
    spotlight.style.setProperty("--mouse-x",`${x}px`);
    spotlight.style.setProperty("--mouse-y",`${y}px`);
    
})

document.addEventListener("mousemove",(e)=>{
    
})