function add3(a: number, b: number): number;
function add3(a: string, b: string): string;

function add3(a: any, b: any): any {
  return a + b;
}

console.log(add3(1, 2)); // 3
console.log(add3('Hello', ' World')); // "Hello World"