declare let myString: string;
declare const myNumber: number;
declare let myBoolean: boolean;
declare let myArray: number[];
declare let myTuple: [string, number];
declare enum Color {
    Red = 0,
    Green = 1,
    Blue = 2
}
declare let myColor: Color;
declare let myAny: any;
declare let myVoid: void;
declare let myNull: null;
declare function addNumbers(a: number, b: number): number;
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}
declare function sayHello(person: Person): void;
declare class Person {
    firstName: string;
    lastName: string;
    age: number;
    constructor(firstName: string, lastName: string, age: number);
    sayHello(): void;
}
declare const john: Person;
