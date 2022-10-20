export const createElement = ({tag, name, id}) =>{
    const newElement = document.createElement(tag);
    newElement.setAttribute('name', name);
    newElement.setAttribute('id', id);
    return newElement;
}

