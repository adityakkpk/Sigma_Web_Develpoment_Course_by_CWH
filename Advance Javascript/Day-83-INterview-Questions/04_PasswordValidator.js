const password = "Akkpk111";

const checkDigit = (password) => {
    for (let i = 0; i < password.length; i++) {
        if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57){
            return true;
        }
    }
    return false;
};

const checkUpperCase = (password) => {
    for (let i = 0; i < password.length; i++) {
        if(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90){
            return true;
        }
    }
    return false;
};

const checkLowerCase = (password) => {
    for (let i = 0; i < password.length; i++) {
        if(password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122){
            return true;
        }
    }
    return false;
};

if(password.length >= 8 && checkDigit(password) && checkUpperCase(password) && checkLowerCase(password)){
    console.log("Strong Password");
} else{
    console.log("Invalid Password!");
}

