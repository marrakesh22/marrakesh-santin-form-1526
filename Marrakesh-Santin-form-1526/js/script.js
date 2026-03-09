// DECLARING VARIABLES

let submitButton = document.querySelector("#submit-button");
let fullName = document.querySelector("#fullname");
let email = document.querySelector("#email");
let message = document.querySelector("#message");

// Email regular expression
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// FUNCTION
function validateForm(){

// EMPTY BUCKETS
let data = {};
let errors = [];


// FULL NAME
if(fullName.value.trim() !== ""){
    data.fullName = fullName.value;
}else{
    errors.push("Full name is required.");
}


// EMAIL
if(email.value.trim() !== ""){

    if(emailRegex.test(email.value)){
        data.email = email.value;
    }else{
        errors.push("Email is not valid.");
    }

}else{
    errors.push("Email is required.");
}


// MESSAGE
if(message.value.trim() !== ""){
    data.message = message.value;
}else{
    errors.push("Message is required.");
}


// FEEDBACK
if(errors.length > 0){

    console.log("Errors:");
    console.log(errors);

}else{

    console.log("Form Data:");
    console.log(data);

    // Clear fields
    fullName.value = "";
    email.value = "";
    message.value = "";

}

}


// EVENT LISTENER
submitButton.addEventListener("click", validateForm);