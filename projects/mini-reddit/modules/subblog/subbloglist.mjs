import { createElement } from "../../utilities.mjs";

/**
 *
 * @param {Array<{
 * id,
 * name,
 * description,
 * followers,
 * []posts
 * creator
 * }>} subblogs
 * @returns
 */
const renderSubblogs = (subblogs, root, routingCallback) => {
  for (const subblog of subblogs) {
    const sublogContainer = createElement({
      tag: "div",
      name: [`sublogContainer_${subblog.id}`],
      id: [`sublogContainer_${subblog.id}`],
      onclick: [
        () => {
          routingCallback();
        },
        "onclick",
      ],
    });
    const subblogTitle = createElement({
      tag: "h3",
      innerText: [subblog.name, "innerText"],
    });
    const description = createElement({
      tag: "p",
      innerText: [subblog.description, "innerText"],
    });

    sublogContainer.appendChild(subblogTitle);
    sublogContainer.appendChild(description);
    root.appendChild(sublogContainer);
  }
};

export const main = (root, subposts, routingCallback) => {
  const mainContainer = createElement({
    tag: "div",
    name: ["subblogsContainer"],
    id: ["subblogsContainer"],
  });
  const title = createElement({
    tag: "h3",
    innerText: ["Subblogs", "innerText"],
  });
  mainContainer.appendChild(title);
  renderSubblogs(subposts, mainContainer, routingCallback);
  root.appendChild(mainContainer);
};
