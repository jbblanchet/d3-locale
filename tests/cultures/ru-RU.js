var testModules = testModules || {};

testModules.push({
  culture: "ru_RU",
  numberTests: [
    {
      name: "Format float",
      format: ",.2f",
      value: 12345.67,
      expected: "12 345,67"
    },
    {
      name: "Format currencies",
      format: "$,.2f",
      value: 12345.67,
      expected: "12 345,67 руб."
    },
    {
      name: "Format currencies (SI-prefix)",
      format: "$,.4s",
      value: 12345.67,
      expected: "12,35k руб."
    }
  ],
  dateTimeTests: [
    {
      name: "Date and time",
      format: "%c",
      value: new Date(1990, 0, 1, 13, 05, 59),
      expected: "понедельник, 1 января 1990 г. 13:05:59"
    },
    {
      name: "Date and time (leading 0)",
      format: "%c",
      value: new Date(1990, 0, 1, 1, 05, 59),
      expected: "понедельник, 1 января 1990 г. 1:05:59"
    },
    {
      name: "Date",
      format: "%x",
      value: new Date(1990, 0, 1, 13, 05, 59),
      expected: "01.01.1990"
    },
    {
      name: "Time",
      format: "%X",
      value: new Date(1990, 0, 1, 13, 05, 59),
      expected: "13:05:59"
    },
    {
      name: "Weekdays (full) - Monday",
      format: "%A",
      value: new Date(2014, 1, 17, 13, 05, 59),
      expected: "понедельник"
    },
    {
      name: "Weekdays (full) - Tuesday",
      format: "%A",
      value: new Date(2014, 1, 18, 13, 05, 59),
      expected: "вторник"
    },
    {
      name: "Weekdays (full) - Wednesday",
      format: "%A",
      value: new Date(2014, 1, 19, 13, 05, 59),
      expected: "среда"
    },
    {
      name: "Weekdays (full) - Thrusday",
      format: "%A",
      value: new Date(2014, 1, 20, 13, 05, 59),
      expected: "четверг"
    },
    {
      name: "Weekdays (full) - Friday",
      format: "%A",
      value: new Date(2014, 1, 21, 13, 05, 59),
      expected: "пятница"
    },
    {
      name: "Weekdays (full) - Saturday",
      format: "%A",
      value: new Date(2014, 1, 22, 13, 05, 59),
      expected: "суббота"
    },
    {
      name: "Weekdays (full) - Sunday",
      format: "%A",
      value: new Date(2014, 1, 23, 13, 05, 59),
      expected: "воскресенье"
    },
    {
      name: "Weekdays (short) - Monday",
      format: "%a",
      value: new Date(2014, 1, 17, 13, 05, 59),
      expected: "пн"
    },
    {
      name: "Weekdays (short) - Tuesday",
      format: "%a",
      value: new Date(2014, 1, 18, 13, 05, 59),
      expected: "вт"
    },
    {
      name: "Weekdays (short) - Wednesday",
      format: "%a",
      value: new Date(2014, 1, 19, 13, 05, 59),
      expected: "ср"
    },
    {
      name: "Weekdays (short) - Thrusday",
      format: "%a",
      value: new Date(2014, 1, 20, 13, 05, 59),
      expected: "чт"
    },
    {
      name: "Weekdays (short) - Friday",
      format: "%a",
      value: new Date(2014, 1, 21, 13, 05, 59),
      expected: "пт"
    },
    {
      name: "Weekdays (short) - Saturday",
      format: "%a",
      value: new Date(2014, 1, 22, 13, 05, 59),
      expected: "сб"
    },
    {
      name: "Weekdays (short) - Sunday",
      format: "%a",
      value: new Date(2014, 1, 23, 13, 05, 59),
      expected: "вс"
    },
    {
      name: "Months (full) - January",
      format: "%B",
      value: new Date(1990, 0, 1, 13, 05, 59),
      expected: "января"
    },
    {
      name: "Months (full) - February",
      format: "%B",
      value: new Date(1990, 1, 1, 13, 05, 59),
      expected: "февраля"
    },
    {
      name: "Months (full) - March",
      format: "%B",
      value: new Date(1990, 2, 1, 13, 05, 59),
      expected: "марта"
    },
    {
      name: "Months (full) - April",
      format: "%B",
      value: new Date(1990, 3, 1, 13, 05, 59),
      expected: "апреля"
    },
    {
      name: "Months (full) - May",
      format: "%B",
      value: new Date(1990, 4, 1, 13, 05, 59),
      expected: "мая"
    },
    {
      name: "Months (full) - June",
      format: "%B",
      value: new Date(1990, 5, 1, 13, 05, 59),
      expected: "июня"
    },
    {
      name: "Months (full) - July",
      format: "%B",
      value: new Date(1990, 6, 1, 13, 05, 59),
      expected: "июля"
    },
    {
      name: "Months (full) - August",
      format: "%B",
      value: new Date(1990, 7, 1, 13, 05, 59),
      expected: "августа"
    },
    {
      name: "Months (full) - September",
      format: "%B",
      value: new Date(1990, 8, 1, 13, 05, 59),
      expected: "сентября"
    },
    {
      name: "Months (full) - October",
      format: "%B",
      value: new Date(1990, 9, 1, 13, 05, 59),
      expected: "октября"
    },
    {
      name: "Months (full) - November",
      format: "%B",
      value: new Date(1990, 10, 1, 13, 05, 59),
      expected: "ноября"
    },
    {
      name: "Months (full) - December",
      format: "%B",
      value: new Date(1990, 11, 1, 13, 05, 59),
      expected: "декабря"
    },
    {
      name: "Months (short) - January",
      format: "%b",
      value: new Date(1990, 0, 1, 13, 05, 59),
      expected: "янв"
    },
    {
      name: "Months (short) - February",
      format: "%b",
      value: new Date(1990, 1, 1, 13, 05, 59),
      expected: "фев"
    },
    {
      name: "Months (short) - March",
      format: "%b",
      value: new Date(1990, 2, 1, 13, 05, 59),
      expected: "мар"
    },
    {
      name: "Months (short) - April",
      format: "%b",
      value: new Date(1990, 3, 1, 13, 05, 59),
      expected: "апр"
    },
    {
      name: "Months (short) - May",
      format: "%b",
      value: new Date(1990, 4, 1, 13, 05, 59),
      expected: "май"
    },
    {
      name: "Months (short) - June",
      format: "%b",
      value: new Date(1990, 5, 1, 13, 05, 59),
      expected: "июн"
    },
    {
      name: "Months (short) - July",
      format: "%b",
      value: new Date(1990, 6, 1, 13, 05, 59),
      expected: "июл"
    },
    {
      name: "Months (short) - August",
      format: "%b",
      value: new Date(1990, 7, 1, 13, 05, 59),
      expected: "авг"
    },
    {
      name: "Months (short) - September",
      format: "%b",
      value: new Date(1990, 8, 1, 13, 05, 59),
      expected: "сен"
    },
    {
      name: "Months (short) - October",
      format: "%b",
      value: new Date(1990, 9, 1, 13, 05, 59),
      expected: "окт"
    },
    {
      name: "Months (short) - November",
      format: "%b",
      value: new Date(1990, 10, 1, 13, 05, 59),
      expected: "ноя"
    },
    {
      name: "Months (short) - December",
      format: "%b",
      value: new Date(1990, 11, 1, 13, 05, 59),
      expected: "дек"
    },
    {
      name: "AM",
      format: "%p",
      value: new Date(1990, 0, 1, 11, 05, 59),
      expected: ""
    },
    {
      name: "PM",
      format: "%p",
      value: new Date(1990, 0, 1, 13, 05, 59),
      expected: ""
    },
  ]
});