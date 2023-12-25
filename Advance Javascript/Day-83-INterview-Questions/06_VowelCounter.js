const string = "Aditya";

const capitalVowels = ['A','E','I','O','U'];
const smallVowels = ['a','e','i','o','u'];
const vowels = new Set(capitalVowels.concat(smallVowels));

const countVowels = (string) => {
    let count = 0;
    for (const str of string) {
        if(vowels.has(str)){
            count++;
        }
    }
    return count;
};

console.log(countVowels(string));
