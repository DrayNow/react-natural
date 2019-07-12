/**
 * Takes a duration object and returns a new duration where any
 * minutes greater or equal to 60 are converted to hours
 *
 * Examples:
 *   - { h: 0, m: 60 } -> { h: 1, m: 0 }
 *   - { h: 0, m: 90 } -> { h: 1, m: 30 }
 *
 * @param {object} Duration object
 */
export default function compressDuration({ h = 0, m = 0 }) {
  return {
    h: h + Math.floor(m / 60),
    m: m % 60
  }
}
