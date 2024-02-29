"use strict";

// modal variables
const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

// modal function
const modalCloseFunc = function () {

  modalOrder.style.opacity = "0";
  modalOrder.style.visibility = "hidden";
  modalOrder.style.pointerEvents = "none";
  document.querySelectorAll('.truck-button').forEach(button => {
    let box = button.querySelector('.box'),
    truck = button.querySelector('.truck');
    button.classList.remove('animation', 'done');
    gsap.set(truck, {
        x: 4
    });
    gsap.set(button, {
        '--progress': 0,
        '--hx': 0,
        '--bx': 0,
        '--box-s': .5,
        '--box-o': 0,
        '--truck-y': 0,
        '--truck-y-n': -26
    });
    gsap.set(box, {
        x: -24,
        y: -6
    });
  });
};
modalCloseOverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);

// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');
const modalNotification = document.querySelector(".modal-notification");
const toastBtn = document.querySelector(".toast-btn");
// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
  modalNotification.classList.add("closed");
});
// toastBtn.addEventListener('click', function(){
//   notificationToast.classList.add('closed');
//   modalNotification.classList.add("closed");
// });

window.onload = function () {
  var anchors = document.getElementsByTagName("a");
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function (event) {
      event.preventDefault();
    });
  }
};
//Tittle
const order = document.querySelectorAll(".showcase-title");
const modalOrder = document.querySelector(".modal");
const nameProduct = document.querySelector(".newsletter-title");
const imageOrder = document.querySelector(".newsletter-img img");

for (let i = 0; i < order.length; i++) {
  order[i].addEventListener("click", function () {
    const imageProduct = order[i].parentNode.parentNode.parentNode.querySelector('.showcase-img');
    modalOrder.style.opacity = "1";
    modalOrder.style.visibility = "visible";
    modalOrder.style.pointerEvents = "all";
    nameProduct.innerText = order[i].textContent;
    imageOrder.src=imageProduct.src;
  });
}

const order1 = document.querySelectorAll(".showcase-title1");
for (let i = 0; i < order1.length; i++) {
  order1[i].addEventListener("click", function () {
    const imageProduct1 =this.parentNode.parentNode.previousElementSibling.querySelector('.product-img.default');
    console.log(imageProduct1.src);
    modalOrder.style.opacity = "1";
    modalOrder.style.visibility = "visible";
    modalOrder.style.pointerEvents = "all";
    nameProduct.innerText = order1[i].textContent;
    imageOrder.src=imageProduct1.src;
  });
}





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll(
  "[data-mobile-menu-open-btn]"
);
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll(
  "[data-mobile-menu-close-btn]"
);
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove("active");
    overlay.classList.remove("active");
  };

  mobileMenuOpenBtn[i].addEventListener("click", function () {
    mobileMenu[i].classList.add("active");
    overlay.classList.add("active");
  });

  mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
  overlay.addEventListener("click", mobileMenuCloseFunc);
}

// accordion variables
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    const clickedBtn = this.nextElementSibling.classList.contains("active");

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;

      if (accordion[i].classList.contains("active")) {
        accordion[i].classList.remove("active");
        accordionBtn[i].classList.remove("active");
      }
    }

    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");
  });
}
