 const counterValueconst = document.querySelector("#value")


counterValueconst.innerText = 0;

const buttonDecrementEl = document.querySelector('button[data-action="decrement"]')
// console.log(button)
const buttonIncrementEl = document.querySelector('button[data-action="increment"]')


buttonDecrementEl.addEventListener("click", () => {
    counterValueconst.innerText = --counterValueconst.innerText;
  return parseInt(counterValueconst.innerText)
 
})
buttonIncrementEl.addEventListener("click", () => { 
    counterValueconst.innerText = ++counterValueconst.innerText;
     return parseInt(counterValueconst.innerText)
})


