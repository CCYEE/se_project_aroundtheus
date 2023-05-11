import Popup from "./Popup.js";

export default class PopupWithimage extends Popup {
  constructor({popupSelector}) {
    super({popupSelector});
    this._image = this.popupElement.querySelector(".modal__popup-img");
    this._title = this.popupElement.querySelector(".modal__popup-title");
  }

  open(data) {
    this._image.src = data.link;
    this._image.alt = data.name;
    this._title.textContent = data.name;
    super.open();
  }
}