// concat concatenates (joins) two or more arrays. It does not change the existing arrays.

const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];
const finalArray = elements.concat(otherElements);

console.log("Elements: ", elements);
console.log("Other elements", otherElements);
console.log("Concatenated: ", finalArray);

const sentence1 = "this is a sentence";
const sentence2 = " written for this example";
const finalSentence = sentence1.concat(sentence2);
console.log(finalSentence);
