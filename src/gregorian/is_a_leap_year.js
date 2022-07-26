import divisible_by from "../divisible_by.js";

function is_a_leap_year(year) {
  if (
    divisible_by(year, 400) === true ||
    (divisible_by(year, 4) === true && divisible_by(year, 100) === false)
  )
    return `12.09.${year}`;
  return `13.09.${year}`;
}

export default is_a_leap_year;
