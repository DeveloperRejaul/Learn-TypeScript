abstract class Animal {
   abstract makeSound ():void;

   move ():void {
    console.log("moving...");
   }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Dog");
    }
}
const d =  new Dog()
d.move()
d.makeSound()


