var Dog = require('./Dog');
var Mouse = require('./Mouse');
var Mouse = require('./Cat');

var cat = new Cat();
var mouse = new Mouse('Mickey');
var dog = new Dog('');
try{
	cat.eat(dog);
}
catch(error){
	console.log('Error error error');
}
cat.eat(mouse);
console.log(mouse);
dog.sayHi();