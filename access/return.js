let returnBtn = document.querySelectorAll(".return-product");
let overlayReturn = document.querySelector(".overlay-return");
let imageReturn = document.querySelector(".return-box-img img");
for (let i = 0; i < returnBtn.length; i++) {
  returnBtn[i].addEventListener("click", function () {
    if (returnBtn[i].classList.contains("active")) {
        return; 
      }
    let productImage = returnBtn[i].parentElement.querySelector(".product-img");
    overlayReturn.classList.add("active");
    console.log(productImage, imageReturn);
    imageReturn.src = productImage.src;

    let returnButton = document.querySelector(".returnbutton");
    let notification = document.querySelector(".notification");
    returnButton.addEventListener("click", function () {
      overlayReturn.classList.remove("active");
      notification.classList.add("active");
      setTimeout(() => {
        notification.classList.remove("active");
      }, 2000);
      returnBtn[i].classList.add("active");
    });
  });
}

let cancelBtn = document.querySelector(".returncancel");

cancelBtn.addEventListener("click", function () {
  overlayReturn.classList.remove("active");
});
let differentButton = document.querySelectorAll('input[name="select"]');
let textArea = document.querySelector(".different-text");
for (let i = 0; i < differentButton.length; i++) {
  differentButton[i].addEventListener("change", function () {
    if (this.id === "different-return" && this.checked) {
      textArea.classList.add("active");
    } else {
      textArea.classList.remove("active");
    }
  });
}

// Lấy thời gian hiện tại
var today = new Date();
var day = String(today.getDate()).padStart(2, "0");
var month = String(today.getMonth() + 1).padStart(2, "0"); // Tháng 1 là 0!
var year = today.getFullYear();
var hours = String(today.getHours()).padStart(2, "0");
var minutes = String(today.getMinutes()).padStart(2, "0");

today = year + "-" + month + "-" + day + "T" + hours + ":" + minutes;

// Lấy thời gian sau 7 ngày từ thời gian hiện tại
var maxDate = new Date();
maxDate.setDate(maxDate.getDate() + 7);
var maxDay = String(maxDate.getDate()).padStart(2, "0");
var maxMonth = String(maxDate.getMonth() + 1).padStart(2, "0"); // Tháng 1 là 0!
var maxYear = maxDate.getFullYear();
var maxHours = String(maxDate.getHours()).padStart(2, "0");
var maxMinutes = String(maxDate.getMinutes()).padStart(2, "0");

maxDate =
  maxYear + "-" + maxMonth + "-" + maxDay + "T" + maxHours + ":" + maxMinutes;

// Thiết lập thời gian hiện tại và thời gian tối đa cho thẻ input datetime-local
document.getElementById("time-return").min = today;
document.getElementById("time-return").max = maxDate;
