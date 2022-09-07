// how declare variables
const integer = 1;
const string = "rando string";
const exampleKey = 'exampleKey';
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

let variableValue = "";
variableValue = object;
variableValue = [];

// declaring an arrow function
const getObjectKeysValues = (object) => {
  const keys = Object.keys(object); // this will return an array with the keys from object ['randomKey', 'nested']
  // now we can iterate over the array
  for (const key of keys) {
    result.push(object[key]);
  }
  return keys;
};

// const variable = ''
// variable = object => this will throw an error;
