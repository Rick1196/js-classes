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
  });
  const inputPass = createElement({
    tag: "input",
    name: ["pass"],
    id: ["pass"],
  });
  const inputConfirmPass = createElement({
    tag: "input",
    name: ["Confirmpass"],
    id: ["Confirmpass"],
  });
  const submitButton = createElement({
    tag: "button",
    name: ["submitButton"],
    id: ["submitButton"],
    innerText: ['Enviar', 'innerText'],
    type: ['submit'],
  });

  form.appendChild(inputUser);
  form.appendChild(inputPass);
  form.appendChild(inputConfirmPass);
  form.appendChild(submitButton);
  root.appendChild(form);
};

const handleSubmit = (e) =>{
  e.preventDefault();
  const values = getFormData(e.target.children);
  console.log(e, values);
}

export const main = (root) => {
  const signUpContainer = createElement({
    tag: "div",
    name: ["signUpConatiner"],
    id: ["signUpConatiner"],
  });
  buildSignUp(signUpContainer);
  root.appendChild(signUpContainer);
  addEventListener('submit', handleSubmit)
};

