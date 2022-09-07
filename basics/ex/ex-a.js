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