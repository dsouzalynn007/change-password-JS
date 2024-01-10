let oldPassMemory='a'
let form=document.querySelector('form')

let oldpassword=document.querySelector('#oldpassword')
let newpassword=document.querySelector('#newpassword')
let conpassword=document.querySelector('#conpassword')

let errormessage=document.querySelectorAll('.errormessage')
let inputpassword=document.getElementById('inputpassword')

let mypasswordcondition=/[A-Za-z0-9]{7-12}/g

let errors= function(ele,msg){
    console.log(msg)
    ele.nextElementSibling.innerHTML=msg
}

form.addEventListener('submit',e=>{
    e.preventDefault()

    if(oldpassword.value == ''){
        errors(oldpassword,'old password is required')
    }
    else if(oldpassword.value != oldPassMemory){
        errors(oldpassword,'old password not matching')
    }
    else if(newpassword.value == ''){
        errormessage[0].innerHTML = ''
        errors(newpassword,'new password is required')
    }
    // else if(!mypasswordcondition.test(newpassword.value)){
    //     errormessage[0].innerHTML = ''
    //     errors(newpassword,'new password is not valid')
    // }
    else if(conpassword.value == ''){
        errormessage[0].innerHTML = ''
        errormessage[1].innerHTML = ''
        errors(conpassword,'password is required')
    }
    else if(conpassword.value != newpassword.value){
        errormessage[0].innerHTML = ''
        errormessage[1].innerHTML = ''
        errors(conpassword,'password not matching')
    }
    else{
        errormessage[0].innerHTML = ''
        errormessage[1].innerHTML = ''
        errormessage[2].innerHTML = ''
        console.log('FORM SUBMITTED', oldpassword.value, newpassword.value, conpassword.value);
    }
})