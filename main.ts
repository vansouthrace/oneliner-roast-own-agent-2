import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "My agent apologized for the mistake, then apologized for the apology, then confidently shipped the same mistake with better formatting.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
