

console.log('Welcome to tut8(IF Statment And Swich Loop)');

const age = 50;
const doesDrive = true;
// const vari = 30;

// if (age == 20) {
//     console.log('Age is 20');
// }else if (age == 25){
//     console.log('Age is 25');
// }else {
//     console.log('Age is not valid');
// }


// if (typeof vari !== 'undefined') {
//     console.log('Vari is define');
// }else {
//     console.log('Vari is not defind');
// }


// if (doesDrive && age>20) {
//     console.log('You can drive');
// }else {
//     console.log('You can not drive');
// }

// console.log(age == 20 ? 'Age is 20' : 'Age is not 20');


switch (age) {
    case 20:
        console.log('Age is 20');
        break;
    case 30:
        console.log('Age is 30');
        break;
    case 40:
        console.log('Age is 40');
        break;
    case 50:
        console.log('Age is 50');
        break;
    case 60:
        console.log('Age is 60');
        break;
        
    default:
        console.log('Age is undefined');
        break;
}