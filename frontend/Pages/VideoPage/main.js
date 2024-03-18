import { videoApis, getData, getElement } from "../../Helper/helper.js";

const { heroUrl, videosUrl } = videoApis

const imgFirst = document.getElementById('hero-first')
const imgSecond = document.getElementById('hero-second')
const imgThird = document.getElementById('hero-third')


const renderHero = (images) => {
    getElement('img',{src:images[0]},imgFirst)
    getElement('img',{src:images[1]},imgSecond)
    getElement('img',{src:images[2]},imgThird)

}

const render = async () => {
    const images = await getData(heroUrl)
    renderHero(images)

    // const videos = await getData(videosUrl)
    // renderVideos(videos)

}

render()
