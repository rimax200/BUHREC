var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document = document.getElementById('email_error');
var pass_error = document = document.getElementById('pass_error');

function validated(){
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        password_error.style.display = "block";
        password.focus();
        return false;
    }
}


const Submit = () =>{
    if(email.value && password.value){
        console.log(email.value)
        // window.location.replace("file:///Users/maxwellebirim/Desktop/buhrec/index.html")
    }
}