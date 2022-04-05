// @author  Azmi
// @date    6/4/2022

// because the use node to run this file, I need to use the require function to import the array
const { performance } = require('perf_hooks');

// @desc    function to find "nemo" in an array
// this function use perfomance timer to measure runtime
// this kind of measurements are not accurate, but it is a good way to measure runtime
const findNemo = (array) => {
  // javascript built in tool to measure the time it takes to run a function (timer)
  // timer starts
  let t0 = performance.now();
  // loop through the array
  for (let i = 0; i < array.length; i++) {
    // if the value of the array at the current index is "nemo"
    if (array[i] === 'nemo') {
      console.log('Found Nemo!');
    }
  }
  // timer ends
  let t1 = performance.now();
  // outputs runtime of the function
  // time depends on computer specs, so it's not always the same on every computer
  console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds');
};

const nemo = ['nemo'];
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
];
// create an array with 100 value filled with fill param
const large = new Array(10000000).fill('nemos');

// this will run faster
findNemo(nemo);
// this will run slower
findNemo(large);

// end note
// it's gonna be better to use big-o notation where it's gonna be a language used for talking about how long an algorithm takes to run
// Big-o can compare which algorithm is better than other regardless of the computer specs
