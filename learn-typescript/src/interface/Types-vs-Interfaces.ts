/**
 * In TypeScript, both types and interfaces can be used to define the structure of objects and enforce type checks.
 * However, there are some differences between the two. Types are used to create a new named type based on an 
 * existing type or to combine existing types into a new type. They can be created using the type keyword. For example:
 */

type Person2 = {
    name: string;
    age: number;
};
  
const person: Person2 = {
    name: 'John Doe',
    age: 30,
};



interface Person3 {
    name: string;
    age: number;
}
  
const person2: Person3 = {
    name: 'John Doe',
    age: 30,
};