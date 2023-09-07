// some checks if any array elements pass a test (provided as a callback function).

const numbers = [1, 2, 3, 4];

const answer = numbers.some((item) => item % 2 === 0);

console.log("Answer: ", answer);

const orders = [
  {
    customerName: "David",
    total: 60,
    delivered: false,
  },

  {
    customerName: "Mark",
    total: 120,
    delivered: false,
  },

  {
    customerName: "Mary",
    total: 180,
    delivered: false,
  },

  {
    customerName: "Karla",
    total: 260,
    delivered: false,
  },
];

const answer2 = orders.some((item) => item.delivered);

console.log("Answer2: ", answer2);

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 19),
  endDate: new Date(2021, 1, 1, 20, 30),
};

const areIntervalsOverlapping = require("date-fns/areIntervalsOverlapping");

const isOverlap = (newDate) => {
  return dates.some((date) => {
    return areIntervalsOverlapping(
      { start: date.startDate, end: date.endDate },
      { start: newDate.startDate, end: newDate.endDate }
    );
  });
};

console.log("Is overlaping: ", isOverlap(newAppointment));
