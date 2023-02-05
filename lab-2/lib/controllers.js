import {
    removeImageFromFullscreen,
    loadImageToFullscreen
} from "./generalFunctions.js"

export function handleLeftArrowClick(images, currentImageIndex) {
    if (currentImageIndex >= 0) {
        let image = images[currentImageIndex]

        removeImageFromFullscreen()
        loadImageToFullscreen(image)
    } else {
        removeImageFromFullscreen()
    }
} 

export function handleRightArrowClick(images, currentImageIndex) {
    if(currentImageIndex < images.length) {
        let image = images[currentImageIndex]

        removeImageFromFullscreen()
        loadImageToFullscreen(image)
    } else {
        removeImageFromFullscreen()
    }
}