import Observable from "./observable.mjs";

const root = document.getElementById("root");
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

const array = [];

const obsevable = new Observable();

const handleEvent = (data) => {
  console.log(data);
};

const counter = (data) => {
  console.log(data.length);
};

const handleClick = () => {
  array.push({ item: new Date().toDateString() });
  obsevable.notify(array);
};

obsevable.subscribe(handleEvent);
obsevable.subscribe(counter);

const button = createElement({
  elementType: "button",
  innerText: ["click me a", "innerText"],
  onclick: [() => handleClick(), "onclick"],
});

root.appendChild(button);
