

console.log('Welcome to tut15');


let data = document.querySelector('.no');
data = document.querySelector('.container');
let nodeName = data.childNodes[3].nodeName;
let nodeType = data.childNodes[3].nodeType;
// console.log(nodeName);
// console.log(nodeType);
// console.log(data.childNodes);
// console.log(data.children);

let result = document.querySelector('div.container');
// console.log(result.children[1].children[0].children);

// console.log(result.firstChild);
// console.log(result.firstElementChild);
// console.log(result.lastChild);
// console.log(result.lastElementChild);

// console.log(result.childElementCount);


console.log(result.firstElementChild.parentNode);
console.log(result.firstElementChild.nextSibling);
console.log(result.firstElementChild.nextElementSibling);
console.log(result.firstElementChild.nextElementSibling.nextElementSibling);