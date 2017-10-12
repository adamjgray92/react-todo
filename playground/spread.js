// function add(a, b){
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Adam', 'Jack'];
// var groupB = ['Chris', 'Liam'];
//
// var final = [3, ...groupA];
//
// console.log(final);

var person = ['Adam', 25];
var personTwo = ['Jen', 29];

function greetings(name, age){
  console.log('Hi ' + name + ', you are ' + age);
}

greetings(...person);
greetings(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Adam', ...names];

final.forEach(function(name){
  console.log('Hi ' + name);
});
