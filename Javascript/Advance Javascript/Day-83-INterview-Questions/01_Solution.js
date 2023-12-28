let students = ["Shubh", "aditya", "aman", "ram", "shyam", "mohan", "sita", "geeta", "ravindranathan", "krishnanendu"];

let houses = [];

for (const student of students) {
    if(student.length < 6) {
        houses.push("GryFFinder");
    }else if(student.length < 8) {
        houses.push("Hufflepuff");       
    }else if(student.length < 12){
        houses.push("Ravenclaw");  
    }else {
        houses.push("Slytherin");
    }
}

console.log(houses);