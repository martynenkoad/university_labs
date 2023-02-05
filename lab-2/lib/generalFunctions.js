import parseImageUrl from "./imageSrc.js"
const fullScreen = document.getElementById("full-screen-image")

export function removeImageFromFullscreen() {
    const child = document.getElementById("img")
    fullScreen.className = "fs-hidden"
    fullScreen.removeChild(child)
}

export function loadImageToFullscreen(image) {
    fullScreen.className = "fs-opened"
    const fsImage = document.createElement("img")

    fsImage.src = parseImageUrl(image.src)
    fsImage.id = "img"
    fullScreen.appendChild(fsImage)
} 