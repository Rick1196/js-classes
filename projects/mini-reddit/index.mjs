import { main as session } from "./modules/session/index.mjs";
const root = document.getElementById("root");

const main = () => {
  session(root);
};

main();
