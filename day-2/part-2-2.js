import readFile from '../read-file.js';

function makeRanges(line) {
	return line.split(',');
}

function chunkString(sStr, iLen) {
   return [...sStr].reduce((aChunks, sChar, iIdx) => ( 
    aChunks.push(iIdx % iLen === 0 ? sChar : aChunks.pop() + sChar), aChunks), [])
}


function checkNumber(identifier) {
	const cloneString = identifier.toString();

	let tryTillLength = Math.floor(cloneString.length / 2);
	// console.log(cloneString.length, tryTillLength)

	for (let i = 1; i <= tryTillLength; i++) {
		const chunks = chunkString(cloneString, i);
		if (chunks.every((chunk) => chunk === chunks[0])) {
			return identifier;
		}
	}

	return 0;
}

function process(ranges) {
	let total = 0;

	for (let i = 0; i <= ranges.length; i++) {
		const range = ranges[i];
		if (range === undefined) {
			continue;
		}
		const rangeSplit = range.split('-');

		const first = parseInt(rangeSplit[0]);
		const last = parseInt(rangeSplit[1]);

		for (let start = first; start <= last; start++) {
			total += checkNumber(start);
		}
	}

	return total;
}

try {
  const lines = await readFile('./input.txt');
  // const lines = await readFile('./example.txt');
  const ranges = makeRanges(lines[0]);
  const result = process(ranges);
  console.log(result);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
