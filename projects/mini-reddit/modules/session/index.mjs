import { main as signup } from "./signup.mjs";
import { main as login } from "./login.mjs";
import { createElement } from "../../utilities.mjs";
export const main = (root, routingCallback) => {
  const sessionContainer = createElement({
    tag: "div",
    name: ["sessionContainer"],
    id: ["sessionContainer"],
  });
  signup(sessionContainer, () => {
    document.getElementById("sessionContainer").remove();
    routingCallback("subblogs");
  });
  // login(sessionContainer);
  root.appendChild(sessionContainer);
};
