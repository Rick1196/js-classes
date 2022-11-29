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
const renderSubblogs = (subblogs, root) => {
    for(const subblog of subblogs){
        const sublogContainer = createElement({
            tag: 'div',
            name: [`sublogContainer_${subblog.id}`],
            id: [`sublogContainer_${subblog.id}`]
        });
        const subblogTitle = createElement({
            tag: 'h3',
            innerText: [subblog.name,'innerText']
        });
        const description = createElement({
            tag: 'p',
            innerText: [subblog.description, 'innerText']
        });

        sublogContainer.appendChild(subblogTitle);
        sublogContainer.appendChild(description);
        root.appendChild(sublogContainer);
    }
}

export const main = (root, subposts) => {
    const mainContainer = createElement({
        tag: 'div',
        name: ['subblogsContainer'],
        id: ['subblogsContainer'],
    });
    const title = createElement({
        tag: 'h3',
        innerText: ['Subblogs', 'innerText']
    });
    mainContainer.appendChild(title);
    renderSubblogs(subposts, mainContainer);
    root.appendChild(mainContainer);
}