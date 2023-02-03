
const inputEL = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output')

inputEL.addEventListener('input', onInputChange);

function onInputChange(event) {
    spanEl.textContent = event.currentTarget.value.trim() !== '' ? event.currentTarget.value : 'Anonymous';
}


