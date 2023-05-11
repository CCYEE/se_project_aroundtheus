import "../pages/index.css";
// import logo from "../images/logo.svg";
// import avatar from "../images/profile-pic.png";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

// logoImg.src = logo;
// avatarImg.src = avatar;

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

// User Info
const logoImg = document.querySelector(".header__logo");
const avatarImg = document.querySelector(".profile__picture");
const userAuthor = document.querySelector(".profile__author");
const userDescription = document.querySelector(".profile__subtitle");


// Edits
const editProfileModal = document.querySelector("#edit-modal");
const editForm = editProfileModal.querySelector("#edit-profile-form");
const editProfileButton = document.querySelector(".profile__edit-button");
const modalEditName = document.querySelector(".form__input_type_name");
const modalEditDescription = document.querySelector(
  ".form__input_type_description"
);

//Adds
const addButton = document.querySelector(".profile__add-button");
const addCardModal = document.querySelector("#add-modal");
const addCardCloseButton = addCardModal.querySelector(".modal__close-button");
const modalEditTitle = document.querySelector(".form__input_type_title");
const modalEditUrl = document.querySelector(".form__input_type_url");
const addCardForm = addCardModal.querySelector("#add-card-form");

// Saves
const saveButton = document.querySelector("form__save-button");
const closeEditModalButton = editProfileModal.querySelector(
  ".modal__close-button"
);

// Picture Popup
export const previewModal = document.querySelector("#modal__popup");
export const previewImg = document.querySelector(".modal__popup-img");
export const previewTitle = document.querySelector(".modal__popup-title");
const previewCloseButton = previewModal.querySelector(".modal__close-button");

//Validation
const config = {
  formSelector: ".modal__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__save-button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

// Selectors
const selectors = {
  cardSection: ".cards",
  cardTemplate: "#card-template",
  previewPopup: "#modal__popup"
}
const userInfoSelectors = {
  userNameSelector: ".profile__title",
  userDescSelector: ".profile__subtitle"
};

// Cards
const cardListEl = document.querySelector(".cards");


// Handle Form Submit
function handleEditFormSubmit(data) {
  profileUserInput.setUserInfo(data.name, data.description);
  profileFormPopup.close();
};
function handleAddCardFormSubmit(data) {
  const cardTitle = data.title;
  const urlLink = data.url;
  createNewCard({name: cardTitle, link: urlLink}); /*FIXME: name and link?*/
  placeFormPopup.close();
};

// Create New Card
function createNewCard(data) {
  return cardSection.renderer(data);
};

editProfileButton.addEventListener("click", () => {
  profileFormPopup.open();
  editFormValidator.toggleButtonState();
  const userData = profileUserInput.getUserInfo();
  modalEditName.value = userData.name;
  modalEditDescription.value = userData.description;
});

addButton.addEventListener("click", () => {
  placeFormPopup.open();
  addFormValidator.toggleButtonState();
});

const profileUserInput = new UserInfo(userInfoSelectors.userNameSelector, userInfoSelectors.userDescSelector);

// Add form modal
const placeFormPopup = new PopupWithForm(
  {popupSelector: addCardModal},
  handleAddCardFormSubmit
);
// Edit form modal
const profileFormPopup = new PopupWithForm(
  {popupSelector: editProfileModal},
  handleEditFormSubmit
);
// Preview modal
const cardPopupPrev = new PopupWithImage(
  {popupSelector: previewModal}
);


function createCard(data) {
  const cardEl = new Card(
    {data, 
      handleCardClick: (imageData) => {
        cardPopupPrev.open(imageData);
      },
    },
    selectors.cardTemplate)
    .getView();
  return cardEl;
}

const cardSection = new Section(
  {renderer: (data) => {
    const cardEl = createCard(data)
    cardSection.additem(cardEl);
  },
  containerSelector: selectors.cardSection
});

cardSection.renderItems(initialCards);
cardPopupPrev.setEventListeners();
placeFormPopup.setEventListeners();
profileFormPopup.setEventListeners();

// Enable Validation
const editFormValidator = new FormValidator(config, editForm);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(config, addCardForm);
addFormValidator.enableValidation();




// editProfileButton.addEventListener("click", () => {
//   modalEditName.value = userAuthor.innerText;
//   modalEditDescription.value = userDescription.innerText;
//   openModal(editProfileModal);
// });


// // Functions
// function renderCard(cardData, wrapper) {
//   const card = new Card(cardData, "#card-template").getView();
//   wrapper.prepend(card);
// }

// // Event Listeners
// editProfileModal.addEventListener("submit", handleProfileFormSubmit);
// addCardModal.addEventListener("submit", handleAddCardFormSubmit);

// // Button Open/Close

// closeEditModalButton.addEventListener("click", () => {
//   closeModal(editProfileModal);
// });
// addButton.addEventListener("click", () => {
//   openModal(addCardModal);
// });
// addCardCloseButton.addEventListener("click", () => {
//   closeModal(addCardModal);
// });
// previewCloseButton.addEventListener("click", () => {
//   closeModal(previewModal);
// });

// initialCards.forEach((cardData) => {
//   renderCard(cardData, cardListEl);
// });
