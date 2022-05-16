//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('#first-button').addEventListener('click', getCocktail);
let counter = 0;

function getCocktail() {
  const cocktailName = document.querySelector('#first').value;

  fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktailName)
    .then(res => res.json())
    .then(data => {
      if (counter >= data.drinks.length) counter = 0;
      console.log(data.drinks)
      document.querySelector('h2').innerText = data.drinks[counter].strDrink;
      document.querySelector('img').src = data.drinks[counter].strDrinkThumb;
      document.querySelector('img').style.border = "15px solid turquoise";

      let ingredients = ""
      if (data.drinks[counter].strIngredient1 != null) {
        ingredients += ("- " + data.drinks[counter].strIngredient1 + " ");
      }
      if (data.drinks[counter].strIngredient2 != null) {
        ingredients += ("- " + data.drinks[counter].strIngredient2 + " ");
      }
      if (data.drinks[counter].strIngredient3 != null) {
        ingredients += ("- " + data.drinks[counter].strIngredient3 + " ");
      }
      if (data.drinks[counter].strIngredient4 != null) {
        ingredients += ("- " + data.drinks[counter].strIngredient4 + " ");
      }
      if (data.drinks[counter].strIngredient5 != null) {
        ingredients += ("- " + data.drinks[counter].strIngredient5 + " ");
      }
      if (data.drinks[counter].strIngredient6 != null) {
        ingredients += ("- " + data.drinks[counter].strIngredient6 + " ");
      }
      if (data.drinks[counter].strIngredient7 != null) {
        ingredients += ("- " + data.drinks[counter].strIngredient7 + " ");
      }
      if (data.drinks[counter].strIngredient8 != null) {
        ingredients += ("- " + data.drinks[counter].strIngredient8 + " ");
      }
      if (data.drinks[counter].strIngredient9 != null) {
        ingredients += ("- " + data.drinks[counter].strIngredient9 + " ");
      }
      if (data.drinks[counter].strIngredient10 != null) {
        ingredients += ("- " + data.drinks[counter].strIngredient10 + " ");
      }
      if (data.drinks[counter].strIngredient11 != null) {
        ingredients += ("- " + data.drinks[counter].strIngredient11 + " ");
      }
      if (data.drinks[counter].strIngredient12 != null) {
        ingredients += ("- " + data.drinks[counter].strIngredient12 + " ");
      }
      if (data.drinks[counter].strIngredient13 != null) {
        ingredients += ("- " + data.drinks[counter].strIngredient13 + " ");
      }
      if (data.drinks[counter].strIngredient14 != null) {
        ingredients += ("- " + data.drinks[counter].strIngredient14 + " ");
      }
      if (data.drinks[counter].strIngredient15 != null) {
        ingredients += ("- " + data.drinks[counter].strIngredient15 + " ");
      }

      document.querySelector('div').innerText = ingredients;
      document.querySelector('h3').innerText = data.drinks[counter].strInstructions;

      counter++;
    })
    .catch(err => {
      console.log(`error ${err}`);
    })
}
