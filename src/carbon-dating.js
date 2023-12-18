const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!validateInput(sampleActivity)) return false;

  function validateInput(input) {
    if (!sampleActivity) return false;
    if (typeof input !== "string") return false;
    if (isNaN(input)) return false;
    if (!isFinite(input)) return false;

    return true;
  }

  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);


  if (!isFinite(t) || t < 0) return false;

  return t;
}

module.exports = {
  dateSample
};
