// find returns the value of the first element that passes a test, if no elements are found returns undefined.

const numbers = [1, 30, 49, 29, 10, 13];

const answer = numbers.find((item) => item === 10);

console.log("Answer: ", answer);

const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
];

const answer2 = products.find((item) => item.price === 23);

console.log("Answer 2: ", answer2);

// findIndex returns the index (position) of the first element that passes a test, if no match is found returns -1

const answer3 = products.findIndex((item) => item.price === 23);

console.log("Answer 3: ", answer3);
