
console.log('Welcome to tut13');

let a = document.links;

Array.from(a).forEach(function(element) {
    let m = element.href;
    if(m.include('rehmanali')) 
        console.log(m);
    
});