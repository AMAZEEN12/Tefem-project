function formValidity(){
    var nameElement = document.getElementById("name").value;
    var emailElement = document.getElementById("email").value;
    var phoneElement = document.getElementById("phone").value;

    var span1 = document.getElementById("span1");
    var span2 = document.getElementById("span2");
    var span3 = document.getElementById("span3");

    var  isValid = true;

    if (nameElement === '') {
        span1.textContent = "This field is required";
        document.getElementById("name").style.border = "1px solid hsl(0, 100%, 67%)";
        document.getElementById("name").style.color = "hsl(0, 100%, 67%)";
        isValid = false
    }

    
    if (emailElement === '' || !emailElement.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        span2.textContent = "Valid email is required";
        document.getElementById("email").style.border = "1px solid hsl(0, 100%, 67%)";
        document.getElementById("email").style.color = "hsl(0, 100%, 67%)";
        isValid = false
    }

    
    if (phoneElement === '' || phoneElement < 11) {
        span3.textContent = "This field is required";
        document.getElementById("phone").style.border = "1px solid hsl(0, 100%, 67%)";
        document.getElementById("phone").style.color = "hsl(0, 100%, 67%)";
        isValid = false
    }
    if (!isValid) {
        return
    }
    if (isValid) {
        window.location.href = "home.html"
    }
}

var buttonElement = document.getElementById("button");

buttonElement.addEventListener("click", formValidity);


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


