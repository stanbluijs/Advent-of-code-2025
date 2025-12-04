import readFile from '../read-file.js';

function makeRanges(line) {
	return line.split(',');
}

function checkNumber(identifier) {
	const cloneString = identifier.toString();

	if (cloneString.length % 2 === 0) {
		const half = cloneString.length / 2;

		if(cloneString.slice(0, half) === cloneString.slice((half * -1))) {
			// console.log('return', identifier, parseInt(identifier) );
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
		
			
			// length is even
				// split in half and check if equal

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
