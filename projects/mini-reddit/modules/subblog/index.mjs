import Observable from "../../observable.mjs";
import { main as subblogForm } from "./subblogform.mjs";
import { main as subblogList } from "./subbloglist.mjs";
import { createElement, formatBlogs } from "../../utilities.mjs";

const observable = new Observable();

export const main = (root, routingCallback) => {
  const subblogContainer = createElement({
    tag: "div",
    name: ["subblogContainer"],
    id: ["subblogContainer"],
  });
  subblogForm(subblogContainer, observable);
  const values = formatBlogs(
    JSON.parse(window.localStorage.getItem("Subblog")) || []
  );

  subblogList(
    subblogContainer,
    values,
    () => {
      document.getElementById("subblogContainer").remove();
      routingCallback("subpost");
    },
    observable
  );
  // const saveduser = window.localStorage.getItem(user);

  console.log(window.localStorage);
  root.appendChild(subblogContainer);
};
