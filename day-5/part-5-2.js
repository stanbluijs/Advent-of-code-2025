// Does not work

import readFile from '../read-file.js';

let limit = 0;

function compareRanges(rangeA, rangeB) {
  const startValueA = rangeA[0];
  const startValueB = rangeB[0];

  return startValueA < startValueB ? -1 : 1;
}

function process(ranges, nr) {

	let index = 0;
	while (index < ranges.length) {
		let merged = false;
		const range = ranges[index];

		let rI = parseInt(index) + 1;

		while (rI < ranges.length) {
			// console.log(index, rI);
			const inRange = ranges[rI];

			// console.log(index, rI, range, inRange);
			// console.log('range.start >= inRange.start', range.start >= inRange.start);
			// console.log('&& range.start <= inRange.end', range.start <= inRange.end);
			// console.log('&& range.end > inRange.end', range.end > inRange.end);

			// console.log('range.end >= inRange.start', range.end >= inRange.start);
			// console.log('&& range.end <= inRange.end', range.end <= inRange.end);
			// console.log('&& range.start < inRange.start', range.start < inRange.start);
			
			if (
				// if start in range && end niet
				range.start >= inRange.start
				&& range.start <= inRange.end
				&& range.end > inRange.end
			) {
				ranges[rI].end = range.end;
				ranges.splice(index, 1);
				merged = true;
				rI = ranges.length;
			} else if (
				// if end in range && start niet
				range.end >= inRange.start
				&& range.end <= inRange.end
				&& range.start < inRange.start
			) {
				ranges[rI].start = range.start;
				ranges.splice(index, 1);
				merged = true;
				rI = ranges.length;
			} else if (
			// if start en end in range
				range.start >= inRange.start
				&& range.start <= inRange.end
				// && range.end >= freshRange.start
				&& range.end <= inRange.end
			) {
				merged = true;
				ranges.splice(index, 1);
				rI = ranges.length;
			}
			// console.log('');
			rI++;
		}

		// console.log('');
		if (merged == false) {
			index++;
		}
	}

	return ranges;
}

function countIds(ranges) {
	let count = 0;

	for (const index in ranges) {
		const range = ranges[index];

		// count++;
		count = parseInt(count) + parseInt(range.end - range.start);
	}

	return count;
}

try {
	const file = 'example';
	// const file = 'input';
	const ranges = await readFile(`${file}-range.txt`).then((textRanges) => {
		return textRanges.map((tr) => {
			const r = tr.split('-');
			return {
				'start': parseInt(r[0]),
				'end': parseInt(r[1])
			}
		});
	});

	const processed = process(ranges);
	// console.log(processed);

	const expected = 353863745078671;
	const result = countIds(ranges);

	console.log('expected', expected);
	console.log('result', result);
	if (expected == result) {
		console.log('Perfect');
	} else if(result < expected) {
		console.log('To low', result - expected);
	} else if(result > expected) {
		console.log('To high', expected - result);
	} else {
		console.log('unexpected');
	}
} catch(error) {
	console.log(error);
}
