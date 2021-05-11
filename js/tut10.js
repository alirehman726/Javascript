console.log("Welcome to tut10")

// const mygreet = function(name, thanks = 'Thnk you') {
//     let msg = `The ${name} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ${thanks}!`;
//     return msg;
// }
// let name = 'Rehmanali';
// let val = mygreet(name, 'thanks you');
// console.log(val); 




// const myobj = {
//     name : function() {
//         return 'Mobile';
//     },
//     game : function() {
//         return 'PUBG';
//     },
// }
// console.log(myobj.game(), myobj.name());




// let game = ['PUBGM', 'COD', 'ApexL', 'Amongus'];
// game.forEach(function(element, index, array){
//     console.log(element, index, array);
// });


if (1){
    var i = 234;// It's gobal
    console.log(i);
}
// console.log(i);
function ui(name) {
    let i = 9; //It's Local
    console.log(i);
    return `This is ${name}`;
}
console.log(ui('Rehmanali'), i);