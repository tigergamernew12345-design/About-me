// Fade in sections when scrolling

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// Typing effect

const text =
"Welcome to my little corner of the internet.";

let i = 0;

function typeWriter() {

    if(i < text.length){

        document.querySelector(".hero p").textContent += text.charAt(i);

        i++;

        setTimeout(typeWriter, 50);

    }

}

window.onload = () => {

    document.querySelector(".hero p").textContent = "";

    typeWriter();

};
