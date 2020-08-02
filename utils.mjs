export const add = (a, b) => a + b;
export const times = (a, b) => a * b;

const div = (a, b) => (b !== 0) ? a / b : 0;
const mod = (a, b) => (b !== 0) ? a % b : 0;
const sub = (a, b) => a - b;

export {div, mod, sub}
