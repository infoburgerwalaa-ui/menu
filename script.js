// ==============================
// ORIENTAL FLAME MENU VIEWER
// ==============================

const viewer = document.getElementById("viewer");
const preview = document.getElementById("preview");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".menu-card img").forEach(img => {

    img.addEventListener("click", () => {

        preview.src = img.src;
        viewer.style.display = "flex";
        document.body.style.overflow = "hidden";

    });

});

function closeViewer() {

    viewer.style.display = "none";
    preview.src = "";
    document.body.style.overflow = "auto";

}

closeBtn.addEventListener("click", closeViewer);

viewer.addEventListener("click", (e) => {

    if (e.target === viewer) {

        closeViewer();

    }

});

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closeViewer();

    }

});
