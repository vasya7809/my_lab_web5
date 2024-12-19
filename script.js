
// Додавання анімації до зображень при наведенні
const images = document.querySelectorAll("img");
images.forEach(image => {
    image.addEventListener("mouseover", function() {
        image.style.transform = "scale(1.1)"; // збільшення зображення
        image.style.transition = "transform 0.3s ease"; // анімація
    });
    image.addEventListener("mouseout", function() {
        image.style.transform = "scale(1)"; // повернення до нормального розміру
    });
});

