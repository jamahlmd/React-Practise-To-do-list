/**
 * Created by Jams on 18/12/2017.
 */
// arguments object - no longer bound

const add = (a,b) => {
    // console.log(arguments);
    return a + b;
};


console.log(add(55,1,100,1));

//this keyword - no longer bound


const user = {
  name: 'Jams',
    cities:[
        'ally',
        'dammie'
    ],
    printPlacesLived() {
        return this.cities.map((cur)=>`${this.name} has lived in ${cur}!`);
    }
};


console.log(user.printPlacesLived());

const multiplier = {
  numbers:[20,13,56,33],
    multiplyBy: 2,
    multiply(){
      return this.numbers.map((cur) => cur * this.multiplyBy);
    }
};

console.log(multiplier.numbers);
console.log(multiplier.multiply());