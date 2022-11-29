import { main as session } from "./modules/session/index.mjs";
import { main as subblogs } from "./modules/subblog/index.mjs";
const root = document.getElementById("root");

/**
 * - root
 * -- session
 * -- subblog
 * -- posts
 */
const main = () => {
  session(root, routingCallback);
  // subblogs(root, routingCallback)
};

const routingCallback = (nextRoute) => {
  // if(nextRoute === 'session'){
  //   session(root);
  // }else if()
  switch (nextRoute) {
    case "session":
      session(root, routingCallback);
      break;
    case "subblogs":
      subblogs(root, routingCallback);
      break;
    default:
      break;
  }
};

main();
