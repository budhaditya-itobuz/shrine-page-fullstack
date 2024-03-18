
export const homeApis = {
    memberUrl: "http://localhost:3000/home/members",
    teamUrl: "http://localhost:3000/home/teams",
    suscribeUrl: "http://localhost:3000/home/addSuscriber",
    misionUrl: "http://localhost:3000/home/missions",
    articleUrl: "http://localhost:3000/home/articles",
    eventUrl: "http://localhost:3000/home/events"
}

export const aboutUsApis = {
    missionUrl: "http://localhost:3000/about/missions",
    statUrl: "http://localhost:3000/about/stats"
}

export const faqApis = {
    imageUrl: "http://localhost:3000/faq/images",
    faqUrl: "http://localhost:3000/faq/faqs"
}

export const galleryApis = {
    imageUrl: "http://localhost:3000/gallery/images",
    heroImagesUrl: "http://localhost:3000/gallery/heroImages"
}

export const teamApis = {
    teamUrl: "http://localhost:3000/team/teams",
    heroImagesUrl: "http://localhost:3000/team/heroImages"
}

export const videoApis = {
    heroUrl: "http://localhost:3000/video/hero",
    videosUrl: "http://localhost:3000/video/videos"
}

export const getData = async (url) => {
    return await (await fetch(url)).json()
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
