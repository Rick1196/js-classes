import { main as subpostForm } from "./subpostform.mjs";
import { main as subpostList } from "./subpostlist.mjs";
import { createElement } from "../../utilities.mjs";
export const main = (root) =>{
    const subpostContainer = createElement({
        tag: 'div',
        name: ['subpostContainer'],
        id: ['subpostContainer'],
    })
    
    root.appendChild(subpostContainer);
}