import readFile from '../read-file.js';

function process(ids, ranges) {
	let freshCount = 0;


	for (const indexI in ids) {
		const id = ids[indexI];

		for (const indexR in ranges) {
			const range = ranges[indexR];

			if (id >= range.start && id <= range.end) {
				freshCount++;
				break;
			}
		}
	}

	return freshCount;
}

try {
	// const file = 'example';
	const file = 'input';
	const ids = await readFile(`${file}-ids.txt`).then((textIds) => {
		return textIds.map((x) => parseInt(x))
	});
	const ranges = await readFile(`${file}-range.txt`).then((textRanges) => {
		return textRanges.map((tr) => {
			const r = tr.split('-');
			return {
				'start': parseInt(r[0]),
				'end': parseInt(r[1])
			}
		});
	});

	console.log(process(ids, ranges));
} catch(error) {
	console.log(error);
}
