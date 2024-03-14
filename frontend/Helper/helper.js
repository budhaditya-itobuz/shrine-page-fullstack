
export const apis = {
    memberUrl: "http://localhost:3000/members",
    teamUrl: "http://localhost:3000/teams",
    suscribeUrl: "http://localhost:3000/addSuscriber",
    misionUrl: "http://localhost:3000/missions",
    articleUrl: "http://localhost:3000/articles"
}


export const getElement = (name, obj, parent) => {

    const ele = document.createElement(name)
    if (!!obj)
        Object.keys(obj).forEach(item => {
            ele.setAttribute(item, obj[item])
        })
    if (!!parent)
        parent.appendChild(ele)
    return ele
}
