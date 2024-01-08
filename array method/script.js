arr = [1,2,3,4,5];

console.log(arr);
// index 5 per 6 daldo
arr[5] = 6;
console.log(arr);
// array me 7,8,9 puch (dal) ker do
arr.push(7,8,9);
console.log(arr)
// array me se pop (ek hata do) ker do 
arr.pop();
console.log(arr);
// aage se hatana shift
let f = arr.shift();
console.log(arr);

//return shift value
console.log(f);

//aage se add kerna
arr.unshift("start",1);
console.log(arr);