// filter creates a new array filled with elements that pass a test provided by a function.

const words = ["spray", "limit", "elite", "exuberant"];

const filteredArray = words.filter((item) => item.includes("l"));
const filteredArray2 = words.filter((item) => item.length >= 6);

console.log("Original: ", words);
console.log("Filtered 1: ", filteredArray);
console.log("Filtered 2: ", filteredArray2);

const orders = [
  {
    customerName: "David",
    total: 60,
    delivered: true,
  },

  {
    customerName: "Mark",
    total: 120,
    delivered: false,
  },

  {
    customerName: "Mary",
    total: 180,
    delivered: true,
  },

  {
    customerName: "Karla",
    total: 260,
    delivered: true,
  },
];

const filteredOrders = orders.filter(
  (item) => item.delivered && item.total >= 100
);

console.log("Filtered Orders: ", filteredOrders);

const search = (query) => {
  return orders.filter((item) => {
    return item.customerName.includes(query) && item.total > 150;
  });
};

console.log(search("Ma"));
