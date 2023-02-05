function parseImageUrl(image) {
    let hostname = `${window.location.protocol}://${window.location.host}`
    return image.replace(hostname, "")
}

export default parseImageUrl