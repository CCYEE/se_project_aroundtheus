import { openModal } from "../utils/utils";

import {
  previewModal,
  previewImg,
  previewTitle,
} from "../pages/index.js";

export default class Card {
  constructor({name, link}, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    this._cardElement
    .querySelector(".card__like-button")
    .addEventListener("click", () => {
      this.handleLikeButton();
    });
    this._cardElement
    .querySelector(".card__trash-button")
    .addEventListener("click", () => {
      this.handleDeleteButton();
    });
    this._cardElement
    .querySelector(".card__image")
    .addEventListener("click", () => {
      this._handleCardClick();
    });
  }

  _handleLikeButton() {
    this._cardElement
    .querySelector(".card__like-button")
    .classList.toggle(".card__like-button_active");
  }
  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }
  _handleCardClick() {
    previewImg.src = this._link;
    previewImage.alt = this._name;
    previewTitle.textContent = this._name;
    openModal(previewModal);
  }

  _getTemplate() {
    return document
    .querySelector(this._cardSelector)
    .content.querySelector(".card")
    .cloneNode(true);
  }

  getView() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(".card__image").alt = this._name;
    this._cardElement.querySelector(".card__title").textContent = this._name;
    return this._cardElement;
  }


}
