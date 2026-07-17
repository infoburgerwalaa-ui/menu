/* ==========================================
   ORIENTAL FLAME PREMIUM MENU
========================================== */

// Progress Bar
const progress = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressWidth =
        (window.pageYOffset / total) * 100;

    progress.style.width = progressWidth + "%";

});

// ============================
// Back To Top Button
// ============================

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

// ============================
// Premium Image Viewer
// ============================

document.querySelectorAll(".menu-card img").forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.className = "image-overlay";

        overlay.innerHTML = `

<div class="close-btn">&times;</div>

<img src="${img.src}" alt="Oriental Flame Menu">

`;

        document.body.appendChild(overlay);

        document.body.style.overflow = "hidden";

        overlay.addEventListener("click", () => {

            overlay.remove();

            document.body.style.overflow = "auto";

        });

    });

});

// ============================
// Reveal Animation
// ============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".menu-card").forEach(card => {

    observer.observe(card);

});

// ============================
// Share Menu
// ============================

async function shareMenu() {

    if (!navigator.share) return;

    try {

        await navigator.share({

            title: "Oriental Flame Menu",

            text: "Check out the Official Oriental Flame Menu",

            url: window.location.href

        });

    } catch (err) {

        console.log(err);

    }

}

const share = document.createElement("button");

share.className = "share-btn";

share.innerHTML = "Share Menu";

share.onclick = shareMenu;

document.body.appendChild(share);

// ============================
// WhatsApp Pulse Animation
// ============================

const whatsappBtn = document.querySelector(".whatsapp");

if (whatsappBtn) {

    setInterval(() => {

        whatsappBtn.animate(

            [

                {
                    transform: "scale(1)"
                },

                {
                    transform: "scale(1.08)"
                },

                {
                    transform: "scale(1)"
                }

            ],

            {

                duration: 1400,
                easing: "ease-in-out"

            }

        );

    }, 2800);

}

// ============================
// Lazy Loading Fade Effect
// ============================

document.querySelectorAll("img").forEach(img => {

    img.onload = () => {

        img.style.opacity = "1";

    };

});

// ============================
// Disable Right Click on Images
// ============================

document.querySelectorAll(".menu-card img").forEach(img => {

    img.addEventListener("contextmenu", (e) => {

        e.preventDefault();

    });

});

// ============================
// Keyboard Support
// ============================

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        const overlay = document.querySelector(".image-overlay");

        if (overlay) {

            overlay.remove();

            document.body.style.overflow = "auto";

        }

    }

});
