function Cat(argument) {
	// body...
	this.stomach = [];
}
Cat.prototype.eat = function(animal) {
	if(animal instanceof Mouse){
		this.stomach.ps=ush(animal);
	}
	else{
		throw new Error ('Cat can not eat Mouse');
	}
}
module.exports = Cat;