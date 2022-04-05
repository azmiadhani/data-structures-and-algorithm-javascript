// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  // O(n)
  for (let i = 0; i < input.length; i++) {
    anotherFunction(); // O(n)
    let stranger = true; // O(1) => O(n) because it depends on the size of the input
    a++; // O(1) => O(n) because it depends on the size of the input
  }
  return a; // O(1)
}
// My answer :
// Big O of the above function is O(n), because it has a loop, but still not sure if its correct, because it's not clear if it's O(n) because its got the O(1) and some other function that is undefined (can't be seen)

// Answer to the above question:
// Big O(3+4n)
// Actually, you won't need to calculate Big O step by step like here. Soon you will see an easier way to do this that is more practical.
// Actually this function is Big O(n), we gonna go through that later on
