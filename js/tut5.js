//  type conversion and type coercion


console.log("Welcome to tut5");

let myVar;
myVar = String(50);

// console.log(myVar, (typeof myVar));

let boolValue = String(true);
// console.log(boolValue, (typeof boolValue));

let date = String(new Date());
// console.log(date, (typeof date));


let arrValue = String([1,2,3,4,5,6]);
// console.log(arrValue.length, (typeof arrValue));


let i = false;
// console.log(i.toString());

let strValue = Number("3456");
strValue = Number(false);
// console.log(strValue, (typeof strValue));

let number = parseFloat('35.415');
// console.log(number.toFixed(5), (typeof number));


let myStr = "123";
let myNum = 321;

console.log(myStr + myNum);