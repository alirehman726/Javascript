

console.log('Welcome to tut20');

let impArray = ['orange', 'banana', 'mango']

//  1.  Local Storage

// localStorage.setItem('Name', 'Rehmanali');
// localStorage.setItem('Name2', 'Agharia');
// localStorage.setItem('friute', JSON.stringify(impArray));
// // localStorage.clear();
// // localStorage.removeItem('Name')
// // localStorage.removeItem('Name2');
// let name = localStorage.getItem('Name');
// name = localStorage.getItem('friute')
// console.log(name);


//  2.  Session Storage

sessionStorage.setItem('Name', 'Naqvi');
sessionStorage.setItem('Name1', 'Bemo');
// sessionStorage.clear();
// sessionStorage.removeItem('Name1');
sessionStorage.setItem('friute', JSON.parse(impArray))
let data = sessionStorage.getItem('Name1');
console.log(data);