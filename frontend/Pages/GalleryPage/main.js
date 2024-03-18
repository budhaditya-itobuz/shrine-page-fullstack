import { galleryApis, getData, getElement } from "../../Helper/helper.js"


const options = document.querySelectorAll(".nav-link")
const tabContainer = document.getElementById("tab-images")
const heroContainer = document.getElementById("hero-container")

const { imageUrl, heroImagesUrl } = galleryApis



const renderImages = (images) => {
    tabContainer.innerHTML = ""
    console.log(images)
    images.forEach(item => {
        const div = getElement('div', { class: "col-sm-12 col-md-6 col-lg-4" }, tabContainer)
        const img = getElement('img', { src: item.img }, div)
    })
}

const renderHeroImages = (images) => {
    images.forEach(item => {
        const div = getElement('div', { class: "col-sm-12 col-md-6 d-flex justify-content-center my-3" }, heroContainer)
        const img = getElement('img', { src: item }, div)
    })
}


const render = async () => {
    const heroImages = await getData(heroImagesUrl)
    renderHeroImages(heroImages)

    const images = await getData(imageUrl)
    renderImages(images)

    options.forEach(item => {
        item.addEventListener('click', async (e) => {
            e.preventDefault()
            options.forEach(item => {
                item.classList.remove("active")
            })
            item.classList.add("active")

            const name = item.getAttribute('name')

            if (name !== "all") {
                const filteredImages = images.filter(item => item.catagory === name)
                renderImages(filteredImages)
            }
            else
                renderImages(images)
        })
    })
}

render()




