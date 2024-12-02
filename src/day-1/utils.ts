export async function parseInput() {
  const input = await Deno.readTextFile(
    import.meta.resolve("./input.txt").split("file://")[1]
  );

  const firstList = [];
  const secondList = [];

  for (const line of input.split("\n")) {
    const match = line.match(/(\d+)(\s+)(\d+)/i);
    if (!match) {
      continue;
    }
    firstList.push(parseInt(match[0].trim(), 10));
    secondList.push(parseInt(match[3].trim(), 10));
  }

  firstList.sort();
  secondList.sort();

  return { firstList, secondList };
}
