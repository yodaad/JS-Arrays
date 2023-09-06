// reduce executes a reducer function for array element

const totals = [1, 2, 3, 4];

const answer = totals.reduce((sum, item) => sum + item, 0);

console.log("Reduced: ", answer);
