/* ==========================================
   ORIENTAL FLAME
   Premium Digital Menu
========================================== */

// ===========================
// Progress Bar
// ===========================

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});


// ===========================
// Back To Top
// ===========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===========================
// Full Screen Image Viewer
// ===========================

document.querySelectorAll(".menu-card img").forEach(image => {

    image.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.className = "image-overlay";

        overlay.innerHTML = `

<div class="close-btn">&times;</div>

<img src="${image.src}" alt="Menu">

`;

        document.body.appendChild(overlay);

        document.body.style.overflow = "hidden";

        overlay.addEventListener("click", () => {

            overlay.remove();

            document.body.style.overflow = "auto";

        });

    });

});


// ===========================
// Reveal Animation
// ===========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:.15});

document.querySelectorAll(".menu-card").forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition=".7s";

    observer.observe(card);

});


// ===========================
// Share API
// ===========================

if(navigator.share){

const share=document.createElement("button");

share.innerHTML="📤";

share.className="share-btn";

document.body.appendChild(share);

share.onclick=async()=>{

try{

await navigator.share({

title:"Oriental Flame Menu",

text:"Check out the Official Oriental Flame Menu",

url:window.location.href

});

}catch(e){}

};

}


// ===========================
// WhatsApp Pulse
// ===========================

const whatsapp=document.querySelector(".whatsapp");

if(whatsapp){

setInterval(()=>{

whatsapp.animate([

{transform:"scale(1)"},

{transform:"scale(1.05)"},

{transform:"scale(1)"}

],{

duration:1200,

iterations:1,

easing:"ease-in-out"

});

},3500);

}


// ===========================
// Header Shadow
// ===========================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>20){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

header.style.boxShadow="none";

}

});


// ===========================
// Smooth Menu Loading
// ===========================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});


// ===========================
// Disable Right Click
// (Optional)
// ===========================

// document.addEventListener("contextmenu",e=>e.preventDefault());
