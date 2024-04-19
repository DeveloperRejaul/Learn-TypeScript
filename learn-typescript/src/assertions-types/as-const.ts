/**
 * as const is a type assertion in TypeScript that allows you to assert that an expression has a specific type,
 * and that its value should be treated as a read-only value
 */
const colors = ['red', 'green', 'blue'] as const; // readonly



// Type '"hello"'
let x = "hello" as const;
// Type 'readonly [10, 20]'
let y = [10, 20] as const;
// Type '{ readonly text: "hello" }'
let z = { text: "hello" } as const;



//============================= Outside of .tsx files, the angle bracket assertion syntax can also be used. ===============
// Type '"hello"'
let x2 = <const>"hello";
// Type 'readonly [10, 20]'
let y2 = <const>[10, 20];
// Type '{ readonly text: "hello" }'
let z2 = <const>{ text: "hello" };
