import readFile from '../read-file.js';

function removeAdjacentDuplicates(line) {
	const indexesToRemove = [];

	for (let i = 0; i < line.length; i++) {
		const x = i;
		let y = i + 1;
		let z = y + 1;

		while (z < line.length && line[x] === line[y] && line[x] === line[z]) {
			if (!indexesToRemove.includes(y)) {
				indexesToRemove.push(y);	
			}
			y++;
			z++;
		}
	}

	let trimmedLine = line;
	for (let i = indexesToRemove.length - 1; i >= 0; i--) {
		const remove = indexesToRemove[i];

		const start = trimmedLine.slice(0, remove - 1);
		const end = trimmedLine.substring(remove);
		trimmedLine = start + end;
	}

	return trimmedLine;
}

function findJoltage(line) {
	let highestJoltage = 0;

	const trimmedLine = removeAdjacentDuplicates(line);

	let x = 0;
	
	while (x < trimmedLine.length) {
		let y = x + 1;

		while (y < trimmedLine.length) {
			const test = parseInt(trimmedLine[x] + trimmedLine[y]);
			if (test > highestJoltage) {
				highestJoltage = test;
			}
			y++;
		}
		x++;
	}
	// console.log(line);
	// console.log(trimmedLine);
	// console.log(highestJoltage);

	return highestJoltage;
}

function process(lines) {
	let total = 0;

	// findJoltage(lines[0]);

	for(let i = 0; i < lines.length; i++) {
		if (lines[i] === undefined) {
			continue;
		}

		total += findJoltage(lines[i]);
	}

	return total;
}

try {
	// const lines = await readFile('example.txt');
	const lines = await readFile('input.txt');
	const result = process(lines);
	console.log(result);
} catch (error) {
	console.error(error.message);
}