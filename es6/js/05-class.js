//ES5
function Car(brand,color) {
    this.brand = brand;
    this.color = color;
}

var myCar = new Car('KIA', 'red');
console.log(myCar);

Car.prototype.klaxone = function() {
    console.log('tuuuut');
}

myCar.klaxone();

console.log('------------------');

//ES6
class Vehicle {
    constructor(brand,color) {
        this.brand = brand;
        this.color = color;
    }

    klaxone() {
        console.log('taaaaaaat');
    }
}

let myVehicle = new Vehicle('Renault', 'gris');
console.log(myVehicle);
myVehicle.klaxone();
console.log('------------------');

class VoitureCourse extends Vehicle {
    constructor(brand,color,vitesse) {
        super(brand,color);
        this.vitesse = vitesse;
    }
    turbo() {
        console.log('mise en route du turbo');
    }

    klaxone() {
        console.log('azertyuiop');
    }
    
}
let myVehiculeCourse = new VoitureCourse('Ferrari', 'gris','130');
console.log(myVehiculeCourse);
myVehiculeCourse.turbo();
myVehiculeCourse.klaxone();
console.log('------------------');
