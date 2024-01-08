function greet(){
    console.log("hey there");
    console.log("how are you");
}

function sqr(x){  // x --> parameter
    // console.log(x*x);
    return x*x;
}
greet();

let a = sqr(8); // 8 --> arguments

console.log("hey",a);

function SumOfTwoNumber(x,y){
    return x + y;
}


let answer = SumOfTwoNumber(4,5)
console.log(answer);