import FormValidator from "../components/FormValidator.js";
import Card from "../components/Cards.js";
import { openModal, closeModal, } from "../utils/utils.js";


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

// Variables
const userAuthor = document.querySelector(".profile__author");
const userDescription = document.querySelector(".profile__subtitle");

// Edits
const editProfileModal = document.querySelector("#edit-modal");
const editProfileButton = document.querySelector("#profile-edit-button");
const modalEditName = document.querySelector(".form__input_type_name");
const modalEditDescription = document.querySelector(".form__input_type_description");

//Adds
const addButton = document.querySelector("#profile-add-button");
const addCardModal = document.querySelector("#add-modal");
const addCardCloseButton = addCardModal.querySelector(".modal__close-button");

const modalEditTitle = document.querySelector(".form__input_type_title");
const modalEditUrl = document.querySelector(".form__input_type_url");
const addCardForm = document.querySelector("#add-card-form");

// Saves and Close
const saveButton = document.querySelector("form__save-button");
const closeEditModalButton = editProfileModal.querySelector(".modal__close-button");

// Picture Popup
export const previewModal = document.querySelector("#modal__popup");
export const previewImg = document.querySelector(".modal__popup-img");
export const previewTitle = document.querySelector(".modal__popup-title");
const previewCloseButton = previewModal.querySelector(".modal__close-button");

// Cards
const cardListEl = document.querySelector(".cards");
// const cardTemplate = document.querySelector("#card-template").content.firstElementChild;

// Validation
const config = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__save-button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

const editForm = document.querySelector(".edit-profile-form");
// enableValidation(config)
const editFormValidator = new FormValidator(config, editForm);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(config, addCardForm);
addFormValidator.enableValidation();

// Event Listener
previewCloseButton.addEventListener("click", () =>
  closeModal(previewModal)
);

//Edit Modal
closeEditModalButton.addEventListener("click", () => closeModal(editProfileModal));

editProfileButton.addEventListener("click", function () {
  modalEditName.value = userAuthor.textContent;
  modalEditDescription.value = userDescription.textContent;
  openModal(editProfileModal);
});
editProfileModal.addEventListener("submit", (event) => {
  event.preventDefault();
  userDescription.textContent = modalEditDescription.value;
  userAuthor.textContent = modalEditName.value;
  closeModal(editProfileModal);
  editFormValidator.toggleButtonState();
});


//Add Modal
addCardCloseButton.addEventListener("click", () => closeModal(addCardModal));
addButton.addEventListener("click", function () {
  openModal(addCardModal);
});

addCardModal.addEventListener("submit", (event) => {
  event.preventDefault();
  const cardData = {
    name: modalEditTitle.value,
    link: modalEditUrl.value,
  };

  renderCard(cardData, cardListEl);
  closeModal(addCardModal);
  addCardForm.reset();
  addFormValidator.toggleButtonState();
});


//Array Data
const renderCard = (data, cardListEl) => {
  const card = new Card(data, "#card-template");
  cardListEl.prepend(card.getView());
};

initialCards.forEach((cardData) => {
  renderCard(cardData, cardListEl);
});












// //OPEN and CLOSE modals
// function openModal(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keydown", closeModalEsc);
// }
// function closeModal(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keydown", closeModalEsc);
// }
// function closeModalEsc(evt) {
//   if (evt.key === "Escape") {
//     const openedModal = document.querySelector(".modal_opened");
//     closeModal(openedModal);
//   }
// }
// function closeModalClick(modal, evt) {
//   if (evt.target === modal) {
//     closeModal(modal);
//   }
// }
// editProfileModal.addEventListener("click", (evt) =>
//   closeModalClick(editProfileModal, evt)
// );
// addCardModal.addEventListener("click", (evt) =>
//  closeModalClick(addCardModal, evt)
// );
// previewModal.addEventListener("click", (evt) =>
// closeModalClick(previewModal, evt)
// );

// // Functions
// function renderCard(cardData, cardListEl) {
//   const card = new Card (cardData, "#card-template");
//   cardListEl.prepend(card.getView);
// }

// function handleProfileFormSubmit(event) {
//   event.preventDefault();
//   userAuthor.textContent = modalEditName.value;
//   userDescription.textContent = modalEditDescription.value;
//   closeModal(editProfileModal);
// }
// function handleAddCardFormSubmit(event) {
//   event.preventDefault();
//   const name = modalEditTitle.value;
//   const link = modalEditUrl.value;
//   renderCard({ name, link }, cardListEl);
//   event.target.reset();

//   toggleButtonState(
//     Array.from(addCardForm.querySelectorAll(config.inputSelector)),
//     addCardForm.querySelector(config.submitButtonSelector),
//     config
//   );

//   closeModal(addCardModal);
// }
// function getCardElement(cardData) {
//   const cardElement = cardTemplate.cloneNode(true);
//   const cardImageEl = cardElement.querySelector(".card__image");
//   const cardNameEl = cardElement.querySelector(".card__title");
//   const likeButton = cardElement.querySelector(".card__like-button");
//   const deleteButton = cardElement.querySelector(".card__trash-button");

//   likeButton.addEventListener("click", () => {
//     likeButton.classList.toggle("card__like-button_active");
//   });

//   deleteButton.addEventListener("click", () => {
//     cardElement.remove();
//   });
//   cardImageEl.src = cardData.link;
//   cardImageEl.alt = cardData.name;
//   cardNameEl.textContent = cardData.name;

//   cardImageEl.addEventListener("click", () => {
//     openModal(previewModal);
//     previewImg.src = cardData.link;
//     previewImg.alt = cardData.name;
//     previewTitle.textContent = cardData.name;
//   });

//   return cardElement;
// }

// // Event Listeners

// editProfileModal.addEventListener("submit", handleProfileFormSubmit);
// addCardModal.addEventListener("submit", handleAddCardFormSubmit);

// editProfileButton.addEventListener("click", () => {
//   modalEditName.value = userAuthor.innerText;
//   modalEditDescription.value = userDescription.innerText;
//   openModal(editProfileModal);
// });

// closeEditModalButton.addEventListener("click", () => {
//   closeModal(editProfileModal);
// });

// addButton.addEventListener("click", () => {
//   openModal(addCardModal);
// });
// addCardCloseButton.addEventListener("click", () => {
//   closeModal(addCardModal);
// });

// initialCards.forEach((cardData) => {
//   renderCard(cardData, cardListEl);
// });

// previewCloseButton.addEventListener("click", () => {
//   closeModal(previewModal);
// });
