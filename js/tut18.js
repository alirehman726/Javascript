

console.log('Welcome to tut18');

// let btn = document.getElementById('btn');
// btn = document.addEventListener('click', func1);
// btn = document.addEventListener('dblclick', func2);
// // btn = document.addEventListener('mousedown', func3);

// function func1(e) {
//     console.log('Thanks for the click', e);
// }

// function func2(e) {
//     console.log('Thanks for the double click', e);
// }

// function func3(e) {
//     console.log('Thanks for the mouse down', e);
// }



// document.querySelector('.no').addEventListener('mouseenter', function () {
//     console.log('You enter no')
// });

// document.querySelector('.no').addEventListener('mouseleave', function () {
//     console.log('You leave no');
// });


document.querySelector('.container').addEventListener('mousemove', function (e) {
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX}, ${e.offsetY})`
    console.log('Your mouse move');
});




