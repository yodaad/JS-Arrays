// map can also work with an array of objects

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

console.log("Original: ", orders);
const totals = orders.map((item) => item.total);
console.log("Mapped", totals);

// Adding a new element to the object
const ordersPlusTaxes = orders.map((item) => {
  // By using the spred operator (...) we clone the attributes of the original object, without the memory reference, into a new object
  return {
    ...item,
    taxes: item.total * 0.16,
  };
});

console.log("Original: ", orders);
console.log("Mapped: ", ordersPlusTaxes);
