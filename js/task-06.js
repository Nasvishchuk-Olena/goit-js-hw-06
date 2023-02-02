const inputValue = document.querySelector("#validation-input");

inputValue.addEventListener('blur', () => { 
    inputValue.value.length === Number(inputValue.dataset.length) ? inputValue.classList.add("valid") :
        inputValue.classList.add("invalid");
})
    



   





