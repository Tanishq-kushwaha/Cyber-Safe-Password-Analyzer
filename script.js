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
       
       let score = 0;

    //   Uppercase testing
    if(regexUppercase.test(password)){
     ruleUppercase.style.color = "#00cc00";
     score++;
    }else{
        ruleUppercase.style.color = "#ff4d4d";
    }

    //  Lowercase Testing
    if(regexLowercase.test(password)){
           ruleLowercase.style.color = "#00cc00";
           score++;
    }else{
        ruleLowercase.style.color = "#ff4d4d";
       }

    // Number testing   
    if(regexNumber.test(password)){
        ruleNumber.style.color = "#00cc00";
        score++;
    }else{
        ruleNumber.style.color = "#ff4d4d";
    }

    // Symbol testing
    if(regexSymbol.test(password)){
        ruleSymbol.style.color = "#00cc00";
        score++;
    }else{
        ruleSymbol.style.color = "#ff4d4d";
    }

    //Length testing 
  if(password.length >= 8){
    ruleLength.style.color = "#00cc00";
    score++;
  }else{
     ruleLength.style.color = "#ff4d4d";
  }

//    Strength Bar 
  strengthBar.style.width = (score * 20) + "%";

  if(score <= 2){
    strengthBar.style.backgroundColor = "#ff4d4d";
  }else if(score === 3 || score === 4){
    strengthBar.style.backgroundColor = "#ffa500"
  }else{
    strengthBar.style.backgroundColor = "#00cc00";
  }
  
});
