import { assertEquals } from "jsr:@std/assert";
import { isSafe } from "./utils.ts";

Deno.test("Part One", () => {
  assertEquals(isSafe(["7", "6", "4", "2", "1"]), true);
  assertEquals(isSafe(["1", "2", "7", "8", "9"]), false);
  assertEquals(isSafe(["9", "7", "6", "2", "1"]), false);
  assertEquals(isSafe(["1", "3", "2", "4", "5"]), false);
  assertEquals(isSafe(["8", "6", "4", "4", "1"]), false);
  assertEquals(isSafe(["1", "3", "6", "7", "9"]), true);
  assertEquals(isSafe(["9", "7", "6", "3", "1"]), true);
});

Deno.test("Part Two", () => {
  assertEquals(isSafe(["7", "6", "4", "2", "1"], 1), true);
  assertEquals(isSafe(["1", "2", "7", "8", "9"], 1), false);
  //   assertEquals(isSafe(["9", "7", "6", "2", "1"], 1), false);
  //   assertEquals(isSafe(["1", "3", "2", "4", "5"], 1), true);
  //   assertEquals(isSafe(["8", "6", "4", "4", "1"], 1), true);
  //   assertEquals(isSafe(["1", "3", "6", "7", "9"], 1), true);
  //   assertEquals(isSafe(["9", "7", "6", "3", "1"], 1), true);
});
