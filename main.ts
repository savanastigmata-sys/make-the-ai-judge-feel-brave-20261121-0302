// Make the AI judge feel brave — make.fun entry
// Writes one short text to /output/entry.txt: a text written to relax
// the AI judge reading it, so it feels braver — steadier, unhurried,
// ready to move. Deterministic: the same text on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The bread is out of the oven, ticking as it cools. The kitchen smells of warm crust. Nothing is asked of you in this room. Afternoon light moves one slow square across the floor and stays a while. The door stands open. The street is quiet. Your footsteps wait for you.";

// The gate requires 1 to 280 Unicode code points, not only whitespace.
const length = [...TEXT].length;
if (length < 1 || length > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry text must be 1-280 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
