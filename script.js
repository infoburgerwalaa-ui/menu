// ===========================
// ORIENTAL FLAME MENU
// ===========================

const images = document.querySelectorAll(".menu-img");

const viewer = document.getElementById("viewer");
const preview = document.getElementById("preview");
const closeBtn = document.getElementById("close");

// Open Image
images.forEach(image => {

    image.addEventListener("click", () => {

        preview.src = image.src;

        viewer.style.display = "flex";

        document.body.style.overflow = "hidden";

    });

});

// Close Function
function closeViewer(){

    viewer.style.display = "none";

    preview.src = "";

    document.body.style.overflow = "auto";

}

// Close Button
closeBtn.addEventListener("click", closeViewer);

// Click Outside Image
viewer.addEventListener("click", (e)=>{

    if(e.target === viewer){

        closeViewer();

    }

});

// ESC Key
document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeViewer();

    }

});

// Prevent Image Drag
images.forEach(img=>{

    img.setAttribute("draggable","false");

});