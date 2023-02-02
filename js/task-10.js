
const mainDivEl = document.querySelector('#controls');
const onInputChangeEl = mainDivEl.firstElementChild;
const createBtnEl = document.querySelector('button[data-create]');
const DestroyBtnEl = document.querySelector('button[data-destroy]');
const containerForBoxes = document.querySelector("#boxes");

DestroyBtnEl.addEventListener('click', () => { 
  onInputChangeEl.value = 0;
})

createBtnEl.addEventListener('click', createBoxes);


function createBoxes(amount) { 
  amount = onInputChangeEl.value;
  const boxesArray = [];
  const randomColor = getRandomHexColor();
  amount.map((item, index) => {
    const newBox = document.createElement("div");
    newBox.style.backgroumdColor = randomColor;
    newBox.style.width = 30 + index * 10 + "px";
    newBox.style.height = 30 + index * 10 + "px";
    boxesArray.push(item);
    containerForBoxes.append(...boxesArray);
    return containerForBoxes;
})
}


createBtnEl.removeEventListener('click', createBoxes);













function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
