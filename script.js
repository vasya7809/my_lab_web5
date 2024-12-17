// Зміна кольору фону при кліку на елемент
document.getElementById("catalog").addEventListener("click", function() {
    document.body.style.backgroundColor = "#e8eaf6"; // світло-синій фон
});

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

// Переміщення елемента при натисканні клавіші
document.addEventListener("keydown", function(event) {
    const element = document.getElementById("phones");
    if (event.key === "ArrowRight") {
        element.style.position = "relative";
        element.style.left = "20px"; // переміщення вправо
    }
});
