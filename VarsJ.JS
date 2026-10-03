
let Number_of_Shirts = 100

let Number_of_Shoes = 500

let Weather = 10.20

const Testing_String = "Testing string"
console.log(Testing_String)

let Shirts_In_Stock = true
console.log(Shirts_In_Stock)


let Shoes_In_Stock = false
console.log(Shoes_In_Stock)

const Question = "What's the weather"    
console.log(Question)

let welcomeMessage = `The weather is ${Weather} degrees C!`;
console.log(welcomeMessage);

let Answer = 'They said "hello" together'
console.log(Answer)

function getResult(Number_of_Shirts, Number_of_Shoes) {
    return Number_of_Shoes / Number_of_Shirts;
}

console.log("Division 1: " + getResult(Number_of_Shirts, Number_of_Shoes)); 

console.log("Division 2: " + getResult(10, 50));

document.getElementById("btn-saur").onclick = function() {
let para = document.getElementById("para-saur");
para.textContent = "This is a lame joke, parasolophogus";

let headings = document.getElementsByClassName("Header-hit");

headings[0].textContent = "Vargas from BraveFrontier";
headings[1].textContent = "Roar🦖";
console.log("The button was clicked, notice anything different?");
}
function multiplication(Weather, Number_of_Shoes) {
    return Weather * Number_of_Shoes;
}
    let Result1 = multiplication(566, 22);
console.log("multiplication 1: " + Result1);

let Result2 = multiplication(5, 56);
console.log("multiplication 2: " + Result2);

function sayHello() {
    console.log("Hello World");
}
sayHello();
sayHello();



