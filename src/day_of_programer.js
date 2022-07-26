// Normal year = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243.
// Leap year   = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 = 244.
import is_a_leap_year_g from "./gregorian/is_a_leap_year.js";
import is_a_leap_year_y from "./yulian/is_a_leap_year.js";
function day_of_programer(year) {
  if (year > 1917) return is_a_leap_year_g(year);
  else return is_a_leap_year_y(year);
}
export default day_of_programer;
