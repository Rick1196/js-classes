import { createElement, getFormData } from "../../utilities.mjs";
const buildSubblogForm = (root) => {
  const form = createElement({
    tag: "form",
    name: ["subblogForm"],
    id: ["subblogForm"],
  });

  const inputTitle = createElement({
    tag: "input",
    name: ["inputTitle"],
    id: ["inputTitle"],
    placeholder: ["Title", "placeholder"],
  });

  const inputDescription = createElement({
    tag: "input",
    name: ["inputDescription"],
    id: ["inputDescription"],
    placeholder: ["Description", ""],
  });

  const button = createElement({
    tag: "button",
    name: ["submitButton"],
    id: ["submitButton"],
    innerText: ["Create", "innerText"],
  });
  form.appendChild(inputTitle);
  form.appendChild(inputDescription);
  form.appendChild(button);
  root.appendChild(form);
};

const validateForm = (blogData) => {
  //  [{id,value},{id, value}]
  //  \[a-zA-z0-9]+\
  // ''.match()
  // [].includes(' ')
  // blogData[indice].value
  // const nombre = ...
  const inputTitle = blogData[0].value;
  const inputDescription = blogData[1].value;
  let hasError = false;
  if (inputTitle.includes(" ") || inputTitle === "") {
    hasError = true;
    document.getElementById(blogData[0].id).style.border = "solid red";
  } else {
    document.getElementById(blogData[0].id).style.border = "solid grey";
  }

  if (inputDescription === "") {
    hasError = true;
    document.getElementById(blogData[1].id).style.border = "solid red";
  } else {
    document.getElementById(blogData[1].id).style.border = "solid grey";
  }

  return hasError;
};

const validateBlog = (blogTitle) => {
  const blog = window.localStorage.getItem(blogTitle);
  return !!blog;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const values = getFormData(e.target.children);
  const hasError = validateForm(values);
  if (hasError === false) {
    if (validateBlog(values[0].value)) {
      alert("Blog exists");
    } else {
      window.localStorage.setItem(values[0].value, JSON.stringify(values));
      alert("Blog created");
    }
  }
  console.log(e, values);
};

export const main = (root) => {
  const titleForm = createElement({
    tag: "H3",
    innerText: ["Create Subblog", "InnerText"],
  });
  const subblogFormContainer = createElement({
    tag: "div",
    name: ["subblogFormContainer"],
    id: ["subblogFormContainer"],
  });
  subblogFormContainer.appendChild(titleForm);
  buildSubblogForm(subblogFormContainer);
  root.appendChild(subblogFormContainer);
  addEventListener("submit", handleSubmit);
};
