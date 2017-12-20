// function square(x) {
//   return x * x;
// };

// console.log(square(8));

// // Arrow function: 
// // const squareArrow = (x) => { 
// //   return x * x; 
// // };

// // shorthand arrow syntax of above function
// const squareArrow = (x) => x * x;

// console.log(squareArrow(9));

// const getFirstNameArrow = (fullName) => {
//   return fullName.split(' ')[0];
// }

// const getFirstName = (fullName) => fullName.split(' ')[0];

// console.log(getFirstNameArrow('Caroline Yoon'));
// console.log(getFirstName('Caroline Yoon'));

const add = (a, b) => {
  //console.log(arguments);
  return a + b;
}

console.log(add(55, 1));

//this keyword is no longer bound 

const user = {
  name: 'Caroline',
  cities: ['SF', 'LA', 'NY'],
  printPlacesLived() {
   return this.cities.map((city) => this.name + 'has lived in ' + city); 
  }
};
console.log(user.printPlacesLived());

const multiplier = {
   numbers: [1, 2, 3],
   multiplyBy: 4,
   multiply() {
    return this.numbers.map((number) => number * this.multiplyBy) 
   }
}

console.log(multiplier.multiply());