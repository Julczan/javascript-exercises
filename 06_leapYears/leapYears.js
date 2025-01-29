const leapYears = function (year) {
  //Can be devided by four
  //Can't be devided by 100 unless they are divisable by 400 as well

  //To fix: 1900 is divisable by 4
  if (year % 4 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
