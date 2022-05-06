// alert('this is external calling');

// functions 

//function without parameters
//function without return

//function with parameters
//function with return


// function marriage(gift1, gift2){
//   return gift1;
// }


let width = 25;
let hight = 10;

console.log(width * hight);


width = 12;
hight = 6;

console.log(width * hight);


// function calPalce(w, h)
// {
//     console.log(w * h);
// }

function calPalce(w, h)
{
    return w * h;
}

calPalce(45,10);
calPalce(4,10);
calPalce(48,10);
calPalce(55,10);

//ES6
function calPalce2(w = 10, h = 5)
{
    v = w * h;
    console.log(sub(v));
}
calPalce2();

//child functon
function sub(v)
{
   return v-10;
}

// function expperssion
let getMyData = function(w,h){
    v = w * h;
    console.log(v);
}

getMyData(500,100);

//arrow functions 
const rectCal = (w,h) => console.log(w*h);
rectCal(11,22); 


// const funcName = () => {};



// objects 
let firstName = "Siddhu";
let lastName = "roy";
let Age = 30;

let myDetails =[
{
    firstName:"Siddhu",
    lastName:"SiRoyddhu",
    Age:30,
    my:{
        firstName:"siva",
        lastName:"djg",
        Age:30,
        my:{
            firstName:"siva",
            lastName:"djg",
            Age:30,
        }
    }
},
{
    firstName:"siva",
    lastName:"djg",
    Age:30,
},
{
    firstName:"gokul",
    lastName:"dsf",
    Age:30,
}] ;

console.log(typeof myDetails);
console.log(myDetails[1].firstName);

//Arrays
let arr = ["orng","bana","grpp"];
console.log(arr[1]);

let mySeelf = ["Siddhu","roy","28", ["orng","bana","grpp", ["Elep","bana","grpp"]]];
console.log(mySeelf[3][2]);
console.log(mySeelf[3][3][0]);

//task 1
//Vinod => 10; Gokul = 100; Rajesh = -500;

//vinod(5,'minus');
//vinod(5,'plus');
// console.log(vinod);


//task2
// 6:{}

//task 3

//for loops
// while
// do while
// scope
// block
// array built in methods
// string built in methods
// date format
// Dom
// classes oops
// js errors handling
// js regx
// JS Async

