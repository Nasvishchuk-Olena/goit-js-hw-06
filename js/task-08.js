
const form = document.querySelector(".login-form");
form.addEventListener('submit', onFormSubmit)



function onFormSubmit(event) {
  event.preventDefault()
  const email = event.target.elements.email.value
  const password = event.target.elements.password.value
  if (email === '' || password === '') {
    alert('Enter your full data')
    return
  }
  console.log('email:', email)
  console.log('pasword:', password)
  form.reset()
}












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
 

