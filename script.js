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

        setTimeout(typeWriter, 45);

    }

}

window.onload = () => {

    const heroText =
    document.querySelector(".hero p");

    heroText.textContent = "";

    typeWriter();

};

// Scroll Reveal Animation

const observer =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll("section")
.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// Smooth Navbar Effect

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(15,23,42,.85)";

        navbar.style.backdropFilter =
        "blur(30px)";

    }

    else{

        navbar.style.background =
        "rgba(255,255,255,.06)";

    }

});

// Card Hover Glow

document.querySelectorAll(".card")
.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
        "0 0 25px rgba(139,92,246,.35)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow =
        "none";

    });

});

// Profile Picture Glow

const profilePic =
document.querySelector(".profile-pic");

if(profilePic){

    profilePic.addEventListener("mouseenter", () => {

        profilePic.style.boxShadow =
        "0 0 35px rgba(139,92,246,.6), 0 0 80px rgba(139,92,246,.25)";

    });

    profilePic.addEventListener("mouseleave", () => {

        profilePic.style.boxShadow =
        "0 0 25px rgba(139,92,246,.4), 0 0 60px rgba(139,92,246,.15)";

    });

}

// Smooth Scroll For Navbar Links

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior:"smooth"
        });

    });

});

console.log(
    "Rosch Gomes Profile Loaded Successfully"
);
