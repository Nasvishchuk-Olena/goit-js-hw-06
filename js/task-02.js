const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',

  'Tomatos',
  'Herbs',
  'Condiments',
];


const listOfIngridients = document.querySelector("#ingredients");

const changedListOfIngridients = (options) => {
  return options.map((option) => {

    const listOfIngridientsItemEl = document.createElement("li");
    listOfIngridientsItemEl.classList.add("item")
    listOfIngridientsItemEl.textContent = option;

    listOfIngridients.appendChild(listOfIngridientsItemEl);
    return listOfIngridients;
  });
}

console.log(changedListOfIngridients(ingredients));

