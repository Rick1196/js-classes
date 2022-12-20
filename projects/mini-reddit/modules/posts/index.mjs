import { createElement } from "../../utilities.mjs";
const params = new URLSearchParams(window.location.search);


export const main = (root) => {
  const blogs = JSON.parse(window.localStorage.getItem("Subblog")) || [];
  const postID = params.get("postId");
  const blog = blogs[postID];
  const subpostContainer = createElement({
    tag: "div",
    name: ["subpostContainer"],
    id: ["subpostContainer"],
  });

  const subpostTitle = createElement({
    tag: "h2",
    name: ["subpostTitle"],
    id: ["subpostTitle"],
    innerText: [blog[0].value, "innertext"],
  });

  const description = createElement({
    tag: "h4",
    name: ["subpostDescription"],
    id: ["subpostDescription"],
    innerText: [blog[1].value, "innertext"],
  });

  // const saveduser = window.localStorage.getItem(user);
  subpostContainer.appendChild(subpostTitle);
  subpostContainer.appendChild(description);
  root.appendChild(subpostContainer);
};
