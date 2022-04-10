// Create a function that reverses a string
// 'Hi My name is Azmi' should be:
// 'imzA si eman yM iH'

const string = 'Hi My name is Azmi';

/**
 * @desc reverse a string
 * @param {string} str
 * @returns {string}
 */
function reverse(str) {
  // check if param not exist, param length <2, param type not string
  if (!str || str.length < 2 || typeof str !== 'string') {
    return `Hmm, that's not seems right?`;
  }
  // initiate newStrings container
  let backwards = [];
  // iterate from last to first array
  for (let i = str.length - 1; i >= 0; i--) {
    // in javascript we can use str as an array and access each property with bracket notation
    backwards.push(str[i]);
  }
  // return as string
  return backwards.join('');
}

console.log(reverse(string));

/**
 * @desc reverse a string, more readable and clean
 * @param {string} str
 * @returns {string}
 */
function reverse2(str) {
  // string to array using split('') => reverse using array builtin reverse() => array to string using join('')
  return str.split('').reverse().join('');
}

console.log(reverse2(string));

/**
 * @desc reverse a string. readable, clean and one line only, using ES6
 * @param {string} str
 * @returns {string}
 */
const reverse3 = (str) => str.split('').reverse().join('');

console.log(reverse3(string));

/**
 * @desc reverse a string. readable, clean and one line only, more fancy using destructuring, ES6
 * @param {string} str
 * @returns {string}
 */
const reverse4 = (str) => [...str].reverse().join('');

console.log(reverse4(string));
