export const memberUrl = "http://localhost:3000/members";


export const getElement = (name, obj, parent) => {

    const ele = document.createElement(name)
    if(!!obj)
    Object.keys(obj).forEach(item => {
        ele.setAttribute(item, obj[item])
    })
    if (!!parent)
        parent.appendChild(ele)
    return ele
}
