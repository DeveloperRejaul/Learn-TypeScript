interface INumType {
    x: number;
    y: number;
}
  
let p1: INumType = { x: 10, y: 20 };
let p2: { x: number; y: number } = p1;

console.log(p2.x); // Output: 10