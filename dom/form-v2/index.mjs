import Singleton from "./singleton.mjs";

const exampleObject = {
  name: "obj",
  id: "1",
  prop: {
    pros: {},
  },
};

window.sessionStorage.setItem("example", exampleObject);
console.log(window.sessionStorage.getItem("example"));

window.sessionStorage.setItem("example-string", JSON.stringify(exampleObject));
console.log(window.sessionStorage.getItem("example-string"));
console.log(JSON.parse(window.sessionStorage.getItem("example-string")));

const string = "example-string-with-random-text";
console.log(newString);
const newString = string.replace(/-/g, " ");
console.log(newString);
const newString2 = string.replace("-", " ");
console.log(newString2);

const re = new RegExp("[0-9]+");
const name = "ricardo 123 manuel 123";
console.log(name.match(re));

const single = Singleton.getInstance();
single.setValue(10);
const single2 = Singleton.getInstance();
console.log(single2.value, single.value);
const setAttributeWith = (element, method, key, value) => {
  switch (method) {
    case "setAttribute":
      element.setAttribute(key, value);
      break;
    default:
      element[key] = value;
      break;
  }
  return element;
};
// const input = document.createElement("input");
// input.type = "text";
// {class, id, ...}
// {class, id}

const createElement = ({ elementType, ...props }) => {
  let newElement = document.createElement(elementType);
  for (const key of Object.keys(props)) {
    newElement = setAttributeWith(
      newElement,
      props[key][1] || "setAttribute",
      key,
      props[key][0]
    );
    // newElement.class = ''
  }
  return newElement;
  //
};
function getData(form) {
  console.log(typeof form);
  const values = [];
  for (const input of Object.keys(form)) {
    const inputElement = form[input];
    if (inputElement.localName !== "button") {
      values.push({
        id: inputElement.id,
        localName: inputElement.localName,
        value: inputElement.value,
        valueAsDate: inputElement.valueAsDate,
        valueAsNumber: inputElement.valueAsNumber,
      });
    }
  }
  return values;
}
const handleForm = (e) => {
  e.preventDefault();
  const user = getData(e.target.children);
  console.log(user, e);
};
const loadInitialElements = () => {
  const root = document.getElementById("root");
  const form = createElement({
    elementType: "form",
    id: ["form"],
  });
  const input = createElement({
    elementType: "input",
    placeholder: ["Name"],
    id: ["input"],
  });
  const button = createElement({
    elementType: "button",
    type: ["submit"],
    innerText: ["Send", "innerText"],
  });
  form.appendChild(input);
  form.appendChild(button);
  root.appendChild(form);
  addEventListener("submit", handleForm);
};

window.addEventListener("load", loadInitialElements);
