/**
 * a handy helper for debugging expressions
 *
 * the main export is a function that takes one argument and:
 * 1. logs the argument
 * 2. returns the argument
 *
 * @example
 * import { log } from './log.js';
 * const x = 1 + log(2 + 3); // 5
 * log(x); // 6
 * console.log(x); // 6
 *
 * the exported function has one property for each console method
 * you can destructure it to have more inline logs:
 *
 * @example
 * import { log } from './log.js';
 * const { trace } = log;
 * const x = trace(1 + log(2 + 3)); // 5 then 6 + a stack trace
 * log(x); // 6
 * trace(x); // 6 + a stack trace
 */

const inlineConsoleMethods = Object.entries(console).reduce(
  (all, next) => ({
    ...all,
    [next[0]]: (thing) => (console[next[0]](thing), thing),
  }),
  {},
);

export const log = Object.assign(
  inlineConsoleMethods.log,
  inlineConsoleMethods,
);
