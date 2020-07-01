var loginLink = document.querySelector(".contacts-button");
var loginPopup = document.querySelector(".popup-login");
var loginClose = loginPopup.querySelector(".form-close");
var loginForm = loginPopup.querySelector(".popup-form");
var loginLogin = loginPopup.querySelector(".form-name");
var loginEmail = loginPopup.querySelector(".form-email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("popup-show");
  
  if (storage) {
    loginLogin.value = storage;
    loginEmail.focus();
  } else {
    loginLogin.focus();
  }
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("popup-show");
  loginPopup.classList.remove("popup-error");
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginEmail.value) {
    evt.preventDefault();
    loginPopup.classList.remove("popup-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("popup-show");
      loginPopup.classList.remove("popup-error");
    }
  }
});