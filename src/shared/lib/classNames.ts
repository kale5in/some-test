/**
 * Combines multiple class names into a single string, ignoring falsy values
 *
 * @param {...(string|boolean|undefined|null)} classes - CSS classes to combine
 * @returns {string} - Combined class string
 *
 * @example
 * classNames('btn', condition && 'btn-primary', null, undefined)
 * // If condition = true, returns 'btn btn-primary'
 */

const classNames = (...classes: unknown[]) => classes.filter(Boolean).join(" ");

export { classNames };
