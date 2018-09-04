//Constructor Pattern: Basic constructor
function Car(model, year){

    this.model = model;
    this.year = year;

    this.toString = function() {
        return "A Car with model: " + this.model + ",years: " + this.year;
    }
}


var carA = new Car('Toyota', 2015);
var carB = new Car('Ford', 2016);

console.log(carA.toString());
console.log(carB.toString());


//Constructor Pattern: Constructor with Prototypes
function Moto(model, year) {

    this.model = model;
    this.year = year;
}

Moto.prototype.toString = function() {
    return "A Car with model: " + this.model + ",years: " + this.year;
};

var motoYamaha = new Moto('yahama', 2012);
var motoHonda = new Moto('Honda', 2011);

console.log(motoHonda.toString());
console.log(motoYamaha.toString());


