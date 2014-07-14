/*global prompt:true */
var prompt = require('sync-prompt').prompt;

var dog = {};

dog.name = 'fido';
dog.age = 3;
dog.gender = 'male';
dog.breed = 'labrador';

console.log(dog);

var dog2 = {name:'sam', age:4};

console.log(dog2);

/////////////////////////////////////////////

/*
var dogname = prompt('What is your dog\'s name? ');
var dogage = prompt('What is your dog\'s age? ');
var dogbreed = prompt('What breed of dog is it? ');
var gender = prompt('(m)ale or (f)emale? ');

  var thedog = {name:dogname, age:dogage, breed:dogbreed, thegender: gender };

console.log(thedog);
*/

var dogs = [];

var input = prompt('Would you like to creat a dog? (y)es to continue or (q)uit ');
while( input !== 'q'){
  var name = prompt('Whats the dogs name? ');
  var age = prompt('What is the dogs age? ');
  var breed = prompt('What breed? ');
  var color = prompt('Finnaly, what color? ');

   dog = {name: name, age: age, type: breed, color: color};
    dogs.push(dog);
   input = prompt('Would you like to creat a dog? (y)es to continue or (q)uit ');

}


console.log(dogs);

