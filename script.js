let slides = document.querySelectorAll(".slide");
let textos = document.querySelectorAll(".texto-slide");

let index = 0;

setInterval(() => {

    slides[index].classList.remove("active");
    if(textos[index]) textos[index].classList.remove("active");

    index++;
    if(index >= slides.length) index = 0;

    slides[index].classList.add("active");
    if(textos[index]) textos[index].classList.add("active");

}, 4000);