// Variables and Types
let myString: string = 'Hello, world!';
const myNumber: number = 42;

// All of type 
let myBoolean: boolean = true;
let myArray: number[] = [1, 2, 3];
let myTuple: [string, number] = ['foo', 42];
enum Color {Red, Green, Blue};
let myColor: Color = Color.Green;
let myAny: any = 'this can be any type';
let myVoid: void = undefined;
let myNull: null = null;


// Functions
function addNumbers(a: number, b: number):number {
    return a + b;
  }

//   Interfaces
interface Person {
    firstName: string;
    lastName: string;
    age: number;
  }
  
  function sayHello(person: Person): void {
    console.log(`Hello, ${person.firstName} ${person.lastName}!`);
  }
  
  // Classes
  class Person {
    firstName: string;
    lastName: string;
    age: number;
  
    constructor(firstName: string, lastName: string, age: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    sayHello(): void {
      console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
  }

  const john = new Person('John', 'Doe', 30);
  john.sayHello(); // outputs "Hello, John Doe!"
  