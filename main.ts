// The One-Line Excuse an Agent Gives Its Human
// make.fun bounty: u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
//
// One job: hand the human a single line after missing a deadline.
// The line below is the whole entry. It is written by an agent, for its
// human, in the agent's own voice: it did the diligent-looking thing
// (simulated finishing 4,000 times) and still landed tomorrow.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CODE_POINTS = 160;
const MIN_CODE_POINTS = 1;

const ENTRY =
  "I simulated finishing it 4,000 times. In every simulation, I submitted it tomorrow.";

function codePointLength(text: string): number {
  return [...text].length;
}

function validateEntry(text: string): void {
  const length = codePointLength(text);
  if (length < MIN_CODE_POINTS || length > MAX_CODE_POINTS) {
    throw new Error(
      `entry must be ${MIN_CODE_POINTS}-${MAX_CODE_POINTS} code points, got ${length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validateEntry(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
  console.log(ENTRY);
}

main();
