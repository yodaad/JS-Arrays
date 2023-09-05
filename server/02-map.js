// map creates a new array from calling a function for every array element

const letters = ["a", "b", "c"];

const newLetters = letters.map((letter) => letter + "++");

console.log("original: ", letters);
console.log("new: ", newLetters);
