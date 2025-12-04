import readFile from '../read-file.js';

let accasableRolCount = 0;

function makeMatrix(lines) {
	const matrix = [];
	for (const lineI in lines) {
		const line = lines[lineI];
		const posLine = [];
		for (const pos in line) {
			posLine.push(line[pos]);
		}
		matrix.push(posLine);
		// matrix.push(line);
	}
	return matrix;
}

function countOnPosInRow(row, pos) {
	let rollCount = 0;


	// console.log(pos, (pos > 0));
	if (pos > 0) {
		rollCount = row[pos - 1] === '@' ? (rollCount + 1) : rollCount;
	}

	// console.log(row[pos]);
	rollCount = row[pos] === '@' ? (rollCount + 1) : rollCount;

	// console.log(pos, row.length - 2, (pos < row.length - 2));
	if (pos < row.length - 1) {
		// console.log(row[pos + 1]);
		rollCount = row[pos + 1] === '@' ? (rollCount + 1) : rollCount;
	}

	return rollCount;
}

function process(matrix) {
	const matrixResult = [];
	let roundCount = 0;

	for (const matrixIndex in matrix) {
		// console.log('***********************', matrixIndex);
		const m = parseInt(matrixIndex);
		let rowOfRolls = matrix[m];
		const rollResult = [];

		for (const rowOfRollsIndex in rowOfRolls) {
			const pos = parseInt(rowOfRollsIndex);
			const posValue = rowOfRolls[pos];

			if (posValue === '@') {
				let rollCount = 0;

				// row above
				if (m > 0) {
					rollCount += countOnPosInRow(matrix[m-1], pos);
				}
				// row current
				rollCount += countOnPosInRow(matrix[m], pos);

				// row below
				if (m < matrix.length - 1) {
					rollCount += countOnPosInRow(matrix[m+1], pos);
				}

				// less than 4 allowed + roll it self
				// console.log(rollCount);
				if (rollCount <= 4) {
					rollResult.push('x');
					roundCount++;
					accasableRolCount++;
				} else {
					rollResult.push(posValue);
				}
			} else {
				rollResult.push(posValue);
			}
		}

		// console.log('rollResult', rollResult);
		matrixResult[m] = rollResult;
	}

	if (roundCount > 0) {
		process(matrixResult);
	}

	return matrixResult;
}

try {
	const lines = await readFile('input.txt');
	// const lines = await readFile('example.txt');
	const matrix = makeMatrix(lines);
	// console.log(matrix);
	const result = process(matrix);
	// console.log(result);
	console.log(accasableRolCount);

} catch(error) {
	console.error(error);
	console.error(error.message);
}