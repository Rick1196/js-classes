import { main as subpostForm } from "./subpostform.mjs";
import { main as subpostList } from "./subpostlist.mjs";
import { createElement } from "../../utilities.mjs";
export const main = (root) => {
  const subpostContainer = createElement({
    tag: "div",
    name: ["subpostContainer"],
    id: ["subpostContainer"],
  });
  subpostForm(subpostContainer);
  subpostList(subpostContainer, [
    { id: 1, name: "Capi", description: "Vale pico" },
    { id: 2, name: "luis", description: "harto" },
    { id: 3, name: "Como entrenar a tu dragon", description: "chimuelo" },
  ]);
  root.appendChild(subpostContainer);

};
