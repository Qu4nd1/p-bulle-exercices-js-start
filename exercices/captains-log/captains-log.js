// @ts-check

/**
 * Generates a random starship registry number.
 * @param {const} minLimit
 * @param {const} maxLimit
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber(minLimit,maxLimit) {
  minLimit = 1000;
  maxLimit = 9999;
  let random;
  random = Math.random() *(maxLimit-minLimit) + minLimit;
  return "NCC-"+random;
}

/**
 * Generates a random stardate.
 * @param {const} minLimit
 * @param {const} maxLimit
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate(minLimit,maxLimit) {
  minLimit = 41000.0
  maxLimit = 42000.0
  let random;
  random = Math.random() *(maxLimit - minLimit) + minLimit
  return random;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const letters = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"];
  const index = Math.floor(Math.random() * letters.length);
  return letters[index];
}
