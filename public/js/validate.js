const form = document.querySelector(".form");
const email = document.querySelector("#email");
const password = document.querySelector("#password-field");
const errDisplay = document.getElementById("error");
const pswd = "nasih123";
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    if (email.value === "" || password.value === "" ) {
        event.preventDefault();
        errDisplay.innerHTML = "! Please Enter valid email and password";
        return false;
    }
    if(password.value !== "nasih123" || email.value !== "nisunasih135@gmail.com"){
        event.preventDefault();
        errDisplay.innerHTML = "! Incorrect email or password ";
        return false;
    }
    if(isNaN(email.value)){
     
        return true;
    }else{
        event.preventDefault();
        errDisplay.innerHTML = "! Please enter correct email";
        return false;
    }

}
