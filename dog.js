var chalk = require('chalk');

function Dog(name) {
	// body...
	this.name = name;
	this.stomach =[];
}

Dog.prototype.sayHi = function() {
	console.log('Hi, I Am A Dog , my name is '+ chalk.blue(this.name));
};
module.exports = Dog;