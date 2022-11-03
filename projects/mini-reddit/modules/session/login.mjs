import { createElement, getFormData } from "../../utilities.mjs";
const buildLogin = (root) =>{
    const form = createElement({
        tag : "form",
        name: ["loginForm"],
        id: ["loginForm"]
    });

    const inputUser = createElement({
        tag: "input",
        name: ["inputUser"],
        id: ["inputUser"],
        placeholder: ["User","placeholder"]
    });

    const inputPass = createElement({
        tag: "input",
        name: ["inputPass"],
        id: ["inputPass"],
        type: ["password"],
        placeholder: ["Password", ""]
    });

    const button = createElement({
        tag: "button",
        name: ["submitButton"],
        id: ["submitButton"],
        innerText: ["login", "innerText"]
    });
    form.appendChild(inputUser);
    form.appendChild(inputPass);
    form.appendChild(button);
    root.appendChild(form);
};

export const main = (root) =>{
    const titleForm = createElement({
        tag: "H3",
        innerText: ["Login", "InnerText"],
    });
    const loginContainer = createElement({
        tag: "div",
        name: ["loginContainer"],
        id: ["loginContainer"]
    });
    loginContainer.appendChild(titleForm);
    buildLogin(loginContainer);
    root.appendChild(loginContainer);
};