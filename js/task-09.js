
const buttonChangeColorEl = document.querySelector('.change-color');
const bodyChangeColorEl = document.querySelector('body');
const spatTextEl = document.querySelector('.color');

buttonChangeColorEl.addEventListener('click', changecolor);



function changecolor() {
  const newColor = getRandomHexColor();
  bodyChangeColorEl.style.backgroundColor = newColor; 
  spatTextEl.textContent = newColor;

}; 




  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



 

