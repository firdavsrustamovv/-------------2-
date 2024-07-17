function calculateTimeDifference(inputDate) {
  let startDate = new Date(inputDate);
  let endDate = new Date();
  let timeDifference = endDate - startDate;

  let msInSecond = 1000;
  let msInMinute = msInSecond * 60;
  let msInHour = msInMinute * 60;
  let msInDay = msInHour * 24;
  let msInMonth = msInDay * 30;
  let msInYear = msInDay * 365;

  let years = Math.floor(timeDifference / msInYear);

  let months = Math.floor(timeDifference / msInMonth);

  let days = Math.floor(timeDifference / msInDay);

  let hours = Math.floor(timeDifference / msInHour);

  let minutes = Math.floor(timeDifference / msInMinute);

  let seconds = Math.floor(timeDifference / msInSecond);

  return {
    years: years,
    months: months,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

let inputDate = prompt("Sanani kiriting (yyyy-mm-dd):");
let result = calculateTimeDifference(inputDate);

document.write(
  `O'tgan vaqt: ${result.years} yil, ${result.months} oy, ${result.days} kun, ${result.hours} soat, ${result.minutes} daqiqa, ${result.seconds} soniya.`
);
