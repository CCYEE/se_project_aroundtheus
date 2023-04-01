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
const editButton = document.querySelector(".profile__edit-button");
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

// Saves
const saveButton = document.querySelector("form__save-button");
const closeEditModalButton = editProfileModal.querySelector(
  ".modal__close-button"
);

// Cards
const cardListEl = document.querySelector(".cards");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

// Functions
function openModal(modal) {
  modal.classList.add("modal_opened");
}
function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function newCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  userAuthor.textContent = modalEditName.value;
  userDescription.textContent = modalEditDescription.value;
  closeModal(editProfileModal);
}

function handleAddCardFormSubmit(event) {
  event.preventDefault();
  const name = modalEditTitle.value;
  const link = modalEditUrl.value;
  newCard({ name, link }, cardListEl);
  closeModal(addCardModal);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardNameEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__trash-button");
  const popupModal = document.querySelector("#modal__popup");
  const popupImg = document.querySelector(".modal__popup_img");
  const popupTitle = document.querySelector(".modal__popup_title");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardNameEl.textContent = cardData.name;

  FIXME: popupImg.addEventListener("click", () => {
    popupImg.src = cardData.link;
    openModal(popupModal);
  });

  return cardElement;
}

// Event Listeners
editProfileModal.addEventListener("submit", handleProfileFormSubmit);
addCardModal.addEventListener("submit", handleAddCardFormSubmit);

editButton.addEventListener("click", () => {
  modalEditName.value = userAuthor.innerText;
  modalEditDescription.value = userDescription.innerText;
  openModal(editProfileModal);
});

closeEditModalButton.addEventListener("click", () => {
  closeModal(editProfileModal);
});

addButton.addEventListener("click", () => {
  openModal(addCardModal);
});
addCardCloseButton.addEventListener("click", () => {
  closeModal(addCardModal);
});

initialCards.forEach((cardData) => {
  newCard(cardData, cardListEl);
});
