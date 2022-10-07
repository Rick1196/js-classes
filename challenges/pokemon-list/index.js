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

const container = createElement({
  elementType: "div",
  class: ["container"],
  id: ["container"],
});

const input = createElement({
    elementType : "input",
    class: ["form-input"],
    id: ['input'],
    placeholder: ['Send'],
});

const button = createElement({
    elementType : 'button',
    id : ['sumbmit'],
    innerText : ['Send', 'innerText'],
});

const list = createElement({
    elementType: 'ul',
    id : ['list'],
});

const listTitle = createElement({
    elementType: 'p',
    innerText : ['Pokemons List', 'innerText'],
});

const listContainer = createElement({
    elementType: 'div',
    id: ['lisContainer'],
    class: ['container'],
});

list.appendChild(listTitle);
listContainer.appendChild(list);
container.appendChild(input);
container.appendChild(button);
root.appendChild(container);
root.appendChild(listContainer);