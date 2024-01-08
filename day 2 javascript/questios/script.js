let a = 3;
let b = new Number (3);
let c = 3;
console.log(a == b);
console.log(a === b);
console.log(b === c);
console.log(typeof(b))
//---------------------------------------

let greeting;
greetign = {};
console.log(greetign);
console.log(typeof(greetign))
//----------------------------------------

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
//---------------------------------------

const sum =eval("10*10+5")
console.log(sum);
//----------------------------------------

var num = 8;
var num = 10;
console.log(num)
//------------------------------------------

// var x = 20;
// var y = x > 10 ? x < 30 : "x is not greater than 10 and not less than 30";
// console.log(y)
//-------------------------------------

// var x = "20";
// switch(x){
//     case 20:
//         console.log("x is equal to 20");
//         break;
        
//     default:
//         console.log("x is not equal to 20");

// }
//-------------------------------------------

var x = 20;
switch (x) {
    case x < 20:
    console.log("x is less than 20");
    break;

    case x > 20:
        console.log("x is greater than 20");
        break;

    default:
        console.log("x is equal to 20");

}

var day = "monday";
switch (day){
    case "monday":
        console.log("today is monday")
        break;

    case "tuesday":
        console.log("today is tuesday")
        break;

    default:
        console.log("today is not monday or tuesday");

}
