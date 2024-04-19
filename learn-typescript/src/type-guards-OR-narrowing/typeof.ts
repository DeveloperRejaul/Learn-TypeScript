//============ all typeof ==========
// "string"
// "number"
// "bigint"
// "boolean"
// "symbol"
// "undefined"
// "object"
// "function"


function printAll (params: string | string[] | null | Function | object | number | bigint | boolean  ): void {
   
    if(typeof params === "string") console.log("String parameter: " , params);
    if(typeof params === "number") console.log("Number parameter: ", params);
    if(typeof params === "function") console.log("Function parameter: ", JSON.stringify(params));

}

printAll("Hello world");