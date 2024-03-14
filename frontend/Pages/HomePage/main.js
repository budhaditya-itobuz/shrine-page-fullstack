import { apis, getElement } from "../../Helper/helper.js"

const memberContainer = document.getElementById('memberContainer')
const teamImagesContainer = document.getElementById('teamImages')
const suscribeForm = document.getElementById('suscribeForm')
const missionContainer = document.getElementById('missionContainer')
const articleContainer = document.getElementById('articleContainer')


const { memberUrl, teamUrl, suscribeUrl, misionUrl, articleUrl } = apis

const getData = async (url) => {
    return await (await fetch(url)).json()
}

const sendData = async (url, data) => {
    const response = await fetch(url, {
        method: "POST", headers: {
            "Content-Type": "application/json",
        }, body: JSON.stringify(data)
    })
    return await response.json()
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

const renderMission = (missions) => {
    console.log(missions)
    missions.forEach(item => {
        const card = getElement('div', { class: "col-sm-12 col-md-6 col-lg-3" }, missionContainer)

        const cardBody = getElement('div', { class: "card-body my-3 mx-auto px-4 d-flex flex-column align-items-center ministries-card" }, card)

        const cardImg = getElement('div', { class: "card-img mb-3" }, cardBody)

        const img = getElement('img', { src: item.img }, cardImg)

        const h4 = getElement('h4', { class: "mb-3 fs-4 text-center" }, cardBody)
        h4.innerText = item.heading

        const h5 = getElement('h5', { class: "subtitle text-center mb-3" }, cardBody)
        h5.innerText = item.text

        const readMore = getElement('div', { class: "d-flex align-items-center" }, cardBody)

        const a = getElement('a', { href: item.link, class: "mx-2" }, readMore)
        console.log(a)
        a.innerText = "Read More"

        const arrow = getElement('div', { class: " dot d-flex justify-content-center align-items-center" }, readMore)
        arrow.innerText = ">"
    })

}

const renderTeam = (teams) => {

    teams.forEach(item => {
        getElement('img', { src: item }, teamImagesContainer)
    })

}

const renderArticle = (articles) => {
    articles.forEach(item => {
        const articleCard = getElement('div', { class: 'col-sm-12 col-md-4' },articleContainer);
        const articleCardBody=getElement('div',{class:"card article-card m-3"},articleCard)

        const img = getElement('img', { src: item.img}, articleCardBody);
        const cardBody = getElement('div', { class: 'card-body' }, articleCardBody);
        const h3 = getElement('h3', null, cardBody);
        h3.innerText = item.heading;

        const h5 = getElement('h5', { class: 'subtitle' }, cardBody);
        h5.innerText = item.text

        const user = getElement('div', { class: 'd-flex align-content-center' }, cardBody);
        const imgGirl = getElement('img', { src:item.userImg }, user);
        const smallText = getElement('h6', { class: 'small-text my-auto' }, user);
        smallText.innerText = `-- ${item.time} min read`;
    })

}

async function render() {
    const members = await getData(memberUrl)
    renderTestimony(members)

    const teams = await getData(teamUrl)
    renderTeam(teams)

    const missions = await getData(misionUrl)
    renderMission(missions)

    const articles = await getData(articleUrl)
    renderArticle(articles)

    suscribeForm.addEventListener('submit', async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        const { email, checkbox = false } = data
        if (!checkbox)
            alert('please check the Terms and Conditions checkbox')
        else {
            emailjs.send("budhaditya007", "template_2hg62sa", {
                email: email,
            });
            const response = await sendData(suscribeUrl, { email: email })
            alert(response.message)
        }
    })

}

render()

