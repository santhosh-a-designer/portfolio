#!/usr/bin/env node

/**
 * Validates that vidyasSkimCopy in lib/vidyasKitchenCaseStudyContent.ts
 * remains under 180 words for the 60-second executive skim test.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.resolve(__dirname, '../lib/vidyasKitchenCaseStudyContent.ts');
const content = fs.readFileSync(filePath, 'utf-8');

const match = content.match(/export const vidyasSkimCopy = ([\s\S]*?);\n\nexport type VidyasDesignSwatch/);
if (!match) {
  console.error('Could not locate vidyasSkimCopy in lib/vidyasKitchenCaseStudyContent.ts');
  process.exit(1);
}

const rawObjText = match[1];

// Extract all quoted strings from the object
const stringMatches = rawObjText.matchAll(/"([^"\\]*(?:\\.[^"\\]*)*)"/g);
let totalWords = 0;
const wordsList = [];

for (const m of stringMatches) {
  const str = m[1];
  // Skip image URLs/paths and identifiers
  if (str.startsWith('/') || str.startsWith('http') || str.endsWith('.webp') || str.endsWith('.jpg') || str.endsWith('.png') || /^[0-9]+$/.test(str)) {
    continue;
  }
  const words = str.trim().split(/\s+/).filter(Boolean);
  totalWords += words.length;
  wordsList.push(...words);
}

console.log(`[Skim Copy Word Count Test] Total words: ${totalWords} / 180 allowed`);

if (totalWords > 180) {
  console.error(`FAILED: Skim copy contains ${totalWords} words, which exceeds the 180-word ceiling!`);
  process.exit(1);
}

console.log(`PASSED: Skim copy is strictly under 180 words (${totalWords} words).`);
process.exit(0);
