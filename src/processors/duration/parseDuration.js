import compressDuration from "./compressDuration";

/**
 * Find any continuous numerical value that preceeds an "h" or an "m" with any amount of whitespace
 * in between.
 */
const regex = /([0-9]+)(\s*[h|m])/gi;

/**
 * Parses text into a duration object with hours and minutes
 *
 * Examples:
 *   - 2 hours and 30 minutes -> { h: 2, m: 30 }
 *   - 3 hr -> { h: 3, m: 0 }
 *   - 5h20m -> { h: 5, m: 20 }
 *   - 90m -> { h: 1, m: 30 }
 *
 * @param {string} text - The duration text you want to parse
 */
export default function parseDuration(text) {
  const matches = text.match(regex);

  if (!matches) {
    return null;
  }

  const results = matches
    .map(item => item.replace(/ /g, ""))
    .map(item => item.toLowerCase());

  const duration = results.reduce((duration, item, i, array) => {
    // "Break" the reduce function once we found an hour and minute duration
    if (duration.h && duration.m) {
      array.splice(0, array.length);
    }

    for (let unit of ["m", "h"]) {
      if (!duration[unit] && item.endsWith(unit)) {
        duration[unit] = parseInt(item.substring(0, item.length - 1));
        break;
      }
    }

    return duration;
  }, {});

  return compressDuration(duration);
}
