const counterValueconst = document.querySelector("#value")
 const buttonDecrementEl = document.querySelector('button[data-action="decrement"]')
const buttonIncrementEl = document.querySelector('button[data-action="increment"]')

let counterValue = 0;

buttonDecrementEl.addEventListener("click", () => {
    counterValueconst.textContent = --counterValue;
  
 
})
buttonIncrementEl.addEventListener("click", () => { 
    counterValueconst.textContent = ++counterValue;
     
})



















