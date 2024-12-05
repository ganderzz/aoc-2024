export async function parseInput() {
  const input = await Deno.readTextFile(
    import.meta.resolve("./input.txt").split("file://")[1]
  );

  return input.split("\n").map((line) => line.trim());
}

export function isSafe(items: string[], threshold: number = 0): boolean {
  const isIncreasing = parseInt(items[0], 10) < parseInt(items[1], 10);

  let badLevels = 0;
  for (let i = 1; i < items.length; i++) {
    const diff = parseInt(items[i], 10) - parseInt(items[i - 1], 10);

    // Not increasing or decreasing
    if (diff === 0) {
      badLevels++;
      continue;
    }

    if (isIncreasing && (diff < 1 || diff > 3)) {
      badLevels++;
      continue;
    }

    if (!isIncreasing && (diff > -1 || diff < -3)) {
      badLevels++;
      continue;
    }
  }

  return badLevels <= threshold;
}
