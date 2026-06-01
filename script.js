// Entry Screen

const entryScreen =
document.getElementById("entry-screen");

const enterBtn =
document.getElementById("enter-btn");

enterBtn.addEventListener("click", () => {

    entryScreen.classList.add("fade-out");

});

// Loading Screen

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 1000);

});

// Scroll Animations

const observer =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section")
.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// Typing Effect

const text =
"Not perfect. Not finished. Just being myself.";

let i = 0;

function typeWriter(){

    const heroText =
    document.querySelector(".hero p");

    if(i < text.length){

        heroText.textContent +=
        text.charAt(i);

        i++;

        setTimeout(typeWriter, 50);

    }

}

window.onload = () => {

    const heroText =
    document.querySelector(".hero p");

    heroText.textContent = "";

    typeWriter();

};

// Navbar Background On Scroll

window.addEventListener("scroll", () => {

    const nav =
    document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.background =
        "rgba(15,23,42,.95)";

    }else{

        nav.style.background =
        "rgba(15,23,42,.7)";

    }

});

// Smooth Reveal

document.querySelectorAll(".card")
.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-8px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0) scale(1)";

    });

});

console.log(
"Welcome to Rosch's Profile"
);
