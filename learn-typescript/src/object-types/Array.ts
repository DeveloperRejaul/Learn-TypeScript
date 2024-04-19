const numbers: number[] = [1, 2, 3];


// multiple type in array
type numberAndStringType = (number | string | {name:string, age:number})[];
const numbers2: numberAndStringType = [1, 2, 3, "hello", {name:"rejaul", age:22}];