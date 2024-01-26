window.addEventListener('load', function () {
    var menu1 = document.getElementById("menu1");
    menu1.addEventListener("click", menuDisplay);
});

function menuDisplay() {
    var menu = document.getElementById("nav-bar");
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
    } else if (menu.style.display === "block") {
        menu.style.display = 'none'
    }
}
