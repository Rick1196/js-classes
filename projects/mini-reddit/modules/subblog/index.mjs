import { main as subpostForm } from "./subblogform.mjs";
import { main as subblogList } from "./subbloglist.mjs";
import { createElement } from "../../utilities.mjs";
export const main = (root) => {
  const subpostContainer = createElement({
    tag: "div",
    name: ["subpostContainer"],
    id: ["subpostContainer"],
  });
  subpostForm(subpostContainer);
  const values = [];
  for (const key of Object.keys(window.localStorage)) {
    const blog = JSON.parse(window.localStorage.getItem(key));
    values.push({
      id: values.length,
      name: blog[0].value,
      description: blog[1].value,
    });
  }
  subblogList(subpostContainer, values);
  // const saveduser = window.localStorage.getItem(user);

  console.log(window.localStorage);
  root.appendChild(subpostContainer);
};
