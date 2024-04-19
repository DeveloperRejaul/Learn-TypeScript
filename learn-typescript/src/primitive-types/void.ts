
type voidFn = ()=> void

// normal void return function 
function noop():void {
    return;
}

const noop2:voidFn = () =>  {
 return;
}

const noop3:voidFn = function () {
    return;
}