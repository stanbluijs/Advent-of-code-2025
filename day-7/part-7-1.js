import readFile from '../read-file.js';

function process(input) {
	let letItBeam = [];
	let splitCount = 0;
	const startLine = input.shift();

	let currentBeamIndex = [];
	currentBeamIndex.push(startLine.indexOf('S'));
	letItBeam.push(startLine);
	
	for (const i in input) {
		const line = input[i]

		const newBeamIndex = [];
		for (let cursor = 0; cursor < currentBeamIndex.length; cursor++) {
			const beamIndex = currentBeamIndex[cursor];
			if (line[beamIndex] == '^') {
				newBeamIndex.push(beamIndex - 1);
				newBeamIndex.push(beamIndex + 1);
				splitCount++;
			} else if(line[beamIndex] == '.') {
				newBeamIndex.push(beamIndex);
			}
		}

		currentBeamIndex = [...new Set(newBeamIndex)];
	}

	return splitCount;
}

try {
	// const input = await readFile('example.txt');
	const input = await readFile('input.txt');

	console.log(process(input));
} catch (error) {
	console.error(error);
}