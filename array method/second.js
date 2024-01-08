let a = [1,2,3,4,5];
let b = [3,5,7];
// adding two array
let c = a.concat(b);
console.log(c);

// join ek saat
let d = c.join("*");
console.log(d);

//reverse array
let e = c.reverse();
console.log(e);

// find index 
console.log(c.indexOf(2));

let arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.slice(2, 6));

//bich me add kerna
arr.splice(3,0,12);
console.log(arr);

arr.splice(4,1,12);
console.log(arr);

arr.splice(4,3);
console.log(arr);