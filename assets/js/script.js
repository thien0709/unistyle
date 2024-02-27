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

// modal eventListener
modalCloseOverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);

window.onload = function () {
  var anchors = document.getElementsByTagName("a");
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function (event) {
      event.preventDefault();
    });
  }
};

const order = document.querySelectorAll(".showcase-title");
const modalOrder = document.querySelector(".modal");
const nameProduct = document.querySelector(".newsletter-title");

for (let i = 0; i < order.length; i++) {
  order[i].addEventListener("click", function () {
    modalOrder.style.opacity = "1";
    modalOrder.style.visibility = "visible";
    modalOrder.style.pointerEvents = "all";
    nameProduct.innerText = order[i].textContent;
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
