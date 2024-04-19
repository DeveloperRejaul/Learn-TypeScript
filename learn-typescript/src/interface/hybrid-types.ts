/**
 * In TypeScript, a hybrid type is a type that combines multiple types into a single type. 
 * The resulting type is considered a union of those types. 
 * This allows you to specify that a value can have multiple types, rather than just one.
 */

type StringOrNumber = string | number;

type Education = {
    degree: string;
    school: string;
    year: number;
  };
  
type User4 = {
    name: string;
    age: number;
    email: string;
    education: Education;
};