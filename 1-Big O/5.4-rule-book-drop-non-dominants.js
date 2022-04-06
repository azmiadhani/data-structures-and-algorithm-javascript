const numbers = [1, 2];
const printAllNumbersThenAllPairSums = (numbers) => {
  console.log('these are the numbers:');
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
};

printAllNumbersThenAllPairSums(numbers);

// notation : O(n + n^2)
// n and n^2 are both terms
// rule 4: drop non dominant terms
// that means we care about the most dominant term
// in this case, we drop the n and just have n^2
// why? because as the size increases, the size of n^2 is way more important than the size of n

// another example :
// if the notation is O(x^2 + 3x +100 + x/2)
// then we can decide which is more dominant with this method :
// if x = 5
// terms :
// x^2 = 25
// 3x = 15
// 100 = 100
// x/2 = 10
// we can see that the biggest value is 100
// what happen if elements (x) is scaling up
// we need to verify that with the next step, which we gonna make x = 500
// if x = 500
// terms :
// x^2 = 2500
// 3x = 1500
// 100 = 100
// x/2 = 250
// we see that the most dominant term is x/2, because when it is scaled up, it got bigger value than the others
// with that, we can drop oter non-dominant terms, so the notation become O(x^2)
