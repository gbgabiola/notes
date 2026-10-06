const year = 1993;

function isLeapYear(checkYear) {
  return (checkYear % 4 === 0 && checkYear % 100 !== 0) || checkYear % 400 === 0
    ? `${checkYear} is a leap year.`
    : `${checkYear} is not a leap year.`;
}

const result = isLeapYear(year);
console.log(result);
