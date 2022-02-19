const form = document.querySelector(".contact-me__modal-form");
const open_contact = document.querySelector(".about-me__contact-btn");


const modal = document.querySelector(".modal-contact");
const formInput = form.querySelectorAll(".form-inputs");
const modalImage = document.querySelector(".gallery-modal__image");
function contactOpen() {
    modal.style.visibility = "visible";
    modal.style.opacity = 1;
}
function contactClose() {
    modal.style.visibility = "hidden";
    modal.style.opacity = 0;
}
open_contact.addEventListener("click", contactOpen);
window.onclick = function(event) {
    if (event.target == modal) {
        contactClose();
    }
    if (event.target == galleryModal) {
        galClose();
    }
    else{
        for(let i = 0; i < galleryArr.length; i++){
            if(event.target == galleryArr[i]){
               modalImage.src = galleryArr[i].src;
               galOpen(); 
            }
        }
    }
   
}
form.addEventListener("submit", function(event) {
    console.clear();
    event.preventDefault();
    for (let i of formInput) {
        if (i.name == "message") {
            if (!i || i.value.trim().length == 0) {
                i.value = "";
                i.placeholder = `Ошибка!`;
                i.classList.add("placeholder-red");
            }
            else {
                console.log(`${i.name} value = ${i.value}`);
            }
        }
        else {
            if (!i || i.value.trim().length == 0 || i.value[0] == " ") {
                i.value = "";
                i.placeholder = `Ошибка!`;
                i.classList.add("placeholder-red");
            }
            else if (i.value.typeof == "number") {
                i.value = "";
                i.placeholder = `Некорректный ввод`;
                i.classList.add("placeholder-red");
            }
            else {
                console.log(`${i.name} value = ${i.value}`);
            }
        }
    }
});
const gallery_close = document.querySelector(".gallery-close");
const galleryArr = document.querySelectorAll(".gallery__image");
const galleryModal = document.querySelector(".modal-gallery");
console.log(galleryModal); 
function galOpen() {
    galleryModal.style.visibility = "visible";
    galleryModal.style.opacity = 1;
}
function galClose() {
    galleryModal.style.visibility = "hidden";
    galleryModal.style.opacity = 0;
}

gallery_close.onclick = galClose;
