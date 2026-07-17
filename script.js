/* ===================================
   ORIENTAL FLAME MENU
=================================== */

const viewer = document.getElementById("viewer");
const popupImage = document.getElementById("popupImage");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".menu-card img").forEach(img => {

    img.addEventListener("click", () => {

        popupImage.src = img.src;

        viewer.style.display = "flex";

        document.body.style.overflow = "hidden";

    });

});

closeBtn.addEventListener("click", closeViewer);

viewer.addEventListener("click", function(e){

    if(e.target === viewer){

        closeViewer();

    }

});

function closeViewer(){

    viewer.style.display = "none";

    popupImage.src = "";

    document.body.style.overflow = "auto";

}

/* ESC Key */

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        closeViewer();

    }

});

/* Smooth WhatsApp Pulse */

const whatsapp = document.querySelector(".whatsapp");

setInterval(()=>{

    whatsapp.animate(

    [

        {transform:"scale(1)"},

        {transform:"scale(1.05)"},

        {transform:"scale(1)"}

    ],

    {

        duration:1200,

        easing:"ease-in-out"

    });

},3500);
