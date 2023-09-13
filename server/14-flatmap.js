// flatmap maps all array elements and creates a new flat array.

const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Handsome"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Jane", attributes: ["Nice", "Cool"] },
];

const answer = users.flatMap((user) => user.attributes);
console.log("Answer: ", answer);

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

const answer2 = Object.values(calendars).flatMap((item) => {
  return item.map((date) => date.startDate);
});
console.log(answer2);
