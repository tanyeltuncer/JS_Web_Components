'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

for(let i = 0; i < btnsOpenModal.length; i++) {

    //Opening Modal
    const openModal = function() {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    };

    btnsOpenModal[i].addEventListener("click", openModal);

    //Closing Modals
    const closeModal = function() {
        modal.classList.add("hidden");
        overlay.classList.add("hidden")
    };

    //Closing by using X-Button
    btnCloseModal.addEventListener("click", closeModal);
    //Closing by clicking out of the Modal
    overlay.addEventListener("click", closeModal);
    //Closing by using the Keyboard shortcut ESC
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            if (!modal.classList.contains("hidden")) {
                closeModal();
            };
        };
    });


};


