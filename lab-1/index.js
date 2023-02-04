const btn = document.getElementById("btn")
const input = document.getElementById("input")
const fetchedDiv = document.getElementById("fetched-data")
const errorPlaceholder = document.getElementById("error-placeholder")

let searchkey 

input.addEventListener("change", (e) => { 
    searchkey = e.target.value 
})


async function getCocktails() {
    if(searchkey) {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchkey}`)
            const json = await response.json()
            
            fetchedDiv.innerHTML = ""
            if(json.drinks && response.ok) {
                displayFetchedData(json)
                errorPlaceholder.innerHTML = ""
            } else {
                errorPlaceholder.innerHTML = "No such drinks!"
            }
        } catch (error) {
            errorPlaceholder.innerHTML = error.message || error.toString()
        }
    } else {
        errorPlaceholder.innerHTML = "Your input can't be empty!"
    }
}



btn.addEventListener("click", () => getCocktails(), false)
