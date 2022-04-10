// arrays, which are sometimes called lists, organizes items sequentially, that means one after another in memory

// were storing this array in sequential order in RAM
const strings = ['a', 'b', 'c', 'd'];

// lookup
// O(1)
strings[1];

// push
// Appends new elements to the end of an array, and returns the new length of the array.
// time complexity O(1)
strings.push('e');

// pop
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// time complexity O(1)
strings.pop();

// unshift
// Inserts new elements at the start of an array, and returns the new length of the array.
// time complexity O(n) - because it has to shift all the elements by looping
strings.unshift('x');

// splice
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// time complexity O(n) - because it has to shift all the elements by looping
strings.splice(2, 0, 'ufo');

console.log(strings);
