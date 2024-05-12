import validator from "validator";

export const ERRORS = [
  {
    id: "name",
    msg: "Please enter your full name",
    validate(val) {
      return val.length > 6 && val.includes(" ");
    },
  },
  {
    id: "email",
    msg: "Please enter a valid email",
    validate(val) {
      return validator.isEmail(val);
    },
  },
  {
    id: "phone",
    msg: "Please enter a valid phone number",
    validate(val) {
      return validator.isMobilePhone(val, "any", { strictMode: false });
    },
  },
  {
    id: "message",
    msg: "Please enter a message between 10 and 100 characters",
    validate(val) {
      return val.length > 10 && val.length < 100 && val.includes(" ");
    },
  },
];

export const hideError = (el) => {
  el.parentNode.querySelector(".error").classList.remove("is-error");
};

export const renderError = (el, msg) => {
  const elParent = el.parentNode;
  const errorEl = elParent.querySelector(".error");
  if (errorEl) errorEl.classList.add("is-error");
  else {
    const errorElement = document.createElement("p");
    errorElement.className = "error is-error";
    errorElement.textContent = msg;
    elParent.appendChild(errorElement);
  }
};
