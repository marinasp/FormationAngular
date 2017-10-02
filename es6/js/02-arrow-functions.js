//en ES5
 var greeting = function () {
     //instruction
 }
 //calll function
 greeting();


 //en ES6
 let greeting1= ()  => {
     console.log('test');
 }
 greeting1();
 let greeting2 = ()  => console.log('test');

 let greeting3= (arg1)  => {
    console.log('test'+arg1);
    }
let greeting2 = (arg1)  => console.log('test'+arg1);

//function with object es5
var dog = {
    name: 'tchatcha',
    toys: ['ball','ballon'],
    getToys: function() {
        this.toys.forEach( function(toy) {
            var sentence = this.name + "joue avec 1 "+toy;
            console.log(sentence);
        }

        )
    }
}
dog.getToys();

//function with object es5
let dog2 = {
    name: 'tchatcha',
    toys: ['ball','ballon'],
    getToys: function() {
        this.toys.forEach( (toy) => {
            var sentence= this.name + "joue avec 1 "+toy;
            console.log(sentence);
        })
    }
}

dog2.getToys();