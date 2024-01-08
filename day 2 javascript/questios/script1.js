console.log(typeof typeof 1)
//----------------------

const numbers = [1, 2, 3];
numbers [10] = 11;
console.log(numbers);
//---------------------

console.log (3 + 4 + "5");
//--------------------------

console.log ("i enrolled to the pw FSWD cousre"[0]);
//--------------------------

// const name = "pwskills";
// console.log(name());

const one = false || {} || null ;
const two = null || false || "" ;
const three = [] || 0 || true ;
console.log(one, two, three);
//----------------------------

let x = 2 ;
let y = "2" ;
console.log(x === y)
//----------------------------------

const name = "pw skills";
console.log("hello")
console.log(! typeof name === "string");
console.log(! typeof name === "object");
//-----------------------------------------

for (let i = 0; i < 5; i++){
    console.log(i);
}
//------------------------------------

var g = 0;
while (g < 5){
    console.log(g);
    g++;
}
//-----------------------------------

var t = 1;
do {
    console.log(t);
    t++;
}while(t < 5);
//-----------------------------------------

for (var p = 2; p < 5; p++ ){
    if (p === 3) {
        break;
    }
    console.log(p);
}
//-----------------------------------

for (var v = 2; v < 5; v++){
    if (v === 3) {
        continue;
    }
    console.log(v);
}

console.log("hey")

var h = [1, 2, 3, 4, 5];
for (var i in h) {
    if (h[i] % 2 === 0){
        console.log(h[i]);
    }
}