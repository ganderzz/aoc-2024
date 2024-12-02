import { parseInput } from "./utils.ts";

const { firstList, secondList } = await parseInput();

// -===================- Part One -===================-
let distance = 0;

for (let i = 0; i < firstList.length; i++) {
  distance += Math.abs(firstList[i] - secondList[i]);
}

console.log(`The distance between the two lists is: ${distance}`);

// -===================- Part Two -===================-
let similarity = 0;

// Not the fastest approach
for (let i = 0; i < firstList.length; i++) {
  similarity +=
    firstList[i] *
    secondList.reduce((accu, current) => {
      if (current === firstList[i]) {
        return accu + 1;
      }

      return accu;
    }, 0);
}

console.log(`The simularity score between the two lists is: ${similarity}`);
