'use strict'

// ======ADD EVENT LISTENER ON MULTIPLE ELEMENTS==========

const addEventOnListeners = function (elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListeners(eventType, callback);
    }
}


// ==============NAVBAR TOOGLER FOR MOBILE===================

const navbar = document.querySelector("[data-navbar]")
const navTooglers = document.querySelectorAll("[data-nav-toogler]")
const overlay = document.querySelector("[data-overlay]")

const toogleNavbar = function() {
    navbar.classList.toogle("active");
    overlay.classList.toogle("active");
    document.body.classList.toogle("nav-active");
}

addEventOnListeners(navTooglers, "click", toogleNavbar)


// ============HEADER ACTIVE WHEN SCROLLDOWN================

const header = document.querySelector("[data-header]")
window.addEventListener("scroll", function () {
    if(window.scrollY > 100) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }
})

