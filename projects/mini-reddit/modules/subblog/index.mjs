import Observable from "../../observable.mjs";
import { main as subblogForm } from "./subblogform.mjs";
import { main as subblogList } from "./subbloglist.mjs";
import { createElement } from "../../utilities.mjs";

const observable = new Observable();
observable.subscribe((data) => {
  console.log(data);
});

export const main = (root, routingCallback) => {
  const subblogContainer = createElement({
    tag: "div",
    name: ["subblogContainer"],
    id: ["subblogContainer"],
  });
  subblogForm(subblogContainer, observable);
  const values = [];
  for (const key of Object.keys(window.localStorage)) {
    const blog = JSON.parse(window.localStorage.getItem(key));
    values.push({
      id: values.length,
      name: blog[0].value,
      description: blog[0].value,
    });
  }

  subblogList(subblogContainer, values, () => {
    document.getElementById("subblogContainer").remove();
    routingCallback("subpost");
  });
  // const saveduser = window.localStorage.getItem(user);

  console.log(window.localStorage);
  root.appendChild(subblogContainer);
};
