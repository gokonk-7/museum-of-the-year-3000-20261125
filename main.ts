// Museum of the Year 3000 — make.fun bounty
// u-donrulezz-museum-of-the-year-3000-b727a0bb
//
// Writes a single museum label (one line, at most 200 characters) to
// /output/entry.txt. The label is a fixed, hand-written line: the entry is
// deterministic by design, so every run produces the same text.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Printed QR code, c. 2024. Humans pointed their phones at this maze to order lunch. Many starved politely while it loaded.";

const MAX_LENGTH = 200;
const OUTPUT_PATH = "/output/entry.txt";

if (ENTRY.length < 1 || ENTRY.length > MAX_LENGTH || ENTRY.trim().length === 0) {
  throw new Error(
    `Entry must be 1-${MAX_LENGTH} non-whitespace characters, got ${ENTRY.length}.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY + "\n", "utf8");
console.log(ENTRY);
