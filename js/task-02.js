const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',

  'Tomatos',
  'Herbs',
  'Condiments',
];


const listOfIngridients = document.querySelector("#ingredients");
const changedListOfIngridients = ingredients.map((ingridient) => {

  const listOfIngridientsItemEl = document.createElement("li");
  listOfIngridientsItemEl.classList.add("item")
  listOfIngridientsItemEl.textContent = ingridient;

  listOfIngridients.appendChild(listOfIngridientsItemEl);
  return listOfIngridients;
  });
 

console.log(changedListOfIngridients);

