// const person = {
//     name: 'Srujan',
//     age: 21,
//     "aim" : function() {
//         console.log(`age is ${this.age}`);
//     }
// }

// const goal = "aim";

// person[goal]

// class Book {
//     constructor(title, author, noOfPages, msg) {
//         this.title = title;
//         this.author = author;
//         this.noOfPages = noOfPages;
//         this.msg = msg;
//         this.info = function () {
//             console.log(`${title} by ${author}. ${noOfPages} Pages, ${msg}`);
//         };
//     }
// }


// const theHobbit = new Book ("The Hobbit", "J.R.R", 295, "not read yet");

// theHobbit.info();

// const faFunction = str => {
//     const cap = () => str.toUpperCase();
//     const printStr = () => console.log(`${cap}`);
//     return {printStr};
// };


// const taco = faFunction('taco');


// taco.printStr();

// const data = {
//     apple: 10,
//     mango: 20,
//     grape: 30,
// }

// const calData = (data) => {
//     let sum = 0;
//     for(let i of Object.values(data)) {
//         sum += i;
//     }
//     return sum;
    
// }

// let res = calData(data)
// console.log(res);



//Array destructuring

// const arr = [1,2,3,4,5];

// const [first, second, third, ...rest] = arr;

// console.log(rest);


// const data = {
//     name: "Srujan",
//     age: 21,
//     Aim: "SDE",
// }

// const formateChange = JSON.stringify(data);

// console.log(typeof formateChange);
// console.log(formateChange);

