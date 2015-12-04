var testModules = testModules || [];

testModules.push({
  culture: "pt_BR",
  numberTests: [
    {
      name: "Format float",
      format: ",.2f",
      value: 12345.67,
      expected: "12.345,67"
    },
    {
      name: "Format currencies",
      format: "$,.2f",
      value: 12345.67,
      expected: "R$12.345,67"
    },
    {
      name: "Format currencies (SI-prefix)",
      format: "$,.4s",
      value: 12345.67,
      expected: "R$12,35k"
    }
  ],
  dateTimeTests: [
    {
      name: "Date and time",
      format: "%c",
      value: new Date(1990, 0, 1, 13, 05, 59),
      expected: "segunda-feira, 1 de janeiro 1990 13:05:59"
    },
    {
      name: "Date and time (leading 0)",
      format: "%c",
      value: new Date(1990, 0, 1, 1, 05, 59),
      expected: "segunda-feira, 1 de janeiro 1990 01:05:59"
    },
    {
      name: "Date",
      format: "%x",
      value: new Date(1990, 0, 1, 13, 05, 59),
      expected: "01/01/1990"
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
      expected: "segunda-feira"
    },
    {
      name: "Weekdays (full) - Tuesday",
      format: "%A",
      value: new Date(2014, 1, 18, 13, 05, 59),
      expected: "terça-feira"
    },
    {
      name: "Weekdays (full) - Wednesday",
      format: "%A",
      value: new Date(2014, 1, 19, 13, 05, 59),
      expected: "quarta-feira"
    },
    {
      name: "Weekdays (full) - Thrusday",
      format: "%A",
      value: new Date(2014, 1, 20, 13, 05, 59),
      expected: "quinta-feira"
    },
    {
      name: "Weekdays (full) - Friday",
      format: "%A",
      value: new Date(2014, 1, 21, 13, 05, 59),
      expected: "sexta-feira"
    },
    {
      name: "Weekdays (full) - Saturday",
      format: "%A",
      value: new Date(2014, 1, 22, 13, 05, 59),
      expected: "sábado"
    },
    {
      name: "Weekdays (full) - Sunday",
      format: "%A",
      value: new Date(2014, 1, 23, 13, 05, 59),
      expected: "domingo"
    },
    {
      name: "Weekdays (short) - Monday",
      format: "%a",
      value: new Date(2014, 1, 17, 13, 05, 59),
      expected: "seg"
    },
    {
      name: "Weekdays (short) - Tuesday",
      format: "%a",
      value: new Date(2014, 1, 18, 13, 05, 59),
      expected: "ter"
    },
    {
      name: "Weekdays (short) - Wednesday",
      format: "%a",
      value: new Date(2014, 1, 19, 13, 05, 59),
      expected: "qua"
    },
    {
      name: "Weekdays (short) - Thrusday",
      format: "%a",
      value: new Date(2014, 1, 20, 13, 05, 59),
      expected: "qui"
    },
    {
      name: "Weekdays (short) - Friday",
      format: "%a",
      value: new Date(2014, 1, 21, 13, 05, 59),
      expected: "sex"
    },
    {
      name: "Weekdays (short) - Saturday",
      format: "%a",
      value: new Date(2014, 1, 22, 13, 05, 59),
      expected: "sáb"
    },
    {
      name: "Weekdays (short) - Sunday",
      format: "%a",
      value: new Date(2014, 1, 23, 13, 05, 59),
      expected: "dom"
    },
    {
      name: "Months (full) - January",
      format: "%B",
      value: new Date(1990, 0, 1, 13, 05, 59),
      expected: "janeiro"
    },
    {
      name: "Months (full) - February",
      format: "%B",
      value: new Date(1990, 1, 1, 13, 05, 59),
      expected: "fevereiro"
    },
    {
      name: "Months (full) - March",
      format: "%B",
      value: new Date(1990, 2, 1, 13, 05, 59),
      expected: "março"
    },
    {
      name: "Months (full) - April",
      format: "%B",
      value: new Date(1990, 3, 1, 13, 05, 59),
      expected: "abril"
    },
    {
      name: "Months (full) - May",
      format: "%B",
      value: new Date(1990, 4, 1, 13, 05, 59),
      expected: "maio"
    },
    {
      name: "Months (full) - June",
      format: "%B",
      value: new Date(1990, 5, 1, 13, 05, 59),
      expected: "junho"
    },
    {
      name: "Months (full) - July",
      format: "%B",
      value: new Date(1990, 6, 1, 13, 05, 59),
      expected: "julho"
    },
    {
      name: "Months (full) - August",
      format: "%B",
      value: new Date(1990, 7, 1, 13, 05, 59),
      expected: "agosto"
    },
    {
      name: "Months (full) - September",
      format: "%B",
      value: new Date(1990, 8, 1, 13, 05, 59),
      expected: "setembro"
    },
    {
      name: "Months (full) - October",
      format: "%B",
      value: new Date(1990, 9, 1, 13, 05, 59),
      expected: "outubro"
    },
    {
      name: "Months (full) - November",
      format: "%B",
      value: new Date(1990, 10, 1, 13, 05, 59),
      expected: "novembro"
    },
    {
      name: "Months (full) - December",
      format: "%B",
      value: new Date(1990, 11, 1, 13, 05, 59),
      expected: "dezembro"
    },
    {
      name: "Months (short) - January",
      format: "%b",
      value: new Date(1990, 0, 1, 13, 05, 59),
      expected: "jan"
    },
    {
      name: "Months (short) - February",
      format: "%b",
      value: new Date(1990, 1, 1, 13, 05, 59),
      expected: "fev"
    },
    {
      name: "Months (short) - March",
      format: "%b",
      value: new Date(1990, 2, 1, 13, 05, 59),
      expected: "mar"
    },
    {
      name: "Months (short) - April",
      format: "%b",
      value: new Date(1990, 3, 1, 13, 05, 59),
      expected: "abr"
    },
    {
      name: "Months (short) - May",
      format: "%b",
      value: new Date(1990, 4, 1, 13, 05, 59),
      expected: "mai"
    },
    {
      name: "Months (short) - June",
      format: "%b",
      value: new Date(1990, 5, 1, 13, 05, 59),
      expected: "jun"
    },
    {
      name: "Months (short) - July",
      format: "%b",
      value: new Date(1990, 6, 1, 13, 05, 59),
      expected: "jul"
    },
    {
      name: "Months (short) - August",
      format: "%b",
      value: new Date(1990, 7, 1, 13, 05, 59),
      expected: "ago"
    },
    {
      name: "Months (short) - September",
      format: "%b",
      value: new Date(1990, 8, 1, 13, 05, 59),
      expected: "set"
    },
    {
      name: "Months (short) - October",
      format: "%b",
      value: new Date(1990, 9, 1, 13, 05, 59),
      expected: "out"
    },
    {
      name: "Months (short) - November",
      format: "%b",
      value: new Date(1990, 10, 1, 13, 05, 59),
      expected: "nov"
    },
    {
      name: "Months (short) - December",
      format: "%b",
      value: new Date(1990, 11, 1, 13, 05, 59),
      expected: "dez"
    },
    {
      name: "No time suffix - AM",
      format: "%p",
      value: new Date(1990, 0, 1, 11, 05, 59),
      expected: ""
    },
    {
      name: "No time suffix - PM",
      format: "%p",
      value: new Date(1990, 0, 1, 13, 05, 59),
      expected: ""
    }
  ]
});
