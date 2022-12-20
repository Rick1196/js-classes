import { createElement, formatBlogs } from "../../utilities.mjs";

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
          const params = new URLSearchParams(`?postId=${subblog.id}`);
          // reemplazamos el historial del navegador con esta nueva querystring
          window.history.replaceState(
            {},
            "",
            `${window.location.pathname}?${params}`
          );
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

export const main = (root, subposts, routingCallback, observable) => {
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
  observable.subscribe((data) => {
    document.getElementById("subblogsContainer").remove();
    const mainContainer = createElement({
      tag: "div",
      name: ["subblogsContainer"],
      id: ["subblogsContainer"],
    });
    const title = createElement({
      tag: "h3",
      innerText: ["Subblogs", "innerText"],
    });
    renderSubblogs(formatBlogs(data), mainContainer, routingCallback);
    root.appendChild(mainContainer);
  });
};
