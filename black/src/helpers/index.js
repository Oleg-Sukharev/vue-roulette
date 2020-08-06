/**
 * @param {number} number
 * @param {boolean} include
 * @return {number}
 */
export function randomIndex(number, include = false) {
  return Math.floor(Math.random() * number + Number(include));
}