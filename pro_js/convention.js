function Foo() {
	this.bar = 'value';
}

Foo.prototype.getMessage = function () {
	console.log(this.bar);
}

a = new Foo();
a.getMessage();


