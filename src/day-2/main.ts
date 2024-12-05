import { isSafe, parseInput } from "./utils.ts";

const rows = await parseInput();

// -===================- Part One -===================-
const safetyCount = rows.reduce((accu, current) => {
  if (isSafe(current.split(" "))) {
    return accu + 1;
  }
  return accu;
}, 0);

console.log(`There are ${safetyCount} reports that are safe.`);

// -===================- Part Two -===================-
const safetyCountNew = rows.reduce((accu, current) => {
  if (isSafe(current.split(" "), 1)) {
    return accu + 1;
  }
  return accu;
}, 0);

console.log(`There are ${safetyCountNew} reports that are safe.`);
