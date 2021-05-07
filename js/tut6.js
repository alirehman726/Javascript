
console.log('welcome to tut6');


let name = "Rehmanali";
let contant = "Good Moring";

// console.log(contant + '  ' + name);

let html;

html = "<h1> This is Heading </h1>" +
        " <p> This is My paragraph </p>";
html = html.concat(' this',' is') 
console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);
// console.log(html[5]);
// console.log(html.indexOf('This'));
// console.log(html.lastIndexOf('is'));
// console.log(html.charAt(5));
// console.log(html.endsWith('is'));
// console.log(html.includes('is'));
// console.log(html.substring(0,52));
// console.log(html.slice(0,10));
// console.log(html.split('<'));
// console.log(html.replace('This', 'There'));

let animal1 = 'Lion';
let animal2 = 'Tiger';
let myHtml = `Hello ${name}
                <h1>This is Heading</h1>
                <p>You like ${animal1} and ${animal2}</p>
            `;
document.body.innerHTML = myHtml;