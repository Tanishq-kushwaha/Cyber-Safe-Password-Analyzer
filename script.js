const passwordInput = document.querySelector("#password-input");

const strengthBar = document.querySelector("#strength-bar");
const ruleLength = document.querySelector("#rule-length");
const ruleUppercase = document.querySelector("#rule-uppercase");
const ruleLowercase = document.querySelector("#rule-lowercase");
const ruleNumber = document.querySelector("#rule-number");
const ruleSymbol = document.querySelector("#rule-symbol");



passwordInput.addEventListener("input", function(){
       console.log(passwordInput.innerText);
});