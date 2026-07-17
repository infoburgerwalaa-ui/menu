/* ==========================
   ORIENTAL FLAME MENU
========================== */

const viewer = document.getElementById("viewer");
const viewerImage = document.getElementById("viewerImage");
const closeBtn = document.getElementById("close");

/* Open Image */

document.querySelectorAll(".menu-image").forEach(img=>{

img.addEventListener("click",()=>{

viewer.style.display="flex";

viewerImage.src=img.src;

document.body.style.overflow="hidden";

});

});

/* Close */

function closeViewer(){

viewer.style.display="none";

viewerImage.src="";

document.body.style.overflow="auto";

}

closeBtn.onclick=closeViewer;

/* Close on Background */

viewer.onclick=function(e){

if(e.target===viewer){

closeViewer();

}

}

/* ESC */

document.addEventListener("keydown",function(e){

if(e.key==="Escape"){

closeViewer();

}

});

/* Disable Image Drag */

document.querySelectorAll(".menu-image").forEach(img=>{

img.draggable=false;

});

/* Disable Right Click on Images */

document.querySelectorAll(".menu-image").forEach(img=>{

img.addEventListener("contextmenu",e=>{

e.preventDefault();

});

});
