function add2(a: number, b: number): number {
    return a + b;
}

const multiply = (a: number, b: number): number => {
    return a * b;
};

let divide: (a: number, b: number) => number;

divide = (a, b) => {
  return a / b;
};