import {
    loadImageToFullscreen,
    removeImageFromFullscreen
} from "./generalFunctions.js"
import {
    handleRightArrowClick,
    handleLeftArrowClick
} from "./controllers.js"


let images = []
let currentImageIndex

const thumbnails = document.querySelectorAll("#thumbnails .thumbnail")
const closeBtn = document.getElementById("close")
const arrowLeft = document.getElementById("arrow-left")
const arrowRight = document.getElementById("arrow-right")

closeBtn.addEventListener("click", () => removeImageFromFullscreen())
arrowRight.addEventListener("click", () => {
    currentImageIndex++
    handleRightArrowClick(images, currentImageIndex)
})
arrowLeft.addEventListener("click", () => {
    currentImageIndex--
    handleLeftArrowClick(images, currentImageIndex)
})

thumbnails.forEach((image, index) => {
    images.push(image)
    image.addEventListener("click", function() {
        currentImageIndex = index
        loadImageToFullscreen(image)
    })
})
