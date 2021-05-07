

console.log("Welcome to tut7");

let marks = [20,30,40,50,60,70,80,90];
let friute = ['Apple', 'Banana', 'Orange', 'mango'];
let mixed = [20, 'name', 50, 'abcd'];

let arr = new Array(17,28,38,54, 'cat');
// console.log(arr);
// console.log(marks);
// console.log(friute);
// console.log(mixed[2]);
// console.log(mixed.length);
// console.log(Array.isArray('cat'));
// mixed[1] = "Rehmanali"
// console.log(mixed);

// console.log(marks);
let value = marks.indexOf(80);
// console.log(value);

// marks.push(900)
// marks.unshift(900)
// marks.pop()
// marks.shift()
// marks.splice(1,3);
// marks.reverse();

let marks2 = [2,3,4,5,6,7,8,9];
marks = marks.concat(marks2)
// console.log(marks);


let myObj = {
    'first name' : 'Rehmanali',
    channel : 'PUBG Mobile',
    isActive : true,
    marks : [1,2,3,4,5,6],
}

console.log(myObj['first name']);
console.log(myObj['channel']);
