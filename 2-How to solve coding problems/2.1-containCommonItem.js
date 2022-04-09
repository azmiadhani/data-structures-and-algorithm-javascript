/*
 * 1. When the interviewer says the question, write down the key points at the top (i.e. sorted array). Make sure you have all the details. Show how organized you are.
 */
// @details

// Given 2 arrays, create a function that let's a user know (true/false) whether these arrays contain any common items.
// For example :
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
// ------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true.

// @detailsEnd

/* 
Even if you think you know the answer or you've seen this problem before, you know exactly what to do. Don't jump straight into coding.
  - First, explain your approach talking it out, because if there are any problems with your approach or with your understanding of the question, your interviewer is going to often point them out to you here before jumping straight in and looking at your code and saying that, no, this is wrong
  - This way both you and the interviewer know exactly what the steps are that you need to follow.
*/

/*
* 2. Make sure you double check: What are the inputs? What are the outputs?
  - Confirm to the interview is there any possible case of another types of input maybe strings, or numbers, etc 
*/
// @params - arrays - no size limit
// @return boolean

/*
* 3. What is the most important value of the problem? Do you have time, and space and memory, etc.. What is the main goal?
  - Because this is a simple question, we might want to ask the interviewer how large the example array (line 3 to 9) is going to get
    - If the interviewer says the array is never going to be more than five items.
    - Then maybe we don't have to worry about big O  or time complexity or space complexity as much.
  - Then you can ask the interviewer, is our goal here to be as efficient as possible with our function?
    - What's more important to us is time complexity more important, or it's space complexity more important?
    - Maybe the interviewer might tell you that we just want the most efficient function that you can come up with assuming that the array can get very, very large.
*/

/*
* 4. Don't be annoying and ask too many questions.
  - In this point, we're kind of getting to that territory where we've asked a lot of question to the interviewer and we kind of have an idea of what we wanna do.
    - We can keep asking them question, but remember, you usually have a time limit.
    - You don't want to keep bothering them and knowing them and just asking them all these small little questions before we start coding.
    - Keep time in mind.
    - At this point we have an information that we can move on with our assumption to start solving the problem.
*/

/*
* 5. Start with the naive/brute force approach. First thing that comes into mind. It shows that
you’re able to think well and critically (you don't need to write this code, just speak about it).
  - This is always a case when an interviewer ask you a question, they usually have an easy solution that we call the brute force, which is not the most efficient, but usually is the easiest one or the first one that comes up in mind.
  - So in this case, if we look at the @details during an interview with a time limit, you might say : 
    - This look like a nested loop where we're comparing A with Z and then A with Y, then A with I, and then we go to B with Z, B with Y, B with I, and then so on and so forth.
  - So immediately this looks like we're comparing two different eras and we're going to have two for loops, one nested on top of each other.
  - And right away we know that that's a big O, which we've talked about of O(n^2)
  - Most likely during an interview, nested for loops is something that we want to avoid. Just telling the interviewer yhis solution, even though it's not the best solution, already shows that you're thinking clearly about the problem.
  - The important thing is that you let the interviewer know that this is the brute force or the easy,  naïf solution that may not be the most efficient.
  - At least this way you have the right answer then running out of time and not even having an answer.
*/

/*
* 6. Tell them why this approach is not the best (i.e. O(n^2) or higher, not readable, etc...)
  - So in our case, we said that the code might be not efficient or we might have not readable or a code 
  - That is going to be really complicated and hard to read for other developers.
*/

/* 
- With this demonstration, because we just want to think about this so we can be more clear of why this is O(n^2), we gonna just code the brute froce solution 
- Most likely you wouldn't do code the brute force solution if this in an interview.
- I'm just going to code the brute force solution so you can see what I mean.

!DON't CODE THIS SOLUTION IN AN INTERVIEW
!THIS IS JUST FOR DEMONSTRATION PURPOSE
*/
//* @bruteforce_example
/* 
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
const array3 = ['a', 'b', 'c', 'x'];
const array4 = ['z', 'y', 'x'];
function containsCommonItem_bruteforce(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true;
    }
  }
  return false;
}
console.log(containsCommonItem_bruteforce(array1, array2));
console.log(containsCommonItem_bruteforce(array3, array4));
*/
/* 
- As we can the notation is O(a*b)
- If the array size is the same then it can be categorized as O(n^2) which is horrible time complexity
*/

/*
* 7. Walk through your approach, comment things and see where you may be able to break things. Any repetition, bottlenecks like O(N^2), or unnecessary work? Did you use all the information the interviewer gave you? Bottleneck is the part of the code with the biggest Big O. Focus on that. Sometimes this occurs with repeated work as well.
  - AS we can see in @bruteforce_example, we are doing a bit of unnecessary work where we just keep looping as we're doing this comparison in the same work over and over.
  - But one of the most common patterns when it comes to nested for loops is that you might be able to use something called hash tables, which in JavaScript They're called objects in order to speed things up.
*/

/*
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
/ what if we had a function that takes the array1 and convert it to object
object1 ===> obj {
  a: true,
  b: true,
  c: true,
  x: true
}
/ Now, if we create an object like this, we can now loop through only array2 and check if array2 index match object1 properties
for(index<array2){
  / example: does Z exist in object.properties
  / and so on
  array2[index] === obj.properties then return2
}
*/

/*
* 8. Before you start coding that solution out, walk through your code and write down the steps you are going to follow.
  - Never start a whiteboard interview, not being sure of how things are going to work out.
  - Make sure you you code while talking it out loud to the interviewer
  - Walk them through your code
  - Make sure to comments all things while coding
  TODO on this step of interview: write the comment first and walk through them logic first before writing all the code. See on the code below for example
  - After you write down al the step by step logic with comments, continue to step 9, 10 and so
* 9. Modularize your code from the very beginning. Break up your code into beautiful small pieces and add just comments if you need to.
  - When we say modularize, we want to build a small piece of the code that do one thing and one thing really
    - Ideally, a function takes an input.
    - And returns in output and inside of that block does just one thing if it has to do any extra actions.
    - Well, perhaps you have another function that lives on the outside world.
  - We've modularized saying that this first block of code is going to do something, then this block of code is going to do something else. 
  - But as code gets more and more complex, it becomes increasingly important to write in a modular way.
    - That is, small bits and pieces that read like English. 
  - Companies want to hire somebody that is able to write clean code that is readable, that is easy for anyone to pick up and code along with.
  - If a function is doing too many things, that's not ideal.
    - Seperate a function if you need to so that you can call it later.
* 10. Start actually writing your code now. Keep in mind that the more you prepare and understand what you need to code, the better the whiteboard will go. So never start a whiteboard interview not being sure of how things are going to work out. That is a recipe for disaster. Keep in mind: A lot of interviews ask questions that you won’t be able to fully answer on time. So think: What can I show in order to show that I can do this and I am better than other coders. Break things up in Functions (if you can’t remember a method, just make up a function and you will at least have it there. Write something, and start with the easy part.
  - So we've talked it out, we have a plan in mind, let's start to code this
*/
// @code

// declare the inputs
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
// create the function that takes 2 parameters - array
function containsCommonItem(arr1, arr2) {
  // declare an object named obj1
  let obj1 = {};
  // loop through first array and assign obj1[array[index]] === true
  for (let i = 0; i < arr1.length; i++) {
    // check if the properties that we want to create already exists
    if (!obj1[arr1[i]]) {
      obj1[arr1[i]] = true;
    }
  }
  // loop through second array and check if arr2[index] === any obj1 properties, if condition fulfilled then return true
  for (let i = 0; i < arr2.length; i++) {
    // if there's a match then retur two
    // check if arr2[i] value exists in obj1 properties
    if (obj1[arr2[i]]) return true;
  }
  // by default if there's no match then return false
  return false;
}
// log the function return
console.log(containsCommonItem(array1, array2));

// @codeEnd

// from the algorithm above, the big O notation is O(a+b) which is fair time complexity
// this is better han previous solution because we can jump from horrible time complexity to fairtime complexity
/*
  todo, in this point we can tell the interviewer, if the arrays are more large and we can get really large arrays, then this solution when it comes to time complexit, is better than the previous one.
  - from the algorithm above, the big O notation is O(a+b) which is fair time complexity
  - this is better han previous solution because we can jump from horrible time complexity to fair time complexity
*/

/*
? Let's see what have we done so far: 
  - although we haven't given a clear solution, we've been talking about how we solve the problem.
  - The interviewer sees how we think, sees what steps we take, and sees that we're making smart, critical decisions to go from understanding the problem to solving the problem in a naive way, understanding why this might not be the best way, and then start to think about possible solutions.
  - And the beauty of this approach is that no matter whether we get this part correct, maybe our assumptions are wrong and we can't do this. We're showing the interviewer that we're thinking through a problem and we're making small, logical steps towards a solution. 
  - And this is a lot better than just coding right away, trying a solution and see if you get it right or wrong, an interviewer is going to have a good understanding of your abilities and your thought process this way. 
  - these are the type of people that they want to hire.
*/

/* 
  Now let's continue.
* 11. Think about error checks and how you can break this code. Never make assumptions about the input. Assume people are trying to break your code and that Darth Vader is using your function. How will you safeguard it? Always check for false inputs that you don’t want. Here is a trick: Comment in the code, the checks that you want to do… write the function, then tell the interviewer that you would write tests now to make your function fail (but you won't need to actually write the tests).

  todo: do error checks on the algorithm and talk it out to interviewer, see example below
  - Comment in the code, the checks that you want to do… write the function, then tell the interviewer that you would write tests now to make your function fail
  - When you're on interview, you can directly change the array1 and array2 const value abouve to test it out, but we just gonna declare new array below so we can see what changes and what happen

*/

/*
  @testCase
  Test Case purpose
    - uncomment function call below each parameter declaration to test out the function
*/

// declaring test array
let testAray1 = [];
let testArray2 = [];

// ? what if I array value in the same array is the same
// supposedly, return true
testAray1 = ['a', 'a', 'a', 'a'];
testArray2 = ['z', 'y', 'a'];
// console.log('test case =>', containsCommonItem(testAray1, testArray2));
// supposedly, return false
testAray1 = ['a', 'a', 'a', 'a'];
testArray2 = ['z', 'y', 'i'];
// console.log('test case => ', containsCommonItem(testAray1, testArray2));
//? okay, function WORKS / PASSING

// ? what if the array value is not string
// supposedly, return true
testAray1 = ['a', null, 'w', 'q'];
testArray2 = ['z', null, 's'];
// console.log('test case =>', containsCommonItem(testAray1, testArray2));
// supposedly, return false
testAray1 = ['a', null, 'w', 'e'];
testArray2 = ['z', '4', 'i'];
// console.log('test case => ', containsCommonItem(testAray1, testArray2));
//? okay, function WORKS / PASSING

// ? what if the array value is empty / null / undefined
// supposedly, return true
testAray1 = ['a', null, 'w', 'q'];
testArray2 = ['z', null, 's'];
// console.log('test case =>', containsCommonItem(testAray1, testArray2));
// supposedly, return false
testAray1 = ['a', null, 'w', 'e'];
testArray2 = ['z', '4', 'i'];
// console.log('test case => ', containsCommonItem(testAray1, testArray2));
//? okay, function WORKS / PASSING

// ? what if we don't provide second parameter
// supposedly, return true
testAray1 = ['a', '2', 'w', 'q'];
// console.log('test case =>', containsCommonItem(testAray1));
//! okay, function raise an ERROR
/*
  todo on interview: if error like this arise then :
  - We want to start thinking about how errors might arise.
  - We want to make these functions as error free as possible and during an interview, usually won't have time to do all the checks that you want.
  - But you might want to tell the interviewer possible solutions or possible ways to go around this.
  - So you want to start thinking about and maybe discussing with the interviewer how you may break this function and how you may improve it, such as doing checks such as if statements to make sure that what the inputs you are getting are what you are expecting. 
  - Now, this is when testing comes in and testing your code comes in during most interview. That's usually beyond the scope of the interview. And it's you have limited time so you can do this. 
  - But it's good to tell the interviewer what you would do. 
  - This is one of those things that it's simple enough that you can just tell the interviewer this is what you would do versus coding it and they will essentially give you full marks for it.
*/

/*
  @testCaseEnd
*/

/*
  Let's continue to the next steps
* 12. Don’t use bad/confusing names like i and j. Write code that reads well.
  - Although we do use i andj, I and exactly here like we can see in @code, but this is being used for for loops.
    - And it's okay to use it on loop because it is a bit of a standard, especially in JavaScript and these are just simply indexes.
  - But don't use bad/confusing name if the variable had meanings, like for example the parameter, etc.
  - This is one of those things that you can talk to the interviewer about and let them know that you're thinking about these things
  - And this very, very important
  - Again, as long as you're thinking about that and you're telling the interviewer that you are considering these things, you're getting full marks for it.
*/

/* 
* 13. Test your code: Check for no params, 0, undefined, null, massive arrays, async code, etc… Ask the interviewer if we can make assumption about the code. Can you make the answer return an error? Poke holes into your solution. Are you repeating yourself?
  - We already cover this in the 8-10 step. 
  - But you want to just check with the interviewer that we're making some assumptions here, but let them know that you're thinking about that. 
    - You're thinking about the fact that this function might not always be run with two arrays.
    - How can we test this function and how would you test this function to make sure that it gives the expected result that we always return, true or false? 
    - And this is where you might say that you're going to test your code and run some unit tests.
*/

/*
* 14. Finally talk to the interviewer where you would improve the code. Does it work? Are there different approaches? Is it readable? What would you google to improve? How can performance be improved? Possibly: Ask the interviewer what was the most interesting solution you have seen to this problem
  - Well, looking at this code, we can start telling the interviewer that the downside to this solution is that:
    - Only numbers and strings and booleans can be used correctly because we're using an object
    - Especially in JavaScript and adding properties. A, B, C, a next to this object. 
    - Now, object properties, especially the way we're using a JavaScript object right now, might not work if we're using non literal values like JavaScript expression. 
  - You might also argue that this code could be a little bit more readable. 
  - For example although @code is better in terms of time, complexity, when it comes to JavaScript, there's actually a more readable, cleaner way of doing this.
*/

// @codeReadable

// declare the inputs
const array3 = ['a', 'b', 'c', 'x'];
const array4 = ['z', 'y', 'i'];

// create the function that takes 2 parameters - array
function containsCommonItem2(arr1, arr2) {
  // The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
  // The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
  return arr1.some((item) => arr2.includes(item));
}

// log the function return
console.log(containsCommonItem2(array3, array4));

// @codeReadableEnd

/*
  - We now have a way to measure different solutions to a problem.
  - We can say that there's actually another solution using some of the built in methods that comes with JavaScript, that is, some would say, more readable, more concise if you're working on a team that really knows their JavaScript. @codeReadable is a lot easier to read than @code.
  - So maybe readability is more important.
  - You might say that this is a better solution.
*/

/*
  - Another thing you may have noticed is that we've talked about time complexity here. And we haven't really talked about space complexity, and this goes into a final point.
  - If your interviewer is happy with your solution, the interviewer usually ends here. 
  - It is also common, though, that the interviewer asks you extending questions such as how would you handle a problem if the whole input is too large to fit into memory?
  - From the @bruteforce_example we can see that the space complexity is O(1) because Because we're not creating any new variables, we're just using the inputs arrays.
  - But if we see @code, we creating new object 'let obj1 = {};' and inserting the properties into it using a loop, so the space complexity is O(a) or O(n).
  - so if an interviewer says if there is any limited memory or memory is expensive, you can just tell him or her.
    - Well, @code solution, although faster in terms of complexity, is more heavy in terms of space complexity.
  - Meanwhile @codeReadable solution is more light in terms of time complexity, space complexity and is more readable.
*/

/*
 * 15. If your interviewer is happy with the solution, the interview usually ends here. It is also common that the interviewer asks you extension questions, such as how you would handle the problem if the whole input is too large to fit into memory, or if the input arrives as a stream. This is a common follow-up question at Google, where they care a lot about scale. The answer is usually a divide-and-conquer approach — perform distributed processing of the data and only read certain chunks of the input from disk into memory, write the output back to disk and combine them later.
 */

/* 
  - I know this is a lot and it's a lot to think about because now you start thinking, am I going to have to worry about each code that I write and analyze it this deeply? No. In your day to day life, you're not going to do that. 
  - But I want you to demonstrate to you that this is the kind of thought process that really good developers have and what companies are interviewing for. 
  - If you're able to think clearly through these steps, like I have outlined for you and you're able to solve problems this way, you see how much more impressive it is than if I just wrote down the solution without any explanation. 
  - Even if you don't get to this point and time runs out during your interview, you've demonstrated to your interviewer that you're able to think clearly, you have the fundamentals to think like an engineer. 
  - And these are great qualities that companies love to hire for and skills that are very rare.
*/
