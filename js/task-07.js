
const onInputChangeEl = document.querySelector("#font-size-control");
const sizeOfTextSpanEl = document.querySelector("#text");


onInputChangeEl.addEventListener('input', () => {
    const onInput = onInputChangeEl.value;
    sizeOfTextSpanEl.style.fontSize = `${onInput}px` ;
})



