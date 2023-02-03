
const form = document.querySelector(".login-form");
form.addEventListener('submit', onFormSubmit)


function onFormSubmit(event) {
  event.preventDefault()

const {
    elements: { email, password }
  } = event.target;


  
  if (email.value.trim() === '' || password.value === '') {
    alert('Enter your full data')
    return
  }
  console.log({ email, password });
  
  form.reset()
}








// const email = event.target.elements.email.value
  // const password = event.target.elements.password.value



// function onFormSubmit(event) {
//     event.preventDefault()
//     const formData = new FormData(event.target)
    
//  formData.forEach((value, name) => {
//         if (value === '') {
//             alert('Field must not be empty')
//             return
//         }
//         console.log(name);
//         console.log(value);

         
//      })
//    form.reset();
// }
 

