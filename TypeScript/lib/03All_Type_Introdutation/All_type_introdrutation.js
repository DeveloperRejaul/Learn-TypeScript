"use strict";
// Variables and Types
var myString = 'Hello, world!';
var myNumber = 42;
// All of type 
var myBoolean = true;
var myArray = [1, 2, 3];
var myTuple = ['foo', 42];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var myColor = Color.Green;
var myAny = 'this can be any type';
var myVoid = undefined;
var myNull = null;
// Functions
function addNumbers(a, b) {
    return a + b;
}
function sayHello(person) {
    console.log("Hello, ".concat(person.firstName, " ").concat(person.lastName, "!"));
}
// Classes
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log("Hello, ".concat(this.firstName, " ").concat(this.lastName, "!"));
    };
    return Person;
}());
var john = new Person('John', 'Doe', 30);
john.sayHello(); // outputs "Hello, John Doe!"
