
import { createElement } from "../../utilities.mjs";
export const main = (root) => {
  const subpostContainer = createElement({
    tag: "div",
    name: ["subpostContainer"],
    id: ["subpostContainer"],
  });
  
  const subpostTitle = createElement({
    tag: "h2",
    name:["subpostTitle"],
    id:["subpostTitle"],
    innerText: ["POST", "innertext"]
  });

  
  
  // const saveduser = window.localStorage.getItem(user);
  subpostContainer.appendChild(subpostTitle);
  console.log(window.localStorage);
  root.appendChild(subpostContainer);
};