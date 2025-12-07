import readFile from '../read-file.js';

// function process(input) {
// 	// let letItBeam = [];
// 	let letItSplit = [];
// 	const startLine = input.shift();

// 	let currentBeamIndex = [];
// 	currentBeamIndex.push(startLine.indexOf('S'));
// 	// letItBeam.push(currentBeamIndex);
	
// 	for (const i in input) {
// 		const line = input[i]

// 		let newBeamIndex = [];
// 		let newSplitIndex = []
// 		for (let cursor = 0; cursor < currentBeamIndex.length; cursor++) {
// 			const beamIndex = currentBeamIndex[cursor];
// 			if (line[beamIndex] == '^') {
// 				newSplitIndex.push(beamIndex);
// 				newBeamIndex.push(beamIndex - 1);
// 				newBeamIndex.push(beamIndex + 1);
// 			} else if(line[beamIndex] == '.') {
// 				newBeamIndex.push(beamIndex);
// 			}
// 		}

// 		newBeamIndex = [...new Set(newBeamIndex)];
		
// 		// if (JSON.stringify(newBeamIndex) != JSON.stringify(currentBeamIndex)) {
// 		// 	letItBeam.push(newBeamIndex);
// 		// }

// 		letItSplit.push(newSplitIndex);
	
// 		currentBeamIndex = newBeamIndex;
// 	}

// 	return letItSplit;
// }

// function calculatePaths(splitIndexList, input) {
// 	let paths = 0;
// 	const startLine = input.shift();
// 	// paths.push([startLine.indexOf('S')])

// 	const bifurcations = [[startLine.indexOf('S')]];

// 	// splitIndexList = splitIndexList.filter((list) => list.length > 0);

// 	// let x = 0;
	
// 	while (bifurcations.length > 0) {
// 		// x++;
// 		const path = bifurcations.shift();
// 		// console.log('-------', path, '-------');
// 		// console.log(input[path.length - 1]);
// 		// console.log(splitIndexList[path.length - 1]);

// 		for (let i = path.length - 1; i < input.length; i++) {

// 			const line = input[i];
// 			const splitIndex = splitIndexList[i];
// 			// console.log(line);

// 			// console.log(splitIndex);
// 			if (splitIndex.length == 0) {
// 				// console.log('NO split indexes');
// 				path.push(path[path.length - 1]);
				
// 			} else {
			
// 				for (const s in splitIndex) {
// 				// for (let s = path.length - 1; s < input.length; s++) {
// 					const split = splitIndex[s];
// 					const pIndex = path[path.length - 1];

// 					if (split == pIndex) {
// 						// clone
// 						const bifurcation = [...path];
// 						// update current
// 						path.push(pIndex - 1);
// 						// update bifurcation
// 						bifurcation.push(pIndex + 1);
// 						bifurcations.push(bifurcation);

// 						// console.log('FOUND');
// 						break;
// 					}

// 					if (s == splitIndex.length - 1) {
// 						// console.log('NOT FOUND');
// 						path.push(path[path.length - 1]);
// 					}
// 				}
// 			}
// 		}

// 		// console.log('path', x, path);
// 		paths ++;
// 		console.log(paths);
// 	}

// 	return paths;
// }

try {
	const data = await readFile('example.txt');


let splits = {};

for (let line of data) {
    let index = line.indexOf('S');
    if (index !== -1) {
        splits[index] = 1;
        break; // Stop after finding the first 'S'
    }
}

for (let i = 1; i < data.length; i++) {
    let line = data[i];
    let next = {};

    for (let split in splits) {
        split = parseInt(split); // Ensure `split` is an integer

        if (line[split] === '^') {
            // Handle the case for '^'
            if (next[split + 1]) {
                next[split + 1] += splits[split];
            } else {
                next[split + 1] = splits[split];
            }

            if (next[split - 1]) {
                next[split - 1] += splits[split];
            } else {
                next[split - 1] = splits[split];
            }
        } else {
            // Handle the case for other characters
            if (next[split]) {
                next[split] += splits[split];
            } else {
                next[split] = splits[split];
            }
        }
    }

    splits = next;
}

// console.log(splits);
let sum = Object.values(splits).reduce((acc, val) => acc + val, 0);
console.log(sum);

} catch (error) {
	console.error(error);
}