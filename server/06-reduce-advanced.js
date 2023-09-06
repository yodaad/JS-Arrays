const items = [1, 3, 2, 3, 3, 1, 2, 4, 7];

const answer = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});

console.log(answer);

const data = [
  {
    name: "James",
    level: "low",
  },
  {
    name: "Mary",
    level: "medium",
  },
  {
    name: "Larry",
    level: "high",
  },
  {
    name: "Andrea",
    level: "high",
  },
];

const answer2 = data
  .map((item) => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }
    return obj;
  }, {});

console.log(answer2);
