// alert('this is external calling');

// functions 

//function without parameters
//function without return

//function with parameters
//function with return
// function experssion
// arrow functions

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
//  iterations


// date format
// Dom


// classes oops


// js errors handling
// js regx
// JS Async


let a = ['apple', 'mango','orng', 'banana','grape','Pineapple'];
let bb = "Siddhartha";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(bb.length);
console.log(a.length);
z = 0;

if(z < 20){
    console.log("yes true");
}


for(i=1;i<=20;i++)
{
  console.log('2 x '+i+' = '+ (2*i));  
}

console.log('----------------');

for(i=20;i>=1;i--)
{
    if(i == 10){
        console.log('this is =>'+ i);
        break;
    }
  console.log('2 x '+i+' = '+ (2*i));  
}


for(j=0;j<a.length;j++)
{
    console.log(j);
    console.log(a[j]);
}



console.log('----');
let nums = [1,2,4,5,67,88,96,333];

let numSum = 0;
for(q=0;q<nums.length;q++){
    numSum += nums[q];
}
console.log('Total sum: '+numSum);

// while 
for(i=1;i<=20;i++)
{
  console.log('2 x '+i+' = '+ (2*i));  
}

let numB = 1;
while(numB<=20){
    console.log('3 x '+numB+' = '+ (3*numB));      
    numB++;
}

console.log('------------');
//iterations
nums.forEach(element => {
    console.log(element);
});


//diff while vs for
// diff do while vs while

//scope

//  b = 40;
//  console.log(b);
//  database = "siddhfhnfhn";
//  console.log(database);

// block

let news = "telugu";

if(true){
    console.log("siddhu");
    let news = "English";
    console.log(news);
}

console.log(news);


//Array build in methods

let arrY = ['moon','sun','stars','clouds','rainbow','parrot'];

//property
console.log(arrY.length);

//methods
// let nMn = [];
// for(w=0;w<arrY.length;w++){
//     console.log(arrY[w]);

//     if(arrY[w] !== 'parrot'){
//         nMn[w] = arrY[w];
//     }
// }

// console.log(nMn);
arrY.pop();
arrY.pop();
arrY.pop();
arrY.pop();
console.log(arrY);

// Task 1
// How to delete particular array value?


let cart = ['soup','paste','shapoo'];

cart.push('Toothppaste');
cart.push(['brush','cloths','eggs']);
console.log(cart);





const mapEx = nums.map(num => {
 return num*2;
});
console.log(mapEx);

//task2
//reduce(), filters(), findofindex(), isarray()