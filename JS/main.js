let slideIndex = 1;
const slides = document.querySelectorAll(".comment");
const indicators = document.querySelectorAll(".indicator");

function showSlide(index, type) { // Слайдер
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    // Очистка
    slides.forEach(slide => slide.classList.remove("active"));
    slides.forEach(slide => slide.classList.remove("right"));
    slides.forEach(slide => slide.classList.remove("left"));
    indicators.forEach(indicator => indicator.classList.remove("active"));
    // Добавление активного класса 
    slides[slideIndex].classList.add("active");
    indicators[slideIndex].classList.add("active");
    // Добавление анимации
    console.log(type);
    if (type == 1) 
        slides[slideIndex].classList.add("right");
    else if (type == -1) 
        slides[slideIndex].classList.add("left");
    else 
        slides[slideIndex].classList.add("right");
}

function toSlide(index) { // Переключение слайда
    slideIndex += index;
    showSlide(slideIndex, index);
}

function currentSlide(index) { // Выюор слайда
    slideIndex = index;
    showSlide(slideIndex);
}
showSlide(0); // Инициализация слайдера

// Плавное появление блоков
document.querySelectorAll(".brick").forEach((brick, index) => {
    if (index == 0) 
        brick.style.animationDelay = "0s";
    else if (index == 1) 
        brick.style.animationDelay = "0.3s";
})

// Анимация при прокрутке
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Видно
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll(".animated-el").forEach(item => {
    observer.observe(item);
});

// Обработчик кнопок
function action() {
    alert("Тут могла бы быть ваша ссылка");
}

