// The keyof operator in TypeScript is used to get the union of keys from an object type. 
// Here’s an example of how it can be used:
interface User1 {
    name: string;
    age: number;
    location: string;
}
  
type UserKeys = keyof User1; // "name" | "age" | "location"
const key: UserKeys = 'name';