/**
 * Generic types in TypeScript allow you to write objects, functions and classes that work with multiple data types, 
 * instead of being limited to a single data type. A generic type is defined using angle 
 * brackets <T> and can be used as a placeholder for a specific data type. The actual data type is specified
 * when the function or class is used.
 */

function identity<T>(arg: T): T {
    return arg;
}
  
let output = identity<string>('Hello'); // type of output will be 'string'



// example in class
class GenericNumber<NumType> {
    zeroValue!: NumType;
    add!: (x: NumType, y: NumType) => NumType;
}
   
let myGenericNumber = new GenericNumber<number>();

myGenericNumber.zeroValue = 0;

myGenericNumber.add = function (x, y) {
    return x + y;
};