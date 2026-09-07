import { rename, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDir = fileURLToPath(new URL('../dist/client/', import.meta.url));
const nestedRoot = join(outputDir, 'c-j-landscaping-trees');

// GitHub Pages already mounts the artifact at /c-j-landscaping-trees/.
// Lift Vinext's asset-prefixed folder to avoid doubling that path.
await rename(join(nestedRoot, '_next'), join(outputDir, '_next'));
await rm(nestedRoot, { recursive: true, force: true });
