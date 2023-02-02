 const counterValueconst = document.querySelector("#value")


counterValueconst.innerText = 0;

const buttonDecrementEl = document.querySelector('button[data-action="decrement"]')
// console.log(button)
const buttonIncrementEl = document.querySelector('button[data-action="increment"]')


buttonDecrementEl.addEventListener("click", () => {
    counterValueconst.textContent = --counterValueconst.textContent;
  return parseInt(counterValueconst.textContent)
 
})
buttonIncrementEl.addEventListener("click", () => { 
    counterValueconst.textContent = ++counterValueconst.textContent;
     return parseInt(counterValueconst.textContent)
})


