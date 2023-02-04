function displayFetchedData(data) {
    const output = document.getElementById("fetched-data")

    data.drinks.forEach(cocktail => {

        const cocktailContainer = document.createElement("div")
        const drinkName = document.createElement("h2")
        const drinkImg = document.createElement("img")
        const descriptionParagraph = document.createElement("p")
        const langSelect = document.createElement("select")
        const ingredientsTable = document.createElement("div")
        const ingredientsDiv = document.createElement("div")
        const measuresDiv = document.createElement("div")
        const ingredientHeader = document.createElement("h3")
        const measureHeader = document.createElement("h3")
        const props = document.createElement("div")

        drinkName.className = "header"
        ingredientsTable.className = "ingredients-table"
        ingredientsDiv.className = "ingredients-container"
        measuresDiv.className = "measures-container"
        cocktailContainer.className = "cocktail-container"
        descriptionParagraph.className = "description"
        props.className = "props"

        drinkName.innerHTML = cocktail.strDrink
        drinkImg.src = cocktail.strDrinkThumb
        descriptionParagraph.innerHTML = cocktail.strInstructions
        ingredientHeader.innerHTML = "Ingredients"
        measureHeader.innerHTML = "Measures"

        ingredientsDiv.appendChild(ingredientHeader)
        measuresDiv.appendChild(measureHeader)
        cocktailContainer.appendChild(drinkName)
        cocktailContainer.appendChild(drinkImg)
        cocktailContainer.appendChild(descriptionParagraph)


        for (let prop in cocktail) {

            if(isPropInstructions(prop) && cocktail[prop]) {

                let option = document.createElement("option")
                option.setAttribute("value", cocktail[prop])
                
                let optionText = document.createTextNode(parseLang(prop) || "EN")
                option.appendChild(optionText)

                langSelect.appendChild(option)
            }

            if(cocktail[prop] && isPropIngredient(prop)) {
                let ingredientParagraph = document.createElement("p")
                ingredientParagraph.innerHTML = cocktail[prop]
                ingredientParagraph.className = "ingredient"
                ingredientsDiv.appendChild(ingredientParagraph)
            }

            if(cocktail[prop] && isPropMeasure(prop)) {
                let measureParagraph = document.createElement("p")
                measureParagraph.innerHTML = cocktail[prop]
                measureParagraph.className = "measure"
                measuresDiv.appendChild(measureParagraph)
            }


            if(cocktail[prop] && prop !== "strDrink" && prop !== "strDrinkThumb" && !isPropInstructions(prop) && !isPropIngredient(prop) && !isPropMeasure(prop) && prop !== "strImageSource") {
                let propDiv = document.createElement("div")

                let propName = document.createElement("span")
                let propValue = document.createElement("span")

                propName.className = "prop-name"
                propValue.className = "prop-value"

                propName.innerHTML = parseString(prop) + ":" 
                propValue.innerHTML = cocktail[prop]

                propDiv.appendChild(propName)
                propDiv.appendChild(propValue)

                props.appendChild(propDiv)
            }
        }

        langSelect.addEventListener("change", function (e) {
            descriptionParagraph.innerHTML = e.target.value
        })

        ingredientsTable.appendChild(ingredientsDiv)
        ingredientsTable.appendChild(measuresDiv)
        cocktailContainer.appendChild(ingredientsTable)
        cocktailContainer.appendChild(props)
        cocktailContainer.appendChild(langSelect)

        output.appendChild(cocktailContainer)
    })
}