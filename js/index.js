let exampleForm = document.forms.example_form
let reqInp = document.querySelectorAll('.box-required input')

let nameInput = reqInp[0]
let EmailInput = reqInp[1]
let PhoneInput = reqInp[2]
let PassWordInput = reqInp[3]

nameInput.onkeyup = () => {
    validate(/^[a-z ,.'-']+$/i, nameInput)
 }

EmailInput.onkeyup = () => {
    validate(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, EmailInput)
 }
PassWordInput.onkeyup = () => {
    validate(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, PassWordInput)
 }
PhoneInput.onkeyup = () => {
    validate(/^998[012345789][0-9]{8}$/, PhoneInput)
 }


 function validate(regex, field) {
    if (regex.test(field.value)) {
        field.classList.add('green')
        field.classList.remove('red')
    }else {
        field.classList.add('red')
        field.classList.remove('green')
    }
 }



// console.log(reqInp);
// exampleForm.onsubmit = (event) => {
//     event.preventDefault();
//     let isError = false
    
//     reqInp.forEach((inp) => {
//         inp.classList.remove('error')
//     })
// }
// info.onsubmit = (event) => {
//     event.preventDefault();
//    let user = {}
//    let fm = new FormData(exampleForm)
   
//    fm.forEach((value, key) => {
//     user[key] = value
//    })
//    console.log(user);
// }