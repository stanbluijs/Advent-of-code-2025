import fs from 'fs';

export default async function readFile(filePath) {
	let lines = [];
  const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

  try {
    for await (const chunk of readStream) {
    	const split = chunk.split('\n');
    	lines = [lines, split].flat();
    }
    console.log('Finished reading the file.');
    return lines;
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
}