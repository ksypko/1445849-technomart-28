var loginLink = document.querySelector(".contacts-button");
var loginPopup = document.querySelector(".popup-login");
var loginClose = document.querySelector(".form-close");
var loginForm = document.querySelector(".popup-form");
var loginLogin = document.querySelector(".form-name");
var loginEmail = document.querySelector(".form-email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}
if (loginLink) { 

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
}
var mapLink = document.querySelector(".map");

  var mapPopup = document.querySelector(".popup-map");
  var mapClose = document.querySelector(".map-close");
  
 if (mapLink) { 
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("popup-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("popup-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("popup-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("popup-show");
      }
    }
  });
}
var cartLink = document.querySelectorAll('.button-buy'),
      result;
var cartPopup = document.querySelector(".popup-cart");
var cartClose = document.querySelector(".cart-close");

if (cartLink) {
for (var i = 0; i < cartLink.length; i++) {
      result = cartLink[i];
      result.addEventListener('click', function(evt) {
      evt.preventDefault();
      cartPopup.classList.add("popup-show");
    });
  }

  cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("popup-show");
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("popup-show");
    }
  }
});
}