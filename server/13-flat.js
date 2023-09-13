// flat maps all array elements and creates a new flat array. Accepts the number of level to apply.

const matrix = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [1, 2]]],
  [7, 8, 9],
];

const answer = matrix.flat(3);
console.log("Flat: ", answer);
