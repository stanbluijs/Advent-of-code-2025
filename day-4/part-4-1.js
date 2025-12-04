import readFile from '../read-file.js';

function makeMatrix(lines) {
	const matrix = [];
	for (const lineI in lines) {
		const line = lines[lineI];
		// const posLine = [];
		// for (const pos in line) {
		// 	posLine.push(line[pos]);
		// }
		// matrix.push(posLine);
		matrix.push(line);
	}
	return matrix;
}

try {
	// const lines = await readFile('input.txt');
	const lines = await readFile('example.txt');
	const matrix = makeMatrix(lines);

	console.log(matrix);

} catch(error) {
	console.error(error.message);
}