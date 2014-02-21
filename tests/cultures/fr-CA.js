var testModules = testModules || [];

testModules.push({
  culture: "fr_CA",
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
      expected: "12 345,67 $"
    },
    {
      name: "Format currencies (SI-prefix)",
      format: "$,.4s",
      value: 12345.67,
      expected: "12,35k $"
    }
  ],
  dateTimeTests: [
    {
      name: "Date and time",
      format: "%c",
      value: new Date(1990, 0, 1, 13, 05, 59),
      expected: "lundi, 1 janvier 1990 13:05:59"
    },
    {
      name: "Date and time (leading 0)",
      format: "%c",
      value: new Date(1990, 0, 1, 1, 05, 59),
      expected: "lundi, 1 janvier 1990 01:05:59"
    },
    {
      name: "Date",
      format: "%x",
      value: new Date(1990, 0, 1, 13, 05, 59),
      expected: "1990-01-01"
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
      expected: "lundi"
    },
    {
      name: "Weekdays (full) - Tuesday",
      format: "%A",
      value: new Date(2014, 1, 18, 13, 05, 59),
      expected: "mardi"
    },
    {
      name: "Weekdays (full) - Wednesday",
      format: "%A",
      value: new Date(2014, 1, 19, 13, 05, 59),
      expected: "mercredi"
    },
    {
      name: "Weekdays (full) - Thrusday",
      format: "%A",
      value: new Date(2014, 1, 20, 13, 05, 59),
      expected: "jeudi"
    },
    {
      name: "Weekdays (full) - Friday",
      format: "%A",
      value: new Date(2014, 1, 21, 13, 05, 59),
      expected: "vendredi"
    },
    {
      name: "Weekdays (full) - Saturday",
      format: "%A",
      value: new Date(2014, 1, 22, 13, 05, 59),
      expected: "samedi"
    },
    {
      name: "Weekdays (full) - Sunday",
      format: "%A",
      value: new Date(2014, 1, 23, 13, 05, 59),
      expected: "dimanche"
    },
    {
      name: "Weekdays (short) - Monday",
      format: "%a",
      value: new Date(2014, 1, 17, 13, 05, 59),
      expected: "lun"
    },
    {
      name: "Weekdays (short) - Tuesday",
      format: "%a",
      value: new Date(2014, 1, 18, 13, 05, 59),
      expected: "mar"
    },
    {
      name: "Weekdays (short) - Wednesday",
      format: "%a",
      value: new Date(2014, 1, 19, 13, 05, 59),
      expected: "mer"
    },
    {
      name: "Weekdays (short) - Thrusday",
      format: "%a",
      value: new Date(2014, 1, 20, 13, 05, 59),
      expected: "jeu"
    },
    {
      name: "Weekdays (short) - Friday",
      format: "%a",
      value: new Date(2014, 1, 21, 13, 05, 59),
      expected: "ven"
    },
    {
      name: "Weekdays (short) - Saturday",
      format: "%a",
      value: new Date(2014, 1, 22, 13, 05, 59),
      expected: "sam"
    },
    {
      name: "Weekdays (short) - Sunday",
      format: "%a",
      value: new Date(2014, 1, 23, 13, 05, 59),
      expected: "dim"
    },
    {
      name: "Months (full) - January",
      format: "%B",
      value: new Date(1990, 0, 1, 13, 05, 59),
      expected: "janvier"
    },
    {
      name: "Months (full) - February",
      format: "%B",
      value: new Date(1990, 1, 1, 13, 05, 59),
      expected: "février"
    },
    {
      name: "Months (full) - March",
      format: "%B",
      value: new Date(1990, 2, 1, 13, 05, 59),
      expected: "mars"
    },
    {
      name: "Months (full) - April",
      format: "%B",
      value: new Date(1990, 3, 1, 13, 05, 59),
      expected: "avril"
    },
    {
      name: "Months (full) - May",
      format: "%B",
      value: new Date(1990, 4, 1, 13, 05, 59),
      expected: "mai"
    },
    {
      name: "Months (full) - June",
      format: "%B",
      value: new Date(1990, 5, 1, 13, 05, 59),
      expected: "juin"
    },
    {
      name: "Months (full) - July",
      format: "%B",
      value: new Date(1990, 6, 1, 13, 05, 59),
      expected: "juillet"
    },
    {
      name: "Months (full) - August",
      format: "%B",
      value: new Date(1990, 7, 1, 13, 05, 59),
      expected: "août"
    },
    {
      name: "Months (full) - September",
      format: "%B",
      value: new Date(1990, 8, 1, 13, 05, 59),
      expected: "septembre"
    },
    {
      name: "Months (full) - October",
      format: "%B",
      value: new Date(1990, 9, 1, 13, 05, 59),
      expected: "octobre"
    },
    {
      name: "Months (full) - November",
      format: "%B",
      value: new Date(1990, 10, 1, 13, 05, 59),
      expected: "novembre"
    },
    {
      name: "Months (full) - December",
      format: "%B",
      value: new Date(1990, 11, 1, 13, 05, 59),
      expected: "décembre"
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
      expected: "fév"
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
      expected: "avr"
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
      expected: "aoû"
    },
    {
      name: "Months (short) - September",
      format: "%b",
      value: new Date(1990, 8, 1, 13, 05, 59),
      expected: "sep"
    },
    {
      name: "Months (short) - October",
      format: "%b",
      value: new Date(1990, 9, 1, 13, 05, 59),
      expected: "oct"
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
      expected: "déc"
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
    }
  ]
});