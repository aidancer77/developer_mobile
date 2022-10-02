
const slides = [{
    title: "Новички",
    title__color: "#0ED984",
    front__color: "#128F5B",
    background__color: "#0D5E3C",
    online: "#0ED984",
    button__text: "#0ED984"
}, {
    title: "Специалисты",
    title__color: "#3577F6",
    front__color: "#0D41A7",
    background__color: "#173673",
    online: "#3577F6",
    button__text: "#3577F6"
}, {
    title: "Руководители",
    title__color: "#D72DF3",
    front__color: "#9C10B4",
    background__color: "#630773",
    online: "#D72DF3",
    button__text: "#D72DF3"
}]

function initSlider() {
    if (!slides || !slides.length) return;

    let sliderDots = document.querySelector(".slider__dots");
    let sliderTitle = document.querySelector(".slider__titles");
    let frontColor = document.querySelector(".slider__front");
    let backgroundColor = document.querySelector(".background");
    let sliderOnline = document.querySelector(".slider__online");
    let buttonText = document.querySelector(".button__text");

    sliderActive();

    function sliderActive() {
        slides.forEach((slide, index) => {

            let dotsDiv = `<div class="dot__item n${index} ${index === 0 ? "dot__active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dotsDiv;

            sliderDots.querySelectorAll(".dot__item").forEach(dot => {
                dot.addEventListener("click", function () {
                    moveSlider(this.dataset.index);
                })
            })

            let titlesDiv = `<div class="color__basic n${index} ${index === 0 ? "color__active" : ""}" data-index="${index}">${slides[index].title}</div>`;
            sliderTitle.innerHTML += titlesDiv;

            let frontColorDiv = `<div class="front__basic n${index} ${index === 0 ? "front__active" : ""}" data-index="${index}">${slides[index].front__color}</div>`;
            frontColor.innerHTML += frontColorDiv;

            let backgroundDiv = `<div class="background__basic n${index} ${index === 0 ? "background__active" : ""}" data-index="${index}">${slides[index].background__color}</div>`;
            backgroundColor.innerHTML += backgroundDiv;

            let onlineDiv = `<div class="color__basic n${index} ${index === 0 ? "color__active" : ""}" data-index="${index}">${slides[index].slider__online}</div>`;
            online.innerHTML += onlineDiv;

            let buttonTextDiv = `<div class="color__basic n${index} ${index === 0 ? "color__active" : ""}" data-index="${index}">${slides[index].button__text}</div>`;
            buttonText.innerHTML += buttonTextDiv;
        })
    }

    function moveSlider(num) {
        if (options.dots) {
            sliderDots.querySelector(".dot__active").classList.remove("dot__active");
            sliderDots.querySelector(".n" + num).classList.add("dot__active");
        }

        sliderTitle.querySelector(".color__active").classList.remove("color__active");
        sliderTitle.querySelector(".n" + num).classList.add("color__active");

        frontColor.querySelector(".front__active").classList.remove("front__active");
        frontColor.querySelector(".n" + num).classList.add("front__active");

        backgroundColor.querySelector(".background__active").classList.remove("background__active");
        backgroundColor.querySelector(".n" + num).classList.add("background__active");

        sliderOnline.querySelector(".color__active").classList.remove("color__active");
        sliderOnline.querySelector(".n" + num).classList.add("color__active");

        buttonText.querySelector(".color__active").classList.remove("color__active");
        buttonText.querySelector(".n" + num).classList.add("color__active");
    }
}

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});