/**
 * Decorators are a feature of TypeScript that allow you to modify the behavior of a class, property, method,
 * or parameter. They are a way to add additional functionality to existing code, and they can be used for
 * a wide range of tasks, including logging, performance optimization, and validation.
 */

function log (value: boolean){
    if(!value){throw "invalid value"}
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
        console.log(descriptor);
        console.log("call log decorator");
    }
}


function log2( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (a:number, b:number) {
        if(a===0) throw "invalid a value" 
        if(b===2) throw "invalid b value" 
        return originalMethod.apply(this, [a,b]);
    };
    return descriptor;
}



class Calculator {
    @log(true)
    @log2
    add(a: number, b: number): number {
        return a + b;
    }
}
  
const calculator = new Calculator();
const result = calculator.add(2, 3);
console.log(result);

