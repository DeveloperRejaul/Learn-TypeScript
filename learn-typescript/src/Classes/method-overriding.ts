class Animal3 {
    makeSound(): void {
      console.log('Making animal sound');
    }
}
  
class Dog3 extends Animal3 {
    makeSound(): void {
        console.log('Bark');
    }
}
  
new Dog3().makeSound()