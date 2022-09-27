// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JOHNWICK</h1>`;
// let employees = [
//   { name: 'elaya', gender: 'male', age: 25 },
//   { name: 'vengi', gender: 'male', age: 24 },
//   { name: 'pavithra', gender: 'female', age: 23 },
//   { name: 'promoth', gender: 'male', age: 22 },
// ];

// let length = employees;
// console.log(length);
// let array = employees[0];
// console.log(array);
// let array1 = employees[1];
// console.log(array1);
// let array2 = employees[2];
// console.log(array2);
// let array3 = employees[3];
// console.log(array3);

// employees.forEach((employee) => {
//   console.log(employee);
// });
// employees.map((employee) => {
//   console.log(employee);
// });
//  let O = employees.filter((employee) => employee.gender == 'female');
// console.log(O);
// let a = employees.filter((employees) => employees.age <= '25');
// console.log(a);
// let b = employees.filter((employees) => employees.age > '22');
// console.log(b);
// let c = employees.filter((employee) => employee.name == 'pavithra');
// console.log(c);

// let students = {
//   values: [
//     { name: 'elaya', gender: 'male', age: 25 },
//     { name: 'vengi', gender: 'male', age: 24 },
//     { name: 'abi', gender: 'female', age: 23 },
//     { name: 'promoth', gender: 'male', age: 22 },
//   ],
// };
// console.log(students.values);

// function ajith(firstname, lastname) {
//   // set of statements
//   let msg =
//     'hello' +
//     ' ' +
//     firstname +
//     ' ' +
//     lastname +
//     ' ' +
//     'im leaning java function';
//   console.log(msg);
// }
// function add(num1, num2) {
//   console.log(num1 - num2);
// }
// add(45, 55);
// ajith('elaya', 'bharathi');
// function uber(a, b) {
//   return a * b;
// }
// let d = uber(35, 25);
// console.log(d);

// let i;
// function pro(a, b, c) {
//   i = a + c - b;
//   return i;
// }
// pro(10, 20, 30);
// console.log(i);

// let person = {
//   firstname: 'elaya',
//   secondname: 'waran',
//   display: function () {
//     let x = this.firstname + ' ' + this.secondname;
//     console.log(x);
//     return x;
//   },
// };
// let display = person.display.bind(person);
// setTimeout(display, 3000);
// console.log(display());

// // local variables

// function add(){
//   var a= 10;
//   console.log(a);
// }
// add()

// // global variables

// var b;
// function abd(){
//  b=20;
// }
// abd()
// console.log(b);

// var x;
// var y;
// var z;
// function run()
// {
//    x=20;
//    y= "ELAYA";
//    z= 0;
// }
// run()
// console.log(x+y+z)

// // if or else statement

// var x=4, y=3
// function rex()
// if (x<y){
// console.log("its true")
// }
// else
// {
// console.log("its not true")
// }

// let john =[
//   {name : "elaya", age : 24 , gender : "male"},
//   {name :"shanthini", age :23,gender: "male" },
//   {name : "promoth", age : 23, gender : "male"}
// ];
// //map function
// john = john.map((object)=> object.age*2);
// console.log(john)

// // for each function

// john.forEach((john) => {
//   console.log(john);
// });

// let students = ['John', 'Sara', 'Jack'];
// students.forEach(myFunction);

// function myFunction(item) {
//   console.log(item);
// }

// new promise command function//

//const p1 = new Promise((resolve, reject) => {
// setTimeout(() => {
//   resolve('success');
// }, 2000);
//});

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('failure');
//   }, 2000);
// });

// p1.then(console.log).catch(console.log);

// p1.then((x) => {
//   console.log(x);
// });

// p1.then((x) => {
//   console.log(x);
// });

// p1.then((x) => console.log(x));

// p1.then((x) => {
//   console.log(x, "It's x value");
//   console.log(x + 10, "It's x+10 value");
//   let y = x + 20;
//   console.log(y, "It's Y value");
// });
// console.log(Math.abs(-3));
// let result = Math.max(75, 100, 95, 85);
// console.log('maximum marks :' + result);
// let marks = Math.min(75, 100, 95, 85);
// console.log('minimum marks :' + marks);
