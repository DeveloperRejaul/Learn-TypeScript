type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}



// use cases 
function swim () {
    console.log("swim");
}
function fly () {
    console.log("fly");
}

move({swim})
move({fly})