export default class UserInfo {
  constructor({ name, job, avatar }) {
    this.name = document.querySelector(name);
    this.job = document.querySelector(job);
    this._avatar = document.querySelector(avatar);
  }
  getUserInfo() {
    return { name: this.name.textContent, job: this.job.textContent };
  }
  setUserInfo({ title, job }) {
    this.name.textContent = title;
    this.job.textContent = job;
  }
  getAvatarInfo() {
    return {
      avatar: this._avatar.src,
    };
  }
  setAvatarInfo({ name, avatar }) {
    this._avatar.src = avatar;
    this._avatar.alt = name;
  }
}
