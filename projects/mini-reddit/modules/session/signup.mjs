import { createElement, getFormData } from "../../utilities.mjs";
const buildSignUp = (root) => {
  const form = createElement({
    tag: "form",
    name: ["signUpForm"],
    id: ["signUpForm"],
  });
  const inputUser = createElement({
    tag: "input",
    name: ["user"],
    id: ["user"],
    placeholder: ["User"],
  });
  const inputPass = createElement({
    tag: "input",
    name: ["pass"],
    id: ["pass"],
    placeholder: ["password"],
  });
  const inputConfirmPass = createElement({
    tag: "input",
    name: ["Confirmpass"],
    id: ["Confirmpass"],
    placeholder: ["Confirm password"],
  });
  const submitButton = createElement({
    tag: "button",
    name: ["submitButton"],
    id: ["submitButton"],
    innerText: ["Enviar", "innerText"],
    type: ["submit"],
  });

  form.appendChild(inputUser);
  form.appendChild(inputPass);
  form.appendChild(inputConfirmPass);
  form.appendChild(submitButton);
  root.appendChild(form);
};
// [{
//   "id": 'asd',
//   "value": 'string'
// }]
const validateForm = (formValues) => {
  let hasError = false;
  for (const value of formValues) {
    if (
      value.value === undefined ||
      value.value === null ||
      value.value === ""
    ) {
      console.trace();
      console.log("error", value.id, document.getElementById(value.id));
      document.getElementById(value.id).style.border = "solid red";
      hasError = true;
    } else {
      document.getElementById(value.id).style.border = "solid 1px gray";
    }
  }
  if (formValues[1].value !== formValues[2].value) {
    alert("passwords not match");
    hasError = true;
  }
  return hasError;
};

const validateUser = (user) => {
  const saveduser = window.sessionStorage.getItem(user);
  return !!saveduser;
};

const handleSubmit = (e, callback) => {
  e.preventDefault();
  const values = getFormData(e.target.children);
  const hasError = validateForm(values);
  if (hasError === false) {
    if (validateUser(values[0].value)) {
      alert("User exists");
    } else {
      window.sessionStorage.setItem(values[0].value, JSON.stringify(values));
      callback();
      alert("Welcome");
    }
  }
  console.log(e, values);
};

export const main = (root, callback) => {
  const titleForm = createElement({
    tag: "h3",
    innerText: ["Sign up", "innerText"],
  });
  const signUpContainer = createElement({
    tag: "div",
    name: ["signUpConatiner"],
    id: ["signUpConatiner"],
  });
  buildSignUp(signUpContainer);
  root.appendChild(titleForm);
  root.appendChild(signUpContainer);
  addEventListener("submit", (e) => handleSubmit(e, callback));
};
