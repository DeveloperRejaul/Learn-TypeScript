/**
 * In TypeScript, you can achieve constructor overloading by using multiple constructor
 * definitions with different parameter lists in a single class. Given below is the example
 * where we have multiple definitions for the constructor:
 */

class Point12 {
    // Overloads
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any) {
      // TBD
    }
}