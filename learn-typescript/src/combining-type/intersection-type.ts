/**
 * An intersection type creates a new type by combining multiple existing types. 
 * The new type has all features of the existing types. To combine types, you use the & operator as follows:
 */
type typeA = {x: number};
type typeB = {y: string};


// intersection type 
type intersectionType = typeA & typeB;

function add  (params: intersectionType) {
    console.log(params.x + params.y);
}

add({x: 10, y:'10'})
