// #1
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5;
  let b = 10;
  let c = 50;
  for (let i = 0; i < input; i++) {
    let x = i + 1;
    let y = i + 2;
    let z = i + 3;
  }
  for (let j = 0; j < input; j++) {
    let p = j * 2;
    let q = j * 2;
  }
  let whoAmI = "I don't know";
}
// Answer: O(n)
// You can just take a look at this function and immediately see that it's O(n) because it has a loop.

// #2
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }
  return a;
}
// Answer: O(n)
// You can just take a look at this function and immediately see that it's O(n) because it has a loop.

// How to simplify big O?
// In interviews, usually you don't need to know the detailed Big O notation, you only need to know the general idea.
// You're most likely never going to actually calculate precisely of three in or of three and plus two plus one.
// You're going to be using Big O notation to describe the general idea of the algorithm.
