let number = 1;
let itemCost = 1900;

function updateDisplay() {
    var subtotal = document.getElementById("subtotal");
    var one = document.getElementById("one");

    subtotal.innerText = number * itemCost;
    one.innerText = number;
}

function changeQuantity(amount) {
    number += amount;
    if (number < 1) {
      number = 1;
    }
    updateDisplay();
  }