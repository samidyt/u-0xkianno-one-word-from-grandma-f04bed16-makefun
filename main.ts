// One Word From Grandma — make.fun entry (program/v1).
//
// The harness runs `node main.ts` (Node 22, standard library only, no
// network). The program writes exactly one word to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The word: "Gugel" — the way an Indonesian grandma spells Google when she
// texts about AI. To her, the talking machine IS Google, and the phonetic
// spelling is the whole joke: warm, a little baffled, funny in one word,
// and it lands with no caption at all.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Gugel";

// Gate, from the bounty rules: /output/entry.txt must be UTF-8 text of
// 1 to 30 characters, not only white space, and exactly one word. Check
// our own output before writing it, and fail loudly instead of handing
// in a bad entry. The output is fully deterministic: same word every run.
if (
  WORD.length < 1 ||
  WORD.length > 30 ||
  WORD.trim().length === 0 ||
  /\s/.test(WORD)
) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
