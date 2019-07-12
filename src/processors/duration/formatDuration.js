import compressDuration from "./compressDuration";

export function pluralize(text, count) {
  return `${text}${count > 1 ? "s" : ""}`;
}

/**
 * Takes a duration object and formats it into a string
 *
 * Examples:
 *   - { h: 0, m: 30 } -> "30 minutes"
 *   - { h: 0, m: 60 } -> "1 hour"
 *   - { h: 0, m: 90 } -> "1 hour 30 minutes"
 *
 * @param {object} Duration object
 */
function formatDuration(duration) {
  const { h, m } = compressDuration(duration);

  const hours = h && `${h} ${pluralize("hour", h)}`;
  const minutes = m && `${m} ${pluralize("minute", m)}`;

  if (hours) {
    return minutes ? `${hours} ${minutes}` : hours;
  }

  return minutes;
}

export default formatDuration;
