
console.log('Welcome to tut16');


let data = document.createElement('li');
// let result = document.createTextNode('Rehmanali Agharia');
// data.appendChild(result);
// data.style.color = 'red';

data.className = 'childul';
data.id = 'createdLi';
data.setAttribute('title', 'mytitle');
data.innerText = 'Rehmanali_123';
let ul = document.querySelector('ul.this');
ul.appendChild(data);
// console.log(ul);
// console.log(data);

let data2 = document.createElement('h3');
data2.id = 'data2';
data2.className = 'data2'
let result2 = document.createTextNode('This is created node');
data2.appendChild(result2);
console.log(data2);


let myul = document.getElementById('myul');
myul.replaceChild(data, document.getElementById('ful'))
myul.removeChild(document.getElementById('lul'));

let final = data2.getAttribute('id');
data2.removeAttribute('id');
data2.setAttribute('id', 'data2');
console.log(final);


// let data3 = document.createElement('h2');
// data3.className = 'data3';
// data3.id = 'data3';
// data3.setAttribute('title', 'data3_title');
// let data4 = document.createElement('a');
// data4.href = 'https://www.google.com';
// data3.appendChild(data4);
// let result3 = document.querySelector('div#dummy1');
// result3.appendChild(data3);
// console.log(result3);

