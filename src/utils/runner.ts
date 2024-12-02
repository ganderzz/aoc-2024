let day = Deno.args[0];

if (!day) {
  day = prompt("Enter a day to run:") ?? "";

  if (!day) {
    console.error("No day provided.");
    Deno.exit(1);
  }
}

const decoder = new TextDecoder();

const process = new Deno.Command(Deno.execPath(), {
  args: [`run`, `--allow-read`, `--allow-run`, `./src/day-${day}/main.ts`],
  cwd: Deno.cwd(),
});
const output = await process.output();

if (!output.success) {
  console.error(decoder.decode(output.stderr));
  Deno.exit(1);
}

console.log(decoder.decode(output.stdout));
