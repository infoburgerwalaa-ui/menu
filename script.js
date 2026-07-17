/* ===========================
   ORIENTAL FLAME MENU
=========================== */

const viewer = document.getElementById("viewer");
const viewerImage = document.getElementById("viewerImage");
const closeBtn = document.getElementById("close");

const menuImages = document.querySelectorAll(".menu-image");

/* Open Full Screen */

menuImages.forEach((image)=>{

image.addEventListener("click",function(){

viewer.style.display="flex";

viewerImage.src=this.src;

document.body.style.overflow="hidden";

});

});

/* Close */

function closeViewer(){

viewer.style.display="none";

viewerImage.removeAttribute("src");

document.body.style.overflow="auto";

}

/* Close Button */

closeBtn.addEventListener("click",closeViewer);

/* Background Click */

viewer.addEventListener("click",function(e){

if(e.target===viewer){

closeViewer();

}

});

/* ESC Key */

document.addEventListener("keydown",function(e){

if(e.key==="Escape"){

closeViewer();

}

});

/* Disable Drag */

menuImages.forEach((image)=>{

image.setAttribute("draggable","false");

});

/* Disable Right Click */

menuImages.forEach((image)=>{

image.addEventListener("contextmenu",function(e){

e.preventDefault();

});

});
