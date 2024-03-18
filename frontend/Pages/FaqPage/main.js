import { faqApis, getElement, getData } from "../../Helper/helper.js"

const { imageUrl, faqUrl } = faqApis

const imageContainer = document.getElementById('carousel-images')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')
const faqContainer1 = document.getElementById('accordion-1')
const faqContainer2 = document.getElementById('accordion-2')


let currentIndex = 0

function updateCarousel() {
    imageContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function goToNext() {
    currentIndex = Math.min(currentIndex + 1, 4 - 1);
    updateCarousel();
}

function goToPrev() {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
}

const renderImages = (images) => {
    images.forEach(item => {
        const imgDiv = getElement('div', { class: "w-100" }, imageContainer)
        getElement('img', { src: item, class: "hero-img" }, imgDiv)
    })
}

const renderFaqs = (faqs) => {
    console.log(faqs)

    for (let i = 0; i < faqs.length/2; i++)
    {
        const item=faqs[i]
        const accordian = getElement('div', { class: "accordion-item mb-4" }, faqContainer1)
        const h2 = getElement('h2', { class: "accordion-header d-flex" }, accordian)
        const div = getElement('div', { class: "accordion-index small-text" }, h2)
        div.innerText = item.id
        const button = getElement('button', { class: "accordion-button", type: "button", "data-bs-toggle": "collapse", "data-bs-target": `#${item.id}`, "aria-expanded": "true", "aria-controls": item.id }, h2)
        button.innerText = item.title
        const body = getElement('div', { id: item.id, class: "accordion-collapse collapse", "data-bs-parent": "#accordion-1" }, accordian)
        const body_text = getElement('div', { class: "accordion-body subtitle" }, body)
        body_text.innerText = item.text
    }
    for (let i =Math.floor(faqs.length/2+1); i < faqs.length; i++)
    {
        console.log(faqs[i])
        const item=faqs[i]
        console.log(item)
        const accordian = getElement('div', { class: "accordion-item mb-4" }, faqContainer2)
        const h2 = getElement('h2', { class: "accordion-header d-flex" }, accordian)
        const div = getElement('div', { class: "accordion-index small-text" }, h2)
        div.innerText = item.id
        const button = getElement('button', { class: "accordion-button", type: "button", "data-bs-toggle": "collapse", "data-bs-target": `#${item.id}`, "aria-expanded": "true", "aria-controls": item.id }, h2)
        button.innerText = item.title
        const body = getElement('div', { id: item.id, class: "accordion-collapse collapse", "data-bs-parent": "#accordion-2" }, accordian)
        const body_text = getElement('div', { class: "accordion-body subtitle" }, body)
        body_text.innerText = item.text
    }
}

const render = async () => {
    const images = await getData(imageUrl)
    renderImages(images)

    const faqs = await getData(faqUrl)
    renderFaqs(faqs)
}

render()

prevBtn.onclick = () => {
    goToPrev()
}

nextBtn.onclick = () => {
    goToNext()
}