/* ==========================
   ORIENTAL FLAME MENU
========================== */

const viewer = document.getElementById("viewer");
const viewerImage = document.getElementById("viewerImage");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".menu-image").forEach((img) => {

    img.addEventListener("click", () => {

        viewer.style.display = "flex";

        viewerImage.src = img.src;

        document.body.style.overflow = "hidden";

    });

});

function closeViewer(){

    viewer.style.display = "none";

    viewerImage.src = "";

    document.body.style.overflow = "auto";

}

closeBtn.addEventListener("click", closeViewer);

viewer.addEventListener("click",(e)=>{

    if(e.target===viewer){

        closeViewer();

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeViewer();

    }

});


/* Prevent image dragging */

document.querySelectorAll(".menu-image").forEach((img)=>{

    img.setAttribute("draggable","false");

});


/* Smooth page loading */

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});
