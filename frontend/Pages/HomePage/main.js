import { memberUrl, getElement } from "../../Helper/helper.js"

const memberContainer = document.getElementById('memberContainer')

const getData = async () => {
    const data = await (await fetch(memberUrl)).json()
    return data;
}

const social = () => {
    const social = getElement('div', { class: "social" })
    getElement('img', { src: "../../Images/Home/Members/instagram.svg" }, social)
    getElement('img', { src: "../../Images/Home/Members/google.svg" }, social)
    getElement('img', { src: "../../Images/Home/Members/youtube.svg" }, social)
    return social
}

const renderTestimony = (members) => {
    members.forEach(item => {
        const card = getElement('div', { class: "col-sm-12 col-md-6 col-lg-3 card" }, memberContainer)

        getElement('img', { src: item.img }, card)

        const details = getElement('div', { class: "row details" }, card)

        const share = getElement('div', { class: "d-flex justify-content-center align-items-center share" }, details)

        getElement('img', { class: "image-fluid profile-img", src: "../../Images/Home/Members/share.svg" }, share)

        const name_div = getElement('div', { class: "col-9" }, details)

        const h4 = getElement('h4', {}, name_div)
        h4.innerText = item.name

        const h5 = getElement('h5', { class: "subtitle" }, name_div)
        h5.innerText = item.designation
        name_div.appendChild(social());
    })
}

async function render() {
    const data = await getData()
    renderTestimony(data)
}

render()

