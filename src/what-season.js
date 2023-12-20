const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (!Date.parse(date)) {
    throw new Error("Invalid date!");
  }

  const seasons = [
    "winter",
    "winter",
    "spring",
    "spring",
    "spring",
    "summer",
    "summer",
    "summer",
    "autumn",
    "autumn",
    "autumn",
    "winter",
  ];

  // play dirty
  let month;
  try {
    month = date.getMonth();
    date.setUTCHours();
  } catch (err) {
    throw new Error("Invalid date!");
  }

  return seasons[month];
}

// throw new NotImplementedError('Not implemented');
// // remove line with error and write your code here
module.exports = {
  getSeason
};
