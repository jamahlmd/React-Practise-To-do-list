/**
 * Created by Jams on 21/01/2018.
 */
console.log("utils.js is running");


// 1 default export
 const substract = (a,b) => a - b;


// x aantal named exports  --// no object
 const square = (x) => x * x;

 const add = (a,b) => a + b;

export {square, add , substract as default};
