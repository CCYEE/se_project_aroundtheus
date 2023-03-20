const initialCards = [
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
const userAuthor = document.querySelector(".profile__author");
const userDescription = document.querySelector(".profile__subtitle");
const modal = document.querySelector(".modal");
const editButton = document.querySelector(".profile__edit-button");
const closeModalButton = document.querySelector(".modal__close-button");
const saveButton = document.querySelector("form__save-button");
const modalEditName = document.querySelector(".form__input_type_name");
const modalEditDescription = document.querySelector(
  ".form__input_type_description"
);
const cardListEl = document.querySelector(".cards");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

//Functions
function fillModalForm() {
  modalEditName.value = userAuthor.innerText;
  modalEditDescription.value = userDescription.innerText;
}
function openEditModal() {
  modal.classList.add("modal_opened");
}
function closeModal() {
  modal.classList.remove("modal_opened");
}
function saveModal(event) {
  event.preventDefault();
  userAuthor.textContent = modalEditName.value;
  userDescription.textContent = modalEditDescription.value;
  closeModal();
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardNameEl = cardElement.querySelector(".card__title");
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardNameEl.textContent = data.name;
  return cardElement;
}

//Event Listeners
modal.addEventListener("submit", saveModal);
editButton.addEventListener("click", function () {
  fillModalForm();
  openEditModal();
});
closeModalButton.addEventListener("click", function () {
  closeModal();
});

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardListEl.append(cardElement);
});
