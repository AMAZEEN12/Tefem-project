
function faqToggle(element) {
    var questionElement = element.querySelector("img");
var answerElement = element.nextElementSibling;


    if (answerElement.style.display === "none") {
        answerElement.style.display = "block";
        questionElement.src = "icon-minus.svg";
    } else {
        answerElement.style.display = "none";
        questionElement.src = "icon-plus.svg";
    }
}

function menuDisplay() {
    var menu = document.getElementById("nav-bar")
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
    }else if (menu.style.display === "block") {
        menu.style.display = 'none'
    }
}
var menu1 = document.getElementById("menu1");
menu1.addEventListener("click", menuDisplay);
