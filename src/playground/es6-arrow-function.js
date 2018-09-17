// /**
//  * Created by Jams on 18/12/2017.
//  */
//
//
// const  square = function calc(x) {
//   return x * x;
// };
//
// // const arrow = (x) => {
// //   return x * x;
// // };
//
// const arrow = (x) => x * x;
//
//
// console.log(arrow(9));
const fullName = 'Jamahl Mac-Donald';
let firstName;


const getFirstName = (fullName) => fullName.split(' ')[0];
const getFirstName2 = (fullName) => {
    firstName = fullName.split(' ')[0];
    return firstName;
};


console.log(getFirstName(fullName));
console.log(getFirstName2(fullName));