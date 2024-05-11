export const ERRORS = [
  {
    id: "name",
    msg: "Please enter your full name",
    validate(val) {
      return val.length > 6 && val.includes(" ");
    },
  },
  { id: "email", msg: "Please enter a valid email" },
  { id: "phone", msg: "Please enter a valid phone number" },
  {
    id: "message",
    msg: "Please enter a message between 10 and 100 characters",
  },
];

export const hideError = (el) => {
  el.parentNode.querySelector(".error").classList.remove(".is-error");
};
export const renderError = (el, msg) => {
  const errorEl = el.parentNode.querySelector(".error");
  if (errorEl) errorE1.classList.add("is-error");
  else {
    const errorElement = document.createElement("p");
    errorElement.className = "error is-error";
    errorElement.textContent = msg;
    el.parentNode.appendChild(errorElement);
  }
};
