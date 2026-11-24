import { mkdirSync, writeFileSync } from "node:fs";

// One sentence for a traveler from 1800, explaining the modern internet.
const LINE =
  "It is one road joining every library and post office on Earth, so any letter you write arrives before the ink is dry, and any face you miss is there to speak with.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only whitespace. Fail loudly here rather than ship an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
