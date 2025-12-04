import readFile from '../read-file.js';

async function process(lines) {
	let nullCounter = 0;
	let number = 50;
	let prevNumber = number;

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		const dir = line.slice(0,1);
		let ticks = parseInt(line.slice(1));

		while (ticks > 100) {
			nullCounter++;
			ticks -= 100;
		}

		if (dir === 'L') {
		number -= ticks;
		} else {
			number += ticks;
		}

		if (number === 0) {
			console.log('====', dir, ticks, number);
			nullCounter++;
		} else if (number < 0) {
			console.log('++++', dir, ticks, number);
			if (prevNumber !== 0) {
				nullCounter++;
			}
			number = number + 100;
		} else if (number > 99) {
			console.log('----', dir, ticks, number);
			if (prevNumber !== 0) {
				nullCounter++;
			}
			number -= 100;
		} else {
  		console.log('????', dir, ticks, number);
  	}

  	prevNumber = number;
	}

	return nullCounter;
}



try {
  const lines = await readFile('./input.txt');
	// const lines = await readFile('./example.txt');
  const result = await process(lines);
  console.log(result);
} catch (error) {
  console.error(`Error: ${error.message}`);
}