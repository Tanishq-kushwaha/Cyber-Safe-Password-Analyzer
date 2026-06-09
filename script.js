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
const regexSymbol = /[!@#$%^&*(),.?":<>|{}]/;


// Event
passwordInput.addEventListener("input", function(event){
       console.log(event.target.value);
});