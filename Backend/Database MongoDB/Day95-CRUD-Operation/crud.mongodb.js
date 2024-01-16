use("CrudDB")

console.log(db);

//CREATE
db.createCollection('courses')

// Insert data into database
// db.courses.insertOne({
//     name: "Aditya's web dev",
//     price: 0,
//     assignment: 15,
//     projects: 5
// })

// db.courses.insertMany([
//     {
//         name: "Aditya's Java Course ",
//         price: 12000,
//         assignment: 105,
//         projects: 3
//     },
//     {
//         name: "Ayush's Java Course ",
//         price: 12000,
//         assignment: 105,
//         projects: 3
//     },
//     {
//         name: "Anshu's Java Course ",
//         price: 12000,
//         assignment: 105,
//         projects: 3
//     },
//     {
//         name: "Abhishek's Java Course ",
//         price: 12000,
//         assignment: 105,
//         projects: 3
//     },
// ])


//READ
//Find the data into database
// let a = db.courses.find({price: 0});
// console.log(a);
// console.log(a.count());

// let b = db.courses.findOne({price: 0})
// console.log(b);


//UPDATE
//updating data into database
// db.courses.updateOne({price: 0}, {$set:{price: 100}})

// db.courses.updateMany({price: 0}, {$set:{price: 10000}})

//DELETE
// db.courses.deleteOne({price: 100})
db.courses.deleteMany({price: 10000})


// MONGODB OPERATORS
// https://www.mongodb.com/docs/manual/reference/operator/