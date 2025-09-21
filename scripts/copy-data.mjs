import { promises as fs } from 'fs';
import path from 'path';

const rootDir = process.cwd();
const sourceDir = path.join(rootDir, 'src', 'data');
const destinationDir = path.join(rootDir, 'public', 'data');

async function copyData() {
  try {
    await fs.mkdir(destinationDir, { recursive: true });
    const entries = await fs.readdir(sourceDir, { withFileTypes: true });

    const copyOperations = entries
      .filter((entry) => entry.isFile())
      .map((entry) =>
        fs.copyFile(path.join(sourceDir, entry.name), path.join(destinationDir, entry.name))
      );

    await Promise.all(copyOperations);
    console.log(`✅ Copied ${copyOperations.length} data file(s) to public/data.`);
  } catch (error) {
    console.error('❌ Failed to copy data files:', error);
    process.exitCode = 1;
  }
}

copyData();
