class Example {
    constructor(private name: string, public age: number) {}

    log(){
        console.log(this.age, this.name);
    }
}

const exm =  new Example ("Rezaul Karim", 20) 
exm.log()


// Super Calls
class Base2 {
    k = 4;
  }
   
class Derived2 extends Base2 {
    constructor() {
        super();
        console.log(this.k);
    }
}

new Derived2()