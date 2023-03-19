let initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

//Variables
let userAuthor = document.querySelector(".profile__author");
let userDescription = document.querySelector(".profile__subtitle");
const modal = document.querySelector(".modal");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".modal__close-button");
const saveButton = document.querySelector("form__save-button");
let modalEditName = document.querySelector(".form__input_type_name");
let modalEditDescription = document.querySelector(
  ".form__input_type_description"
);

//Functions
function openModal() {
  modalEditName.value = userAuthor.innerText;
  modalEditDescription.value = userDescription.innerText;
}
function editModal() {
  modal.classList.add("modal_opened");
}
function closeModal() {
  modal.classList.remove("modal_opened");
}
function saveModal(event) {
  event.preventDefault();
  userAuthor.textContent = modalEditName.value;
  userDescription.textContent = modalEditDescription.value;
  modal.classList.remove("modal_opened");
}

//Event Listeners
modal.addEventListener("submit", saveModal);
editButton.addEventListener("click", function () {
  openModal();
  editModal();
});
closeButton.addEventListener("click", function () {
  closeModal();
});
