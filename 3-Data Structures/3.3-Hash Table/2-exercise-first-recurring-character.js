/* 
Find First Recurring Character

Google Question
Given an array = [2,5,1,2,3,5,1,2,4]:
It should return 2

Given an array = [2,1,1,2,3,5,1,2,4]:
It should return 1

Given an array = [2,3,4,5]:
It should return undefined

Bonus... What if we had this:
[2,5,5,2,3,5,1,2,4]
return 5 because the pairs are before 2,2
*/

// AZMI

// SOLUTION #1 😊

// TRIAL #1 #️⃣

// THOUGHT PROCESS 🧠

// INPUT
// [2,5,1,2,3,5,1,2,4]:

// algorithm process
// [2,5,1,2,3,5,1,2,4]:
// [2,5,1,2,3,5,1,2,4]:
// 2-5,2-1,2-2 ...
// 5-1,5-2,5-3 ...

// function firstRecurringCharacter(input) {
// looph through input, increment i = 0, i < input.length
// looph through input - increment j = i + 1 < input.length
// if input[j] == input[i], return input[i]
// }

// IMPLEMENTATION 🏁
// function firstRecurringCharacter(input) {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[j] == input[i]) return input[j];
//     }
//   }
//   return undefined;
// }

// const input1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// const input2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// const input3 = [2, 3, 4, 5];

// console.log(firstRecurringCharacter1(input1));
// console.log(firstRecurringCharacter1(input2));
// console.log(firstRecurringCharacter1(input3));
// RESULT = FAILED ❌
// REASON : thought process not perfect because there's a bug with input2 (not the first recurring character)
// 🌌 Complexity: Time O(n^2) - Space O(1)
// ❗ Try to fix this function again later when you have have the time

// TRIAL #2 #️⃣
// THOUGHT PROCESS 🧠

// INPUT
// [2,5,1,2,3,5,1,2,4]:

// algorithm process
// Loop [2,5,1,2,3,5,1,2,4]:
// 2, check numbers[2] === undefined, insert numbers {2:true}
// 5, check numbers[5] === undefined, insert numbers {5:true}
// 1, check numbers[1] === undefined, insert numbers {1:true}
// 2, check numbers[2] === undefined, numbers[2] exist, then return 2

// IMPLEMENTATION RESOLUTION 🏫
function firstRecurringCharacter2(input) {
  const numbers = {};
  for (let i = 0; i < input.length; i++) {
    if (numbers[input[i]] === undefined) numbers[input[i]] = true;
    else return input[i];
  }
  return undefined;
}

const input21 = [2, 5, 1, 2, 3, 5, 1, 2, 4]; // 2
const input22 = [2, 1, 1, 2, 3, 5, 1, 2, 4]; // 1
const input23 = [2, 3, 4, 5]; // undefined

console.log(firstRecurringCharacter2(input21));
console.log(firstRecurringCharacter2(input22));
console.log(firstRecurringCharacter2(input23));
// RESULT = SUCCESS ✅
// Complexity: Time O(n) - Space O(n) [we created the object that loop inside]
