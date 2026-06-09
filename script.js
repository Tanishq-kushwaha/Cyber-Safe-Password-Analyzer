// target Section 
const passwordInput = document.querySelector("#password-input");
const strengthBar = document.querySelector("#strength-bar");
const ruleLength = document.querySelector("#rule-length");
const ruleUppercase = document.querySelector("#rule-uppercase");
const ruleLowercase = document.querySelector("#rule-lowercase");
const ruleNumber = document.querySelector("#rule-number");
const ruleSymbol = document.querySelector("#rule-symbol");


// Rejex section
const regexUppercase = /[A-Z]/;
const regexLowercase = /[a-z]/;
const regexNumber = /[0-9]/;
// const regexSymbol = /[!@#$%^&*(),.?":<>|{}]/;
const regexSymbol = /[^A-Za-z0-9]/;



// Event
passwordInput.addEventListener("input", function(event){
    const password = event.target.value;
       console.log(password);
      
    //   Uppercase testing
    if(regexUppercase.test(password)){
     ruleUppercase.style.color = "#00cc00";
    }else{
        ruleUppercase.style.color = "#ff4d4d";
    }
    //  Lowercase Testing
    if(regexLowercase.test(password)){
           ruleLowercase.style.color = "#00cc00";
    }else{
        ruleLowercase.style.color = "#ff4d4d";
       }
    // Number testing   
    if(regexNumber.test(password)){
        ruleNumber.style.color = "#00cc00";
    }else{
        ruleNumber.style.color = "#ff4d4d";
    }


});
