// for in example
const h2 = document.getElementById("text");
const span = document.getElementById("span");

let nameOne = "Ahmad";
if(nameOne === "Ahamd"){
    console.log("Hi Ahmad welcome")
}

else if(nameOne === "Ali"){
    console.log("Welcome Dear Ali")
}

else if(nameOne === "momid"){
    console.log("Welcome Dear Omid")
}

else if(nameOne === "Boss"){
    console.log("Welcome Dear Boss")
}

else{
    console.log("Who are you?")
}

let a = "i";
if(a%2 ===0){
    console.log("Even");
}
else if(a%2 !==0){
    console.log("Odd");
}
else{
    console.log("this is not a number");
}

let n = 99;
if(n>100){
    console.log("Larger than 100")
}
else if(n<100){
    console.log("Smaler than 100")
}
else{
    console.log("Equals")
}

// switch 
// case

let date = new Date();
switch(date){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Teusday");
        break;
    case 3:
        console.log("Wendesday");
        break;
    case 4:
        console.log("Theursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Suturday");
        break;
    default:
        console.log("Sunday");
        break;   
}

// getHours

let dateHours = new Date().getHours;
if("dateHours"%2==0){
    console.log("ساعت نیک است");
}
else{
    console.log("ساعت نیک نیست");
}

// loop

for(let numberOne = 0; numberOne<10; numberOne++){
    console.log("Hello World");
}
console.log("---------------------");
let array = [];
    for(let one = 0; one<4; one++){
        let response = prompt("Enter a number");
        array.push(response);
    }
    for(let item of array){
        console.log(item);
    }
console.log("---------------");
for(let numberTwo = 0; numberTwo<15; numberTwo++){
    console.log("Hello numberTwo");
}
console.log("________");
// for loop
const arr = [1,2,3,4,5];
for(let i = 0; i<arr.length; i++){
    console.log(a[i],);
}
console.log("_+_+_+_+_+_");
// for of loop
for(let item of arr){
    console.log(item);
}
console.log("-_-_-_-_-_-__--__--__--");
// for in loop it use for objects 
let objects = {
    name: "Ali",
    fatherName: "Ahmad",
    lasrName: "Mohammadi",
    age: 17,
    grade: "ten",
    brothers: ["ali", "ahmad", "mohammad"],
    sisters: ['layla', 'zahra', 'nazanin'],
    moral: false,
    atendece: true
}
for(let value in objects){
    console.log(objects[value]);
}
console.log('+++++++++++++++++++++++++++++++++++');
// once agian
let h_2 = "Student information:";
const person = {
    name: "Fatima",
    fatherName: "Mahmod",
    lastName: "Ahmadi",
    age: 23,
    class: "Js",
}
for(let valueName in person){
    text += person[valueName]+"\n";
    h2.innerHTML = text;
}
console.log(`-------------------`);
//function vs metod
function add(a,b){
    let n = a+b;
    return n;
}
span.innerHTML = add(10,20);
// metod
let adddd= {
    additoinOne: function(){
        console.log(23+90);
    }
}
adddd.additoinOne();
console.log("-----------------");
// arrow function
let addddd = ()=>{
    return 5+5;
}
console.log(addddd());
console.log("__________");
// rested prameter
let zarb = (...a)=>{
    let result = 1;
    for(let item of a){
        result*= item;
    }
    return result;
}
alert(zarb(2,4,6,8,10));
console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
// once agian
function greetting(...name){
    for(i=0; i<name.length; i++){
        console.log(`Hi dear ${name[i]}`);
    }
}
greetting("Ali","Ahhmad","Mohmmod","Qasim");
console.log("sptead operator");
let person1 = {
    name: "Ali",
    class: "Js",
    time: 12-1
}
let person2 = {
    ...person1
}

// now working files
