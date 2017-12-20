var nameVar = 'Caroline';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie'
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
  var petName = 'Jersey';
  // must return the variable to access outside the function
  return petName;
}


// Block scoping
// firstName is not accessible outside the code block
// Can define the variable first above the block and reassign the value

const fullName = 'Caroline Yoon';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0]
  console.log(firstName);
}

console.log(firstName);