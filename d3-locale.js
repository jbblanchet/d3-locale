d3.locale.en_CA = d3.locale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  dateTime: "%A, %B %-d, %Y %X",
  date: "%Y-%m-%d",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

d3.locale.en_US = d3.locale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  dateTime: "%A, %B %-d, %Y %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

d3.locale.fr_CA = d3.locale({
  decimal: ",",
  thousands: " ",
  grouping: [3],
  currency: ["", " $"],
  dateTime: "%A, %-d %B %Y %X",
  date: "%Y-%m-%d",
  time: "%H:%M:%S",
  periods: ["", ""],
  days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  shortDays: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
  months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
  shortMonths: ["jan", "fév", "mar", "avr", "mai", "jun", "jul", "aoû", "sep", "oct", "nov", "déc"]
});

d3.locale.pt_BR = d3.locale({
   decimal: ",",
   thousands: ".",
   grouping: [3],
   currency: ["R$", ""],
   dateTime: "%A, %-d de %B %Y %X",
   date: "%d/%m/%Y",
   time: "%H:%M:%S",
   periods: ["", ""],
   days: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
   shortDays: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
   months: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro",  "novembro", "dezembro"],
   shortMonths: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"]
});


d3.locale.ru_RU = d3.locale({
  decimal: ",",
  thousands: " ",
  grouping: [3],
  currency: ["", " руб."],
  dateTime: "%A, %-d %B %Y г. %X",
  date: "%d.%m.%Y",
  time: "%-H:%M:%S",
  periods: ["", ""],
  days: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
  shortDays: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  months: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
  shortMonths: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
});