const leapYears = function(year) {
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    return true;
  } else {
    return false;
  }
};

leapYears(2000);
leapYears(1985);
// Do not edit below this line
module.exports = leapYears;
