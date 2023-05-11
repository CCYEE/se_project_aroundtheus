// import { openModal } from "../utils/utils.js";

// import {
//   previewModal,
//   previewImg,
//   previewTitle,
// } from "../pages/index.js";


export default class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    this._cardElement = document
    .querySelector(this._cardSelector)
    .content.querySelector(".card")
    .cloneNode(true);

    return this._cardElement;
  }

  _setEventListeners() {
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(".card__trash-button");
    this._cardImageEl = this._cardElement.querySelector(".card__image");
    this._cardNameEl = this._cardElement.querySelector(".card__title");
    
    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteButton();
    });

    this._cardImageEl.addEventListener("click", () => {
      this._handleCardClick({link: this._link, name: this._name});
    })
  }

  // HANDLERS
  _handleLikeIcon() {
    this._cardElement
    .querySelector(".card__like-button")
    .classList.toggle("card__like-button_active");
  }
  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }
  // _handleCardClick() {
  //   openModal(previewModal);
  //   previewImg.src = this._link;
  //   previewImg.alt = `Photo of ${this._name}`;
  //   previewTitle.textContent = this._name;
  // }

  getView() {
    this._cardElement = this._getTemplate();
    this._cardImageEl = this._cardElement.querySelector(".card__image");
    this._cardNameEl = this._cardElement.querySelector(".card__title");
    this._setEventListeners();

    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = this._name;
    this._cardnameEl.textContent = this._name;

    return this._cardElement;
  }
}

