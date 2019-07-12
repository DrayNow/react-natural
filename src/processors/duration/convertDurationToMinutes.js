/**
 * Takes a duration object and returns the duration in minutes (integer)
 *
 * @param {object} Duration object
 */
export default function convertDurationToMinutes({ h = 0, m = 0 }) {
  return h * 60 + m
}
