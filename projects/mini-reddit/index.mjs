import { main as session } from "./modules/session/index.mjs";
import {main as subblogs} from "./modules/subpost/index.mjs";
const root = document.getElementById("root");

const main = () => {
  subblogs(root);
};

main();
