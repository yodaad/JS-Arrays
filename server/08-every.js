// every returns true if the function returns true for all element, and false if the function returns false for one element.

const numbers = [1, 3, 39, 10, 13];

const answer = numbers.every((item) => item <= 40);

console.log("Answer: ", answer);

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const answer2 = team.every((item) => item.age < 15);
console.log("Are all the members below 15 years old? ", answer2);
