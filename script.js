// Fade in sections when scrolling

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// Typing effect

const text = "Welcome to my little corner of the internet.";

let i = 0;

function typeWriter() {

    const heroText = document.querySelector(".hero p");

    if (!heroText) return;

    if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Loading screen + typing effect

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 800);

        }, 1200);

    }

    const heroText = document.querySelector(".hero p");

    if (heroText) {
        heroText.textContent = "";
        typeWriter();
    }

});
