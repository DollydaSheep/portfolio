const projects = document.querySelector(".projects");
const dropdown = document.querySelector(".project-dropdown");
const h1About = document.querySelector(".about");
const hero = document.querySelector(".hero");
const heroImg = document.querySelector(".hero-img");
const heroText = document.querySelector(".hero-text");

const melfm = document.querySelector(".melfm")
const articleImg = document.querySelector(".article");

const spotlight = document.querySelector(".glow");
const main = document.querySelector(".main");
const storyProject = document.getElementById("story");
const articlePage = document.getElementById("article");
const heroName = document.querySelector(".name");
const heroDetails = document.querySelector(".details");
const nav = document.querySelector(".nav");
const back = document.querySelector(".back");

const dropItem = document.querySelectorAll(".drop-item");


let clicked = 0;

back.addEventListener("click",()=>{
    nav.style.transform = "translateX(0)";
    nav.style.opacity = "1";
    dropdown.style.pointerEvents = "auto";
    heroText.style.transform = "translateX(0)";
    back.style.opacity = "0";
    heroImg.style.opacity = "1";
    if(clicked==1){
        articleImg.style.transform = "skewY(5deg) translateX(0)";
        articleImg.style.opacity = "0";
    }else if(clicked==2){
        melfm.style.transform = "skewY(5deg) translateX(0)";
        melfm.style.opacity = "0";
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
                <i class="fa-brands fa-react"></i>React
                    <br>
                    <i class="fa-solid fa-c"></i>C
                    <br>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M43.91016,12.00391l-16.83984,-9.46484c-1.27734,-0.71484 -2.86328,-0.71484 -4.14062,0l-16.83984,9.46484c-1.28906,0.72266 -2.08984,2.07813 -2.08984,3.53125v18.92969c0,1.45313 0.80078,2.80859 2.08984,3.53125l16.83984,9.46484c0.64063,0.35938 1.35547,0.53906 2.07031,0.53906c0.71484,0 1.42969,-0.17969 2.07031,-0.53906l16.83984,-9.46484c1.28906,-0.72266 2.08984,-2.07812 2.08984,-3.53125v-18.92969c0,-1.45312 -0.80078,-2.80859 -2.08984,-3.53125zM25,37c-6.61719,0 -12,-5.38281 -12,-12c0,-6.61719 5.38281,-12 12,-12c3.78125,0 7.27344,1.75391 9.54297,4.74219l-4.38281,2.53516c-1.31641,-1.44141 -3.1875,-2.27734 -5.16016,-2.27734c-3.85937,0 -7,3.14063 -7,7c0,3.85938 3.14063,7 7,7c1.97266,0 3.84375,-0.83594 5.16016,-2.27734l4.38281,2.53516c-2.26953,2.98828 -5.76172,4.74219 -9.54297,4.74219zM37,26h-2v2h-2v-2h-2v-2h2v-2h2v2h2zM44,26h-2v2h-2v-2h-2v-2h2v-2h2v2h2z"></path></g></g>
</svg> C++`;
    clicked = 0;
})

// articlePage.addEventListener("click",()=>{
//     nav.style.transform = "translateX(-2em)";
//     nav.style.opacity = "0";
//     heroText.style.transform = "translateX(-8em)";
//     back.style.opacity = "1";
//     articleImg.style.transform = "skewY(0deg) translateX(-2em)";
//     heroImg.style.opacity = "0";
//     clicked = 1;
// })
// articlePage.addEventListener("mouseenter",()=>{
    
// })
// articlePage.addEventListener("mouseleave",()=>{
//     if(clicked == 0){
//         heroImg.style.opacity = "1";
//         articleImg.style.opacity = "0";
//         heroName.innerText = "Mel James Calzada";
//         heroDetails.innerHTML = `Full Stack Developer<br>Philippines<br><span class="email"><i class="fa-solid fa-envelope"></i>MelPoPo21@gmail.com</span>
//                     <br>
//                     <br>
//                     <span>Technologies</span>
//                     <br>
//                     <i class="fa-brands fa-html5 expertise"></i>HTML
//                     <br>
//                     <i class="fa-brands fa-css3-alt expertise"></i>CSS
//                     <br>
//                     <i class="fa-brands fa-js"></i>Javascript
//                     <br>
//                     <i class="fa-brands fa-java"></i>Java
//                     <br>
//                     <i class="fa-brands fa-node-js"></i>Node.js
//                     <br>
//                     <i class="fa-brands fa-python"></i>Python
//                     <br>
//                     <i class="fa-solid fa-database"></i>SQL
//                     <br>
//                     <i class="fa-brands fa-react"></i>React
//                     <br>
//                     <i class="fa-solid fa-c"></i>C
//                     <br>
//                     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0,0,256,256">
// <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M43.91016,12.00391l-16.83984,-9.46484c-1.27734,-0.71484 -2.86328,-0.71484 -4.14062,0l-16.83984,9.46484c-1.28906,0.72266 -2.08984,2.07813 -2.08984,3.53125v18.92969c0,1.45313 0.80078,2.80859 2.08984,3.53125l16.83984,9.46484c0.64063,0.35938 1.35547,0.53906 2.07031,0.53906c0.71484,0 1.42969,-0.17969 2.07031,-0.53906l16.83984,-9.46484c1.28906,-0.72266 2.08984,-2.07812 2.08984,-3.53125v-18.92969c0,-1.45312 -0.80078,-2.80859 -2.08984,-3.53125zM25,37c-6.61719,0 -12,-5.38281 -12,-12c0,-6.61719 5.38281,-12 12,-12c3.78125,0 7.27344,1.75391 9.54297,4.74219l-4.38281,2.53516c-1.31641,-1.44141 -3.1875,-2.27734 -5.16016,-2.27734c-3.85937,0 -7,3.14063 -7,7c0,3.85938 3.14063,7 7,7c1.97266,0 3.84375,-0.83594 5.16016,-2.27734l4.38281,2.53516c-2.26953,2.98828 -5.76172,4.74219 -9.54297,4.74219zM37,26h-2v2h-2v-2h-2v-2h2v-2h2v2h2zM44,26h-2v2h-2v-2h-2v-2h2v-2h2v2h2z"></path></g></g>
// </svg> C++`;
//     }
// })

// storyProject.addEventListener("click",()=>{
//     nav.style.transform = "translateX(-2em)";
//     nav.style.opacity = "0";
//     heroText.style.transform = "translateX(-8em)";
//     back.style.opacity = "1";
//     space.style.transform = "skewY(0deg) translateX(-2em)";
//     heroImg.style.opacity = "0";
//     clicked = 2;
// })
// storyProject.addEventListener("mouseenter",()=>{
//     heroImg.style.opacity = "0";
//     space.style.opacity = "1";
//     heroName.innerText = "Story of My Life";
//     heroDetails.innerHTML = `Technologies<br><i class="fa-brands fa-html5"></i>HTML<br><i class="fa-brands fa-css3-alt"></i>CSS<br><br><a href="https://spacestoree.netlify.app/" target="_blank">Visit Page</a>`;
// })
// storyProject.addEventListener("mouseleave",()=>{
//     if(clicked == 0){
//         heroImg.style.opacity = "1";
//         space.style.opacity = "0";
//         heroName.innerText = "Mel James Calzada";
//         heroDetails.innerHTML = `Full Stack Developer<br>Philippines<br><span class="email"><i class="fa-solid fa-envelope"></i>MelPoPo21@gmail.com</span>
//                     <br>
//                     <br>
//                     <span>Technologies</span>
//                     <br>
//                     <i class="fa-brands fa-html5 expertise"></i>HTML
//                     <br>
//                     <i class="fa-brands fa-css3-alt expertise"></i>CSS
//                     <br>
//                     <i class="fa-brands fa-js"></i>Javascript
//                     <br>
//                     <i class="fa-brands fa-java"></i>Java
//                     <br>
//                     <i class="fa-brands fa-node-js"></i>Node.js
//                     <br>
//                     <i class="fa-brands fa-python"></i>Python
//                     <br>
//                     <i class="fa-solid fa-database"></i>SQL
//                     <br>
//                     <i class="fa-brands fa-react"></i>React
//                     <br>
//                     <i class="fa-solid fa-c"></i>C
//                     <br>
//                     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0,0,256,256">
// <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M43.91016,12.00391l-16.83984,-9.46484c-1.27734,-0.71484 -2.86328,-0.71484 -4.14062,0l-16.83984,9.46484c-1.28906,0.72266 -2.08984,2.07813 -2.08984,3.53125v18.92969c0,1.45313 0.80078,2.80859 2.08984,3.53125l16.83984,9.46484c0.64063,0.35938 1.35547,0.53906 2.07031,0.53906c0.71484,0 1.42969,-0.17969 2.07031,-0.53906l16.83984,-9.46484c1.28906,-0.72266 2.08984,-2.07812 2.08984,-3.53125v-18.92969c0,-1.45312 -0.80078,-2.80859 -2.08984,-3.53125zM25,37c-6.61719,0 -12,-5.38281 -12,-12c0,-6.61719 5.38281,-12 12,-12c3.78125,0 7.27344,1.75391 9.54297,4.74219l-4.38281,2.53516c-1.31641,-1.44141 -3.1875,-2.27734 -5.16016,-2.27734c-3.85937,0 -7,3.14063 -7,7c0,3.85938 3.14063,7 7,7c1.97266,0 3.84375,-0.83594 5.16016,-2.27734l4.38281,2.53516c-2.26953,2.98828 -5.76172,4.74219 -9.54297,4.74219zM37,26h-2v2h-2v-2h-2v-2h2v-2h2v2h2zM44,26h-2v2h-2v-2h-2v-2h2v-2h2v2h2z"></path></g></g>
// </svg> C++`;
//     }
// })

dropItem.forEach((item,index) => {
    if(clicked == 0){
        item.addEventListener("mouseenter", ()=>{
            if(index == 0){
                heroImg.style.opacity = "0";
                melfm.style.opacity = "1";
                heroName.innerText = "MelFM";
                heroDetails.innerHTML = `Technologies<br><i class="fa-brands fa-react"></i>React<br><i class="fa-brands fa-css3-alt"></i>CSS<br><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0,0,256,256">
    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8,8)"><path d="M15.99414,3c-0.365,0 -0.72992,0.08953 -1.04492,0.26953l-9.91016,5.7207c-0.64,0.37 -1.03906,1.07055 -1.03906,1.81055v10.37891c0,0.75 0.39906,1.44055 1.03906,1.81055l2.60156,1.5c1.26,0.62 1.7093,0.61914 2.2793,0.61914c1.87,0 2.93945,-1.12984 2.93945,-3.08984v-10.70898c0,-0.16 -0.12906,-0.29102 -0.28906,-0.29102h-1.25c-0.17,0 -0.29101,0.13102 -0.29101,0.29102v10.69922c0,0.88 -0.90891,1.73977 -2.37891,1.00977l-2.7207,-1.57031c-0.1,-0.05 -0.16016,-0.15953 -0.16016,-0.26953v-10.36914c0,-0.12 0.06016,-0.22125 0.16016,-0.28125l9.91016,-5.71875c0.09,-0.06 0.21055,-0.06 0.31055,0l9.91016,5.71875c0.1,0.06 0.16016,0.16148 0.16016,0.27148v10.37891c0,0.11 -0.06039,0.21953 -0.15039,0.26953l-9.91992,5.73047c-0.09,0.05 -0.22055,0.05 -0.31055,0l-2.55078,-1.50977c-0.07,-0.05 -0.16828,-0.05953 -0.23828,-0.01953c-0.71,0.4 -0.84,0.44969 -1.5,0.67969c-0.16,0.05 -0.41016,0.14969 0.08984,0.42969l3.30859,1.96094c0.32,0.18 0.68102,0.2793 1.04101,0.2793c0.37,0 0.72883,-0.0993 1.04883,-0.2793l9.92188,-5.73047c0.64,-0.37 1.03906,-1.06055 1.03906,-1.81055v-10.36914c0,-0.75 -0.39906,-1.44055 -1.03906,-1.81055l-9.92188,-5.73047c-0.315,-0.18 -0.67992,-0.26953 -1.04492,-0.26953zM18.66016,11.00586c-2.83,0 -4.51953,1.19922 -4.51953,3.19922c0,2.17 1.67844,2.76906 4.39844,3.03906c3.25,0.32 3.5,0.80141 3.5,1.44141c0,1.1 -0.88852,1.57031 -2.97852,1.57031c-2.63,0 -3.21039,-0.66094 -3.40039,-1.96094c-0.02,-0.14 -0.1393,-0.24023 -0.2793,-0.24023h-1.29101c-0.16,0 -0.2793,0.13125 -0.2793,0.28125c0,1.67 0.91,3.6582 5.25,3.6582c3.14,0 4.93945,-1.23844 4.93945,-3.39844c0,-2.14 -1.45023,-2.71109 -4.49023,-3.12109c-3.09,-0.4 -3.40039,-0.61008 -3.40039,-1.33008c0,-0.6 0.27078,-1.38867 2.55078,-1.38867c2.03,0 2.78961,0.43859 3.09961,1.80859c0.03,0.13 0.1393,0.23047 0.2793,0.23047h1.29102c0.08,0 0.14898,-0.03961 0.20898,-0.09961c0.05,-0.05 0.08031,-0.1307 0.07031,-0.2207c-0.2,-2.36 -1.76922,-3.46875 -4.94922,-3.46875z"></path></g></g>
    </svg> Node.js<br><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0,0,256,256">
    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M49.729,11h-0.85c-1.051,0 -2.041,0.49 -2.68,1.324l-8.7,11.377l-8.7,-11.377c-0.637,-0.834 -1.628,-1.324 -2.678,-1.324h-0.85l10.971,14.346l-11.206,14.654h0.85c1.051,0 2.041,-0.49 2.679,-1.324l8.935,-11.684l8.935,11.684c0.638,0.834 1.628,1.324 2.679,1.324h0.85l-11.206,-14.654zM21.289,34.242c-2.554,3.881 -7.582,5.87 -12.389,4.116c-4.229,-1.543 -6.9,-5.747 -6.9,-10.249v-1.109h12v0h11v-4.134c0,-6.505 -4.818,-12.2 -11.295,-12.809c-7.432,-0.699 -13.705,5.153 -13.705,12.443v5.573c0,5.371 3.215,10.364 8.269,12.183c6.603,2.376 13.548,-1.17 15.896,-7.256v0h-0.638c-0.911,0 -1.738,0.481 -2.238,1.242zM2,22.5c0,-5.79 4.71,-10.5 10.5,-10.5c5.79,0 10.5,4.71 10.5,10.5v2.5h-21z"></path></g></g>
    </svg> Express<br><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0,0,256,256">
    <g fill="none" fill-rule="nonzero" stroke="#ffffff" stroke-width="3" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><g id="Ð¡Ð»Ð¾Ð¹_1"><path d="M23.5,30.5v-24c0,-1.9 -2.3,-2.7 -3.4,-1.2l-16,21c-1.3,1.7 -0.1,4.2 2,4.2z"></path><path d="M23.5,18.5v24c0,1.9 2.4,2.7 3.6,1.2l16.8,-21c1.4,-1.7 0.1,-4.2 -2.1,-4.2z"></path></g></g></g>
    </svg> Supabase<br><br><a href="https://spacestoree.netlify.app/" target="_blank"><i class="fa-brands fa-github"></i>GitHub</a>`;
            } else if(index == 1){
                heroImg.style.opacity = "0";
                articleImg.style.opacity = "1";
                heroName.innerText = "Article Page";
                heroDetails.innerHTML = `Technologies<br><i class="fa-brands fa-html5"></i>HTML<br><i class="fa-brands fa-css3-alt"></i>CSS<br><i class="fa-brands fa-js"></i>Javascript<br><br><a href="https://artikulo.netlify.app/" target="_blank">Visit Page</a>`;
            }
        })
    }
    
    item.addEventListener("mouseleave", () =>{
        if(clicked == 0){
            heroImg.style.opacity = "1";
            if(index == 0){
                melfm.style.opacity = "0";
            } else if(index == 1){
                articleImg.style.opacity = "0";
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
                        <i class="fa-brands fa-react"></i>React
                        <br>
                        <i class="fa-solid fa-c"></i>C
                        <br>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0,0,256,256">
    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M43.91016,12.00391l-16.83984,-9.46484c-1.27734,-0.71484 -2.86328,-0.71484 -4.14062,0l-16.83984,9.46484c-1.28906,0.72266 -2.08984,2.07813 -2.08984,3.53125v18.92969c0,1.45313 0.80078,2.80859 2.08984,3.53125l16.83984,9.46484c0.64063,0.35938 1.35547,0.53906 2.07031,0.53906c0.71484,0 1.42969,-0.17969 2.07031,-0.53906l16.83984,-9.46484c1.28906,-0.72266 2.08984,-2.07812 2.08984,-3.53125v-18.92969c0,-1.45312 -0.80078,-2.80859 -2.08984,-3.53125zM25,37c-6.61719,0 -12,-5.38281 -12,-12c0,-6.61719 5.38281,-12 12,-12c3.78125,0 7.27344,1.75391 9.54297,4.74219l-4.38281,2.53516c-1.31641,-1.44141 -3.1875,-2.27734 -5.16016,-2.27734c-3.85937,0 -7,3.14063 -7,7c0,3.85938 3.14063,7 7,7c1.97266,0 3.84375,-0.83594 5.16016,-2.27734l4.38281,2.53516c-2.26953,2.98828 -5.76172,4.74219 -9.54297,4.74219zM37,26h-2v2h-2v-2h-2v-2h2v-2h2v2h2zM44,26h-2v2h-2v-2h-2v-2h2v-2h2v2h2z"></path></g></g>
    </svg> C++`;
        }
    })
    item.addEventListener("click", ()=>{
        dropdown.style.pointerEvents = "none";
        if(index==0){
            nav.style.transform = "translateX(-2em)";
            nav.style.opacity = "0";
            heroText.style.transform = "translateX(-8em)";
            back.style.opacity = "1";
            melfm.style.transform = "skewY(0deg) translateX(-2em)";
            heroImg.style.opacity = "0";
            clicked = 2;
        } else if(index == 1){
            nav.style.transform = "translateX(-2em)";
            nav.style.opacity = "0";
            heroText.style.transform = "translateX(-8em)";
            back.style.opacity = "1";
            articleImg.style.transform = "skewY(0deg) translateX(-2em)";
            heroImg.style.opacity = "0";
            clicked = 1;
        }
    })
})

projects.addEventListener("mouseenter",()=>{
    dropdown.style.height = "16em";
    h1About.style.transform = "translateY(11em)";
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
    dropdown.style.height = "16em";
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