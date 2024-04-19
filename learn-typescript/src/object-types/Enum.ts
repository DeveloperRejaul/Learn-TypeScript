// ============================ Numeric enums ============================
// the value 1, Down has 2, Left has 3, and Right has 4.
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}
console.log(Direction.Down);

// ============================ String enums ============================
enum StrDirection {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

// ============================ Heterogeneous enums ============================
//Technically enums can be mixed with string and numeric members, but it’s not clear why you would ever want to do so:
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}


// ============================ enums type ============================
enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
}
type LogLevelStrings = keyof typeof LogLevel;  

function printImportant(key: LogLevelStrings, message: string) {
    const num =  LogLevel[key];
//    console.log(key);
//    console.log(typeof key);
   
//    console.log(num);
//    console.log(typeof num);
   
   
}
printImportant("WARN", "This is a message");

// ============================ calculation in enums ============================
const enum Enum {
    A = 1,
    B = A * 2,
}