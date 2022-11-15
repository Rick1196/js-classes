import { createElement, getFormData } from "../../utilities.mjs";
const buildSubblogForm = (root) =>{
    const form = createElement({
        tag : "form",
        name: ["subblogForm"],
        id: ["subblogForm"]
    });

    const inputTitle = createElement({
        tag: "input",
        name: ["inputTitle"],
        id: ["inputTitle"],
        placeholder: ["Title","placeholder"]
    });

    const inputDescription = createElement({
        tag: "input",
        name: ["inputDescription"],
        id: ["inputDescription"],
        placeholder: ["Description", ""]
    });

    const button = createElement({
        tag: "button",
        name: ["submitButton"],
        id: ["submitButton"],
        innerText: ["Create", "innerText"]
    });
    form.appendChild( inputTitle);
    form.appendChild( inputDescription);
    form.appendChild(button);
    root.appendChild(form);
};

const handleSubmit = (e) => {
    e.preventDefault();
    const values = getFormData(e.target.children);
    // const hasError = validateForm(values);
    // if (hasError === false) {
    //   if (validateUser(values[0].value)) {
    //     alert("User exists");
    //   } else {
    //     window.sessionStorage.setItem(values[0].value, JSON.stringify(values));
    //     alert("Welcome");
    //   }
    // }
    console.log(e, values);
  };

export const main = (root) =>{
    const titleForm = createElement({
        tag: "H3",
        innerText: ["Create Subblog", "InnerText"],
    });
    const subblogFormContainer = createElement({
        tag: "div",
        name: ["subblogFormContainer"],
        id: ["subblogFormContainer"]
    });
    subblogFormContainer.appendChild(titleForm);
    buildSubblogForm(subblogFormContainer);
    root.appendChild(subblogFormContainer);
    addEventListener("submit", handleSubmit);
};