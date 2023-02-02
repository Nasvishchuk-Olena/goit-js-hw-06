
const onInputChangeEl = document.querySelector('#controls>input[type="number"]')
const createBtnEl = document.querySelector('button[data-create]')
const destroyBtnEl = document.querySelector('button[data-destroy]')
const containerForBoxes = document.querySelector('#boxes')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

createBtnEl.addEventListener('click', handlerOnClick)

function handlerOnClick(event) {
  const amount = onInputChangeEl.value
  console.log('amount', amount)
  createBoxes(amount)
}


const createBoxes = (amount) => {
  const boxesArray = []
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div')
    newBox.style.backgroundColor = getRandomHexColor()
    newBox.style.width = `${30 + i * 10}px`
    newBox.style.height = `${30 + i * 10}px`
    boxesArray.push(newBox)
    containerForBoxes.append(...boxesArray)
  }
}


destroyBtnEl.addEventListener('click', () => {
    onInputChangeEl.value = 0
    containerForBoxes.innerHTML=''
})




