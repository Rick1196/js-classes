// how declare variables
const integer = 1;
const string = "rando string";
const exampleKey = "exampleKey";
const object = {
  randomKey: "randomValue",
  nested: {
    nestedKey: ["nestedValue"],
  },
};
// how to add a new property to an object
object[exampleKey] = integer;
// how to declare an array
const array = [integer, string, object];
// const arrayAt4 = array[4] -> undefined

let variableValue = ""; // initial declaration
variableValue = object; // replacing value
variableValue = []; // replacing value

// const variable = ''
// variable = object => this will throw an error;

// common function
// function exampleFunction({ radio, pi }) {}

// const { pi, radio } = calculateRandomValues();

// exampleFunction({ pi, radio });``

// spread ...
const newObject = { ...object, ...{ a: 1 } };
newObject[randomKey] = 1;
//
const newArray = [...array, ...[1, 2]]; //[integer, string, object, 1, 2]

// declaring an arrow function
const getObjectKeysValues = (param) => {
  const keys = Object.keys(param); // this will return an array with the keys from object ['randomKey', 'nested']
  // object doc: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object
  // now we can iterate over the array
  const result = [];
  // push
  // more methods visit: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
  for (const key of keys) {
    result.push(object[key]);
  }
  return result;
};

// getObjectKeysValues(object);

// export

// undefined null 0 false
const arrayWithItems = [];
if (arrayWithItems !== undefined || arrayWithItems !== null) {
  //...
} else if (arrayWithItems.length === 0) {
  arrayWithItems.push({});
}

// try catch
const divide = (a, b) => {
  try {
    // main code
    const result = a / 0;
    return result;
  } catch (error) {
    console.log(error);
    return "You cannot divide between 0";
  }
};

// typeof
let user = '';
console.log(typeof user); // string
user = {
  email:'',
  username: ''
}
console.log(typeof user); // object
user = [];
console.log(typeof user); // array
user = () =>{}
console.log(typeof user); // function



exports.array = array;
exports.object = object;
exports.getObjectKeysValues = getObjectKeysValues;
