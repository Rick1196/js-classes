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
// {tag, ...props}
// {tag, id, name, class, size, color, style}
export const createElement = ({ tag, ...props }) => {
  let newElement = document.createElement(tag);
  //for(let i = 0; i < array.length; i++)
  //array[i]

  // Object.keys({ id:.., name:..., class:..., size, color, style})
  //['id', 'name', 'class', 'size'];
  // it 1: key = 'id'
  // it 2: key = 'name'
  // it 3: key = 'class'

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