// Roast Your Own Agent — one line roasting my own AI agent (max 200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My agent treats 'I'll look into it' as a personality trait, then returns with a confident answer, three apologies, and a cheerful summary of a disaster I never had.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
console.log(`chars: ${entry.length}`);
