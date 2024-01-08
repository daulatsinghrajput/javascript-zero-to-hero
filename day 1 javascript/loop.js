// for loop
// we need three things first starting value, second condition, third increment 
// exp i = a; i>=b; i++;

for (let i = 0; i<5; i++) {
    console.log(i);
}

//while loop

let b = 0;
while(b < 5){
    console.log(b);
    b++;
}

//do while

let a = 0;
do{
    console.log("hello");
    a++;
} while(a < 5);

//ternary operater , condition
// condition ? true : false

let isLoggedin = true;
isLoggedin ? console.log("home page") : console.log("login page");