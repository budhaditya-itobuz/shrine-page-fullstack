import { teamApis, getElement, getData } from "../../Helper/helper.js"

const { teamUrl, heroImagesUrl } = teamApis

const imageContainer = document.getElementById('carousel-images')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')
const teamContainer =document.getElementById('team-container')

let heroImglength

let currentIndex = 0

function updateCarousel() {
    imageContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function goToNext() {
    currentIndex = Math.min(currentIndex + 1, heroImglength - 1);
    updateCarousel();
}

function goToPrev() {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
}

const social = () => {
    const social = getElement('div', { class: "social" })
    getElement('img', { src: "../../Images/Home/Members/instagram.svg" }, social)
    getElement('img', { src: "../../Images/Home/Members/google.svg" }, social)
    getElement('img', { src: "../../Images/Home/Members/youtube.svg" }, social)
    return social
}

const renderImages = (images) => {
    images.forEach(item => {
        const imgDiv = getElement('div', { class: "w-100" }, imageContainer)
        getElement('img', { src: item, class: "hero-img" }, imgDiv)
    })
}

const renderTeam = (team) => {
    team.forEach(item => {
        const card = getElement('div', { class: "col-sm-12 col-md-6 col-lg-4 card" }, teamContainer)

        getElement('img', { src: item.img }, card)

        const details = getElement('div', { class: "row details mt-3" }, card)

        const share = getElement('div', { class: "d-flex justify-content-center align-items-center share" }, details)

        getElement('img', { class: "image-fluid profile-img", src: "../../Images/Home/Members/share.svg" }, share)

        const nameDiv = getElement('div', { class: "col-9" }, details)

        const h4 = getElement('h4', {}, nameDiv)
        h4.innerText = item.name

        const h5 = getElement('h5', { class: "subtitle" }, nameDiv)
        h5.innerText = item.designation
        nameDiv.appendChild(social());
    })
}



const render = async () => {
    const images = await getData(heroImagesUrl)
    console.log(images)
    renderImages(images)
    heroImglength = images.length

    const team = await getData(teamUrl)
    renderTeam(team)
}

render()

prevBtn.onclick = () => {
    goToPrev()
}

nextBtn.onclick = () => {
    goToNext()
}