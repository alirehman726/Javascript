

console.log('Welcome to tut14');


//  1.  Single Element selector
// let strValue = document.querySelectorAll('#myfirst4');
// strValue.forEach(function(element) {
    //     console.log(element);
    // });
    
    let element = document.getElementById('myfirst1');
    // element = element.className;
    // element = element.childNodes;
    // element = element.parentNode;
    element.style.color = 'blue';
    element.innerText = 'Rehmanali1';
    element.innerHTML = '<b>Rehmanali</b>';
    // console.log(element);
    // console.log(element.innerText);
    // console.log(element.innerHTML);
    
    var sel = document.querySelector('#myfirst1');
    sel = document.querySelector('.child')
    // sel = document.querySelector('b');
    // sel = document.querySelector('h1');
    sel = document.querySelector('div');
    sel.style.color = 'green';
    // console.log(sel);
    
    
    
    
//  2.  Multi Element selector

// let data = document.getElementsByClassName('child');
// data = document.getElementsByClassName('container');
// data = document.getElementsByTagName('div');
// console.log(data);
// // console.log(data[0].getElementsByClassName('child'));

// Array.from(data).forEach(element => {
//     // console.log(element);
//     let result = element;
//     // console.log(result);
//     result = document.getElementById('myfirst2');
//     result.style.color = 'red';
// });


let data = document.getElementsByClassName('child');
data = document.getElementsByClassName('container');
data = document.getElementsByTagName('div');
console.log(data);

Array.from(data).forEach(element => {
    // console.log(element);
    let result = element;
    result = document.getElementById('myfirst2')
    result.style.color = 'red';
    console.log(result);
});
