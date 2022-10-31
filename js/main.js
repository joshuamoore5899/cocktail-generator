//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let counter = 0;
document.querySelector('#first-button').addEventListener('click', getCocktail);


function getCocktail() {
  const cocktailName = document.querySelector('#first').value;
    fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
      .then(res => res.json())
      .then(data => {
        if (document.getElementById('alc').checked) {
          data = data.drinks.filter((x) => x.strAlcoholic === 'Alcoholic');
        }
        else if (document.getElementById('nonalc').checked) {
          data = data.drinks.filter((x) => x.strAlcoholic === 'Non alcoholic');
        }
        else {
          data = data.drinks.filter((x) => x.strIngredient1 != null);
        }
        if (data.length < 1) {
          document.querySelector('h2').innerText = 'There are no matches. Try to search for something else.'
          return;
        }
        if (counter > data.length - 1) counter = 0;
        document.querySelector('h2').innerText = data[counter].strDrink;
        document.querySelector('img').src = data[counter].strDrinkThumb;
        // document.querySelector('img').style.border = "15px solid turquoise";

        let ingredients = "";

        if (data[counter].strIngredient1 != null) {
          ingredients += (data[counter].strIngredient1 + " ");
        }
        if (data[counter].strIngredient2 != null) {
          ingredients += ("- " + data[counter].strIngredient2 + " ");
        }
        if (data[counter].strIngredient3 != null) {
          ingredients += ("- " + data[counter].strIngredient3 + " ");
        }
        if (data[counter].strIngredient4 != null) {
          ingredients += ("- " + data[counter].strIngredient4 + " ");
        }
        if (data[counter].strIngredient5 != null) {
          ingredients += ("- " + data[counter].strIngredient5 + " ");
        }
        if (data[counter].strIngredient6 != null) {
          ingredients += ("- " + data[counter].strIngredient6 + " ");
        }
        if (data[counter].strIngredient7 != null) {
          ingredients += ("- " + data[counter].strIngredient7 + " ");
        }
        if (data[counter].strIngredient8 != null) {
          ingredients += ("- " + data[counter].strIngredient8 + " ");
        }
        if (data[counter].strIngredient9 != null) {
          ingredients += ("- " + data[counter].strIngredient9 + " ");
        }
        if (data[counter].strIngredient10 != null) {
          ingredients += ("- " + data[counter].strIngredient10 + " ");
        }
        if (data[counter].strIngredient11 != null) {
          ingredients += ("- " + data[counter].strIngredient11 + " ");
        }
        if (data[counter].strIngredient12 != null) {
          ingredients += ("- " + data[counter].strIngredient12 + " ");
        }
        if (data[counter].strIngredient13 != null) {
          ingredients += ("- " + data[counter].strIngredient13 + " ");
        }
        if (data[counter].strIngredient14 != null) {
          ingredients += ("- " + data[counter].strIngredient14 + " ");
        }
        if (data[counter].strIngredient15 != null) {
          ingredients += ("- " + data[counter].strIngredient15 + " ");
        }

        document.querySelector('#drinkdiv').innerText = ingredients;
        document.querySelector('h3').innerText = data[counter].strInstructions;

        counter++;
      })
      .catch(err => {
        console.log(`error ${err}`);
      })
}
