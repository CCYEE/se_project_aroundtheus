export default class UserInfo {
  constructor(userNameSelector, userDescription) {
    this._profileName = document.querySelector(userNameSelector);
    this._profileDescription = document.querySelector(userDescription);
  }

  getUserInfo() {
    const userData = {};
    userData.name = this._profileName.textContent;
    userData.description = this._profileDescription.textContent;
    return userData;
  }

  setUserInfo(name,description) {
    this._profileName.textContent = name;
    this._profileDescription.textContent = description;
  }
}