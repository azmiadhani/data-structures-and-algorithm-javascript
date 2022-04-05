// @author @azmiadhani
// @date   7/4/2022

// @desc    function to find "nemo" in an array
const findNemo = (array) => {
  // loop through the array
  for (let i = 0; i < array.length; i++) {
    // if the value of the array at the current index is "nemo"
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
    }
  }
};

const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
// create an array with 100 value filled with fill param
const large = new Array(10000000).fill("nemos");

// findNemo function has a Big O notatin of O(n) --> Linear Time
// O(n) means Big-O depends on the size of the input
// it takes linear time to find nemo
findNemo(everyone);

// end note
