/**
 * const objectValues = [[a, 1],[b, {key1: 1, key2: 2}],[c, [1,2,3]]]
 * The objectValues array has a very vasic structure on each item:
 * key and value
 * based on this array, create a function that takes an array like this
 * and returns and object with the keys and values from the array
 * {
 *  a: 1,
 *  b: {
 *         key1: 1,
 *         key2: 2
 *      },
 *  ...
 * }
 *  if at some point the array contains a duplicated key, you must merge both values
 *  the length of the array could be 1 to N
 * Assume that array always contains values and never its null or undefined
 * export this function as default
 * create a new file named index.js
 * import your function and log and example
 */
const objectValues = [
  ["a", 1],
  ["b", { key1: 1, key2: 2 }],
  ["c", [1, 2, 3]],
  ["a", 1],
  ["b", { key3: 1, key4: 2 }],
];
[1, 1, 1, 1, 1, 1];
[1];

const mergeFunction = {
  number: (item1, item2) => item1 + item2,
  string: (item1, item2) => item1 + item2,
  object: (item1, item2) => ({ ...item1, ...item2 }), // { return {...item1, ...item2}}
  array: (item1, item2) => [...item1, ...item2],
};
const getObjectKeysValues = (param) => {
  const result = {};
  for (const array of param) {
    //
    if (result[array[0]]) {
      const variableType = typeof result[array[0]];
      //   switch (variableType) {
      //     case "number":
      //       result[array[0]] = result[array[0]] + array[1];
      //       break;
      //     case "string":
      //       result[array[0]] = result[array[0]] + array[1];
      //       break;
      //     case "object":
      //       result[array[0]] = { ...result[array[0]], ...array[1] };
      //       break;
      //     case "array":
      //       result[array[0]] = [...result[array[0]], ...array[1]];
      //       break;
      //   }
      result[array[0]] = mergeFunction[variableType](
        result[array[0]],
        array[1]
      );
      //   result[array[0]] = { ...result[array[0]], ...array[1] };
    } else {
      result[array[0]] = array[1];
    }
  }
  return result;
};

// not operator
// const user = null; // undefined, false, 0
// if (!user) {
//   getUser();
// }
// let loading = false;
// loading = !loading;
// if(!loading){
//     ...
// }
const a = "1";
const b = 1;
// ===, ==, <, > , <==, >==
// +, -, / , *
// || , &&, !

console.log(getObjectKeysValues(objectValues), typeof {});


