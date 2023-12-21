// let obj = {
//     a: "1",
//     b: 'Aditya'
// }

// console.log(obj);


// let animal = {
//     eats: true
// }
// let rabbit = {
//     jumps: true
// }
// rabbit.__proto__ = animal; //Sets rabbit.[[Prototype]] = animal;





// class Animal {
//     constructor(name) {
//         this.name = name;
//         console.log('Object is created. ' + name);
//     }

//     eats(){
//         console.log('Mai khana khata hu.');
//     }
    
//     jumps(){
//         console.log('Mai kud sakta hu.');
//     }
// }

// class Lion extends Animal {
//     constructor(name){
//         super(name);
//         console.log('Mai sher, Aagaya hu...');
//     }

//     eats(){
//         super.eats();
//         console.log('Mai Mans bhi khata hu.');
//     }
// }

// let a = new Animal('Bunny');
// console.log(a);
// a.eats();
// a.jumps();

// let l = new Lion('shera');
// console.log(l);
// l.eats();
// l.jumps();


// getters and setters

class User {
    constructor(name){
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value){
        if(value.length < 4){
            console.log('Name is too short');
            return;
        }
        this._name = value;
    }
}

let obj = new User("Aditya");
console.log(obj.name);

obj.name = "";