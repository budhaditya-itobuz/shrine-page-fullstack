
export const apis = {
    memberUrl: "http://localhost:3000/home/members",
    teamUrl: "http://localhost:3000/home/teams",
    suscribeUrl: "http://localhost:3000/home/addSuscriber",
    misionUrl: "http://localhost:3000/home/missions",
    articleUrl: "http://localhost:3000/home/articles",
    eventUrl:"http://localhost:3000/home/events"
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
