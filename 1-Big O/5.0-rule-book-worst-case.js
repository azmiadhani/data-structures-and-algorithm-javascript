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

// @desc    function to find "nemo" in an array
const findNemo = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log('running');
    if (array[i] === 'nemo') {
      console.log('Found Nemo!');
      // if found
      // this is more efficient code
      break;
      // but Big O only cares about the worst case, so this doesnt matter
    }
  }
};

findNemo(everyone);
