// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  // O(n)
  for (let i = 0; i < input.length; i++) {
    anotherFunction(); // O(n)
    let stranger = true; //O(1)
    a++; // O(1)
  }
  return a; // O(1)
}
// Big O of the above function is O(n), because it has a loop, but still not sure if its correct, because it's not clear if it's O(n) because its got the O(1) and some other function that is undefined (can't be seen)
