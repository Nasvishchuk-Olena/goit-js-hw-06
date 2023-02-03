const inputValue = document.querySelector("#validation-input");

inputValue.addEventListener('blur', () => { 
    inputValue.classList.remove("invalid", "valid");
    inputValue.value.length === Number(inputValue.dataset.length) ? inputValue.classList.add("valid") :
        inputValue.classList.add("invalid");
})
    



   





