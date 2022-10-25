const notInputElements = ['button', 'label', 'div'];
const setAttributeWith = (element, method, prop, value) => {
  switch (method) {
    case "setAttribute":
      element.setAttribute(prop, value);
      break;
    default:
      element[prop] = value;
      break;
  }
  return element;
};

export const createElement = ({ tag, ...props }) => {
  let newElement = document.createElement(tag);
  for (const key of Object.keys(props)) {
    newElement = setAttributeWith(
      newElement,
      props[key][1] || "setAttribute",
      key,
      props[key][0]
    );
  }
  return newElement;
};

export const getFormData = (formChildren) =>{
    const values = [];
    for(const child of formChildren){
        if(!notInputElements.includes(child.localName)){
            values.push({id: child.id,
            value: child.value,
            })
        }
    }
    return values;

}