// sort sorts an array alphabetically (ASCII). By default it sorts values as strings, however if numbers are sorted as strings the method alone will produce incorrect results when sorting numbers.

const months = ["March", "Jan", "Feb", "Dec", "Apr"];

months.sort((a, b) => {
  const monthOrder = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return monthOrder.indexOf(a.slice(0, 3)) - monthOrder.indexOf(b.slice(0, 3));
});

console.log(months);

const numbers = [1, 30, 4, 21, 100000];

numbers.sort((a, b) => a - b);
console.log(numbers);

const words = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];

words.sort();
console.log(words);

// If you work with older browsers...

words.sort((a, b) => a.localeCompare(b));
console.log(words);

const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
    date: new Date(2023, 9, 13, 5),
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
    date: new Date(2023, 1, 1, 12),
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
    date: new Date(2021, 11, 13, 5),
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
    date: new Date(2022, 10, 11, 7),
  },
];

orders.sort((a, b) => a.total - b.total);
console.log(orders);

orders.sort((a, b) => b.date - a.date);
console.log(orders);
