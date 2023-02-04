function parseLang(lang) {
    return lang.slice(15)
}

function parseString(string) {
    const result = string.replace(/([A-Z])/g, " $1")
        .replace("str", "")
    return result.charAt(0).toUpperCase() + result.slice(1)
}

function isPropInstructions(prop) {
    return /^strInstructions.*$/.test(prop)
}

function isPropIngredient (prop) {
    return /^strIngredient.*$/.test(prop)
}

function isPropMeasure (prop) {
    return /^strMeasure.*$/.test(prop)
}
