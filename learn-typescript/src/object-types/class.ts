 class Car {
  private make: string;
  private model: string;
  private year: number;

  readonly password: string = "123456";

  public name: string;
  public age: number;

  constructor(make: string, model: string, year: number, public str: string ) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.name = "";
    this.age = 0;
  }

  drive() {
    console.log(`Driving my ${this.year} ${this.make} ${this.model} ${this.password}`);
  }
};

//============================== class implements ====================================
interface Checkable {
  check(name: string): boolean;
}
class NameChecker implements Checkable {
  check(name: string): boolean {
    return true
  }
}


// ======================== protected methods ===================================
class Greeter {
  public greet() {
    console.log("Hello, " + this.getName());
  }

  // we can use in internal functions not accessible in public methods
  // we can also access sub classes
  protected getName() {
    return "hi";
  }
}
// new Greeter().greet()

class Greeter2 extends Greeter {
  constructor(){
    super()
  }

  test(){
    this.getName()
  }
  
}

//=============================== staticBlocks in Classes ====================================
/**
 * Static blocks allow you to write a sequence of statements with their own scope that can access
 * private fields within the containing class. This means that we can write initialization code 
 * with all the capabilities of writing statements, no leakage of variables, and full access to our
 * class’s internals.
 */
class Foo {
  static #count = 0;

  get count() {
      return Foo.#count;
  }

  static {
      try {
         
          Foo.#count;
      }
      catch {}
  }
}
//=============================== Generic Classes ====================================
class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}
 
const b = new Box("hello!"); 


//=============================== Constructor Signatures ====================================
class Point {
  constructor(public x: number, public y: number , public createdAt : number = Date.now()) {}
  }

  type PointInstance = InstanceType<typeof Point>
   
  function moveRight(point: PointInstance) {
    point.x += 5;
  }
   
  const point = new Point(3, 4);
  moveRight(point);
  // console.log(point.x);
  
//=============================== Abstract Classes and Members ====================================
abstract class Base {
  abstract getName(): string;
 
  printName() {
    console.log("Hello, " + this.getName());
  }
}

class Driving extends Base {
  getName(): string {
    return "hello world"
  }
  printName(): void {
    console.log("Hello");
  }
}
// console.log(new Driving().printName());






