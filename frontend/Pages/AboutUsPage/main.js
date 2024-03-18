import { mission } from "../../../backend/src/data/aboutPage.js"
import { getData, aboutUsApis, getElement } from "../../Helper/helper.js"

const { missionUrl, statUrl } = aboutUsApis

const walkingContainer = document.getElementById('walking-container')
const statContainer = document.getElementById('stat-container')


const renderMission = (missions) => {
    console.log(walkingContainer)
    missions.forEach(item => {
        const card = getElement('div', { class: "col-sm-12 col-md-4" }, walkingContainer)

        const cardBody = getElement('div', { class: "card-body my-3 mx-auto px-4  d-flex flex-column align-items-center mission-card" }, card)

        const cardImg = getElement('div', { class: "card-img mb-3" }, cardBody)

        const img = getElement('img', { src: item.img }, cardImg)

        const h4 = getElement('h4', { class: "mb-3 fs-4 text-center" }, cardBody)
        h4.innerText = item.heading

        const h5 = getElement('h5', { class: "subtitle text-center mb-3" }, cardBody)
        h5.innerText = item.text

    })
}

const renderStat = (stats) => {
    stats.forEach(item => {
        const statItem = getElement('div', { class: "stat-item col-sm-12 col-md-6 col-lg-3" }, statContainer)
        const statItemBody =getElement('div',getElement('div',{class:"stat-item-body"}),statItem)
        const title = getElement('h2', { class: "title" }, statItemBody)
        title.innerText = item.number
        const text = getElement('h5', { class: "subtitle" }, statItemBody)
        text.innerText = item.text

    })

}



const render = async () => {
    const missions = await getData(missionUrl)
    renderMission(missions)

    const stats = await getData(statUrl)
    renderStat(stats)
}

render()
