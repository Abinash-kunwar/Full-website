//console.log("hello");

//window.alert ("to show alret message");

// This ia a comment
/*
this is comment section
*/

document.getElementById("H1").textContent = "Hello";
document.getElementById("P").textContent = "lLLLl";

// Variable = A container that stpres a value.
// Behave as if it were the value it contain.

//   1. declaration let x;
//   2. assignment  x=100;

let age = 21;
let gpa = 3.07;
let firstname = "abinash";
let isStudent = false;

document.getElementById("P1").textContent = `Your name is ${firstname}.`;
document.getElementById("P2").textContent = `You are ${age} years old.`;
document.getElementById("P3").textContent = `Enrolled : ${isStudent}`;

console.log(age);
console.log(`The gpa is ${gpa}`);
console.log(typeof  gpa);
console.log(typeof firstname);

// boolean used only True or False

