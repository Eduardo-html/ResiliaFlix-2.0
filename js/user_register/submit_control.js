let submit = document.querySelector('#submitButton')


function validationPassword(){
    let password = document.querySelector('#inputPassword4')
    let confirmPassword = document.querySelector('#inputConfirmPassword4')

    if(password.value === confirmPassword.value){
        
        return true
    } else {
        let passwordFail = document.querySelector('#passwordFail')
        passwordFail.classList.remove('hidden')
        setTimeout(()=>{passwordFail.classList.add('hidden')}, 5000)
        password.focus()
    }

    return false
}
let form = document.querySelector('form')
form.addEventListener('submit', function(event){
    event.preventDefault()
    event.stopPropagation()
    let sucessRegister = document.querySelector('#sucessRegister')
    sucessRegister.classList.remove('hidden')
    setTimeout(()=>{sucessRegister.classList.add('hidden')}, 5000)
    form.reset()
})