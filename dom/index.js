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
const containerList = createElement({
  elementType: "div",
  class: ["container"],
  id: ["container-list"],
});
const list = createElement({
  elementType: "ol",
  class: ["list"],
  id: ["list"],
});
const listTitle = createElement({
  elementType: "p",
  class: ["title"],
  id: ["list-title"],
  innerText: ["Pokemons list", "innerText"],
});
list.appendChild(listTitle);
containerList.appendChild(list);
root.appendChild(container);
root.appendChild(containerList);

const containerElement = document.getElementById("container"); //op1
// const containerElement = root.firstChild() //op2

const customInput = createElement({
  elementType: "input",
  class: ["form-input"],
  id: ["user-input"],
  placeholder: ["New element"],
});
containerElement.appendChild(customInput);

const appendListItem = ({ idInput, idList }) => {
  const input = document.getElementById(idInput);
  const list = document.getElementById(idList);
  // validate input data
  const newItemValue = input.value; // valor || "" || undefined
  if (newItemValue && newItemValue.length > 0) {
    const li = createElement({
      elementType: "li",
      value: [newItemValue],
      innerText: [newItemValue, "innerText"],
    });
    list.appendChild(li);
    input.value = "";
  }else{
    alert('Enter a valid value')
  }
};

const customButton = createElement({
  elementType: "button",
  type: ["button"],
  innerText: ["Submit", "innerText"],
  class: ["action"],
  id: ["submit"],
  onclick: [
    (e) => appendListItem({ idInput: "user-input", idList: "list" }),
    "onclick",
  ],
});
containerElement.appendChild(customButton);
