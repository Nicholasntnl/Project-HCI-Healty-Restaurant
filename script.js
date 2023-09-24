const nameInput = document.querySelector("#name");
const gender = document.querySelector("#gender");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const city = document.querySelector("#city");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name Have To Be Inserted";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(gender.value.length < 1){
        errorNodes[1].innerText = "Gender Have To Be Inserted (Male, Female, Or Other)";
        gender.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[2].innerText = "Invalid Email Address (Ex : david@gmail.com)";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(phone.value.length < 10){
        errorNodes[3].innerText = "Insert The Valid Phone Number (At Least 10 Digit)";
        phone.classList.add("error-border");
        errorFlag = true;
    }

    if(city.value.length < 1){
        errorNodes[4].innerText = "City Have To Be Inserted";
        city.classList.add("error-border");
        errorFlag = true;
    }

    if(message.value.length < 1){
        errorNodes[5].innerText = "Please Enter Your Message";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){
        success.innerText = "Your Messages Has Been Successfully Sent";
    }
}

function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText="";
    nameInput.classList.remove("error-border");
    gender.classList.remove("error-border");
    email.classList.remove("error-border");
    phone.classList.remove("error-border");
    city.classList.remove("error-border");
    message.classList.remove("error-border");
}

function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}