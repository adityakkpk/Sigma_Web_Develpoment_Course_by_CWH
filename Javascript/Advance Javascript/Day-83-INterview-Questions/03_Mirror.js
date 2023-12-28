let str = "Aditya";

function appendWithReverse (s) {
    let newStr="";
    for(let i = s.length-1; i>=0; i-- ){
        newStr += s[i]; 
    }
    return s+newStr;
}

console.log(appendWithReverse(str));


