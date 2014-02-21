var testModules = testModules || [];

testModules.push({
  culture: "en_CA",
  numberTests: [
    {
      name: "Format float",
      format: ",.2f",
      value: 12345.67,
      expected: "12,345.67"
    },
    {
      name: "Format currencies",
      format: "$,.2f",
      value: 12345.67,
      expected: "$12,345.67"
    },
    {
      name: "Format currencies (SI-prefix)",
      format: "$,.4s",
      value: 12345.67,
      expected: "$12.35k"
    }
  ],
  dateTimeTests: [
    {
      name: "Date and time",
      format: "%c",
      value: new Date(1990, 0, 1, 13, 05, 59),
      expected: "Monday, January 1, 1990 1:05:59 PM"
    },
    {
      name: "Date and time (leading 0)",
      format: "%c",
      value: new Date(1990, 0, 1, 1, 05, 59),
      expected: "Monday, January 1, 1990 1:05:59 AM"
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
      expected: "1:05:59 PM"
    },
    {
      name: "Weekdays (full) - Monday",
      format: "%A",
      value: new Date(2014, 1, 17, 13, 05, 59),
      expected: "Monday"
    },
    {
      name: "Weekdays (full) - Tuesday",
      format: "%A",
      value: new Date(2014, 1, 18, 13, 05, 59),
      expected: "Tuesday"
    },
    {
      name: "Weekdays (full) - Wednesday",
      format: "%A",
      value: new Date(2014, 1, 19, 13, 05, 59),
      expected: "Wednesday"
    },
    {
      name: "Weekdays (full) - Thrusday",
      format: "%A",
      value: new Date(2014, 1, 20, 13, 05, 59),
      expected: "Thursday"
    },
    {
      name: "Weekdays (full) - Friday",
      format: "%A",
      value: new Date(2014, 1, 21, 13, 05, 59),
      expected: "Friday"
    },
    {
      name: "Weekdays (full) - Saturday",
      format: "%A",
      value: new Date(2014, 1, 22, 13, 05, 59),
      expected: "Saturday"
    },
    {
      name: "Weekdays (full) - Sunday",
      format: "%A",
      value: new Date(2014, 1, 23, 13, 05, 59),
      expected: "Sunday"
    },
    {
      name: "Weekdays (short) - Monday",
      format: "%a",
      value: new Date(2014, 1, 17, 13, 05, 59),
      expected: "Mon"
    },
    {
      name: "Weekdays (short) - Tuesday",
      format: "%a",
      value: new Date(2014, 1, 18, 13, 05, 59),
      expected: "Tue"
    },
    {
      name: "Weekdays (short) - Wednesday",
      format: "%a",
      value: new Date(2014, 1, 19, 13, 05, 59),
      expected: "Wed"
    },
    {
      name: "Weekdays (short) - Thrusday",
      format: "%a",
      value: new Date(2014, 1, 20, 13, 05, 59),
      expected: "Thu"
    },
    {
      name: "Weekdays (short) - Friday",
      format: "%a",
      value: new Date(2014, 1, 21, 13, 05, 59),
      expected: "Fri"
    },
    {
      name: "Weekdays (short) - Saturday",
      format: "%a",
      value: new Date(2014, 1, 22, 13, 05, 59),
      expected: "Sat"
    },
    {
      name: "Weekdays (short) - Sunday",
      format: "%a",
      value: new Date(2014, 1, 23, 13, 05, 59),
      expected: "Sun"
    },
    {
      name: "Months (full) - January",
      format: "%B",
      value: new Date(1990, 0, 1, 13, 05, 59),
      expected: "January"
    },
    {
      name: "Months (full) - February",
      format: "%B",
      value: new Date(1990, 1, 1, 13, 05, 59),
      expected: "February"
    },
    {
      name: "Months (full) - March",
      format: "%B",
      value: new Date(1990, 2, 1, 13, 05, 59),
      expected: "March"
    },
    {
      name: "Months (full) - April",
      format: "%B",
      value: new Date(1990, 3, 1, 13, 05, 59),
      expected: "April"
    },
    {
      name: "Months (full) - May",
      format: "%B",
      value: new Date(1990, 4, 1, 13, 05, 59),
      expected: "May"
    },
    {
      name: "Months (full) - June",
      format: "%B",
      value: new Date(1990, 5, 1, 13, 05, 59),
      expected: "June"
    },
    {
      name: "Months (full) - July",
      format: "%B",
      value: new Date(1990, 6, 1, 13, 05, 59),
      expected: "July"
    },
    {
      name: "Months (full) - August",
      format: "%B",
      value: new Date(1990, 7, 1, 13, 05, 59),
      expected: "August"
    },
    {
      name: "Months (full) - September",
      format: "%B",
      value: new Date(1990, 8, 1, 13, 05, 59),
      expected: "September"
    },
    {
      name: "Months (full) - October",
      format: "%B",
      value: new Date(1990, 9, 1, 13, 05, 59),
      expected: "October"
    },
    {
      name: "Months (full) - November",
      format: "%B",
      value: new Date(1990, 10, 1, 13, 05, 59),
      expected: "November"
    },
    {
      name: "Months (full) - December",
      format: "%B",
      value: new Date(1990, 11, 1, 13, 05, 59),
      expected: "December"
    },
    {
      name: "Months (short) - January",
      format: "%b",
      value: new Date(1990, 0, 1, 13, 05, 59),
      expected: "Jan"
    },
    {
      name: "Months (short) - February",
      format: "%b",
      value: new Date(1990, 1, 1, 13, 05, 59),
      expected: "Feb"
    },
    {
      name: "Months (short) - March",
      format: "%b",
      value: new Date(1990, 2, 1, 13, 05, 59),
      expected: "Mar"
    },
    {
      name: "Months (short) - April",
      format: "%b",
      value: new Date(1990, 3, 1, 13, 05, 59),
      expected: "Apr"
    },
    {
      name: "Months (short) - May",
      format: "%b",
      value: new Date(1990, 4, 1, 13, 05, 59),
      expected: "May"
    },
    {
      name: "Months (short) - June",
      format: "%b",
      value: new Date(1990, 5, 1, 13, 05, 59),
      expected: "Jun"
    },
    {
      name: "Months (short) - July",
      format: "%b",
      value: new Date(1990, 6, 1, 13, 05, 59),
      expected: "Jul"
    },
    {
      name: "Months (short) - August",
      format: "%b",
      value: new Date(1990, 7, 1, 13, 05, 59),
      expected: "Aug"
    },
    {
      name: "Months (short) - September",
      format: "%b",
      value: new Date(1990, 8, 1, 13, 05, 59),
      expected: "Sep"
    },
    {
      name: "Months (short) - October",
      format: "%b",
      value: new Date(1990, 9, 1, 13, 05, 59),
      expected: "Oct"
    },
    {
      name: "Months (short) - November",
      format: "%b",
      value: new Date(1990, 10, 1, 13, 05, 59),
      expected: "Nov"
    },
    {
      name: "Months (short) - December",
      format: "%b",
      value: new Date(1990, 11, 1, 13, 05, 59),
      expected: "Dec"
    },
    {
      name: "AM",
      format: "%p",
      value: new Date(1990, 0, 1, 11, 05, 59),
      expected: "AM"
    },
    {
      name: "PM",
      format: "%p",
      value: new Date(1990, 0, 1, 13, 05, 59),
      expected: "PM"
    }
  ]
});