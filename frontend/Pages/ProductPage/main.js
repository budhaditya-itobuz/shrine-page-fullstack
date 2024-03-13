import { productData } from "../../Data/productPageData.js"

const imageMain = document.getElementById('imgMain')
const smallImgGroup = document.getElementById('smallImgGroup')
const productTitle = document.getElementById('productTitle')
const itemPrice = document.getElementById('itemPrice')
const discountBtn = document.getElementById('discountBtn')
const details = document.getElementById('details')
const description = document.getElementById('description')
const importSection = document.getElementById('importSection')
const careSection = document.getElementById('careSection')
const viewing=document.getElementById('viewing')

const render = () => {

    const { images } = productData

    const mainImg = document.createElement('img')
    mainImg.setAttribute('src', images[0])
    imageMain.appendChild(mainImg)

    const changeImage = (e) => {
        console.log(e)
    }

    images.splice(1).forEach(item => {
        const image = document.createElement('img')
        image.setAttribute('src', item)
        image.classList.add('product-images')
        smallImgGroup.appendChild(image
        )
    })
    productTitle.innerText = productData.title
    description.innerText = productData.description
    itemPrice.innerText = "$" + productData.price
    discountBtn.innerText = `${productData.discount}% OFF`
    viewing.innerText=productData.viewing

    const h4 = document.createElement('h4')
    h4.innerText = productData.details.header
    details.appendChild(h4)

    productData.details.list.forEach(item => {
        const li = document.createElement('li')
        li.innerText = item
        details.appendChild(li)
    })

    productData.import.forEach(item => {
        const li = document.createElement('li')
        li.innerText = item
        importSection.appendChild(li)
    })

    productData.care.forEach(item => {
        const li = document.createElement('li')
        li.innerText = item
        careSection.appendChild(li)
    })

    document.querySelectorAll('.product-images').forEach(item => {
        item.addEventListener('mouseover', () => {
            mainImg.setAttribute('src',item.getAttribute('src'))
        })
    })

}
render()