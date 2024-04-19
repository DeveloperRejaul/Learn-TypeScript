type status = "success" | "error" | "warning"

function printId(id: number | string) {
    console.log("Your ID is: " + id);
}

printId(`${Math.random()*100}`)
printId(Math.random()*100)