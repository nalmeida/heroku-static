const fs = require('fs-extra');
const replace = require('replace-in-file');

const inputFolder = './src';
const outputfolder = './dist';

const copyFolder = () => {
	return new Promise(resolve => {

		console.log(`⓵  Task 1 - Copy ${inputFolder} to ${outputfolder}`);

		fs.copy(inputFolder, outputfolder)
			.then(() => {
				try {
						// Create outputfolder if does not exists
						if (!fs.existsSync(outputfolder)){
							fs.mkdirSync(outputfolder);
						}
						console.log(` ✅ Folder ${inputFolder} → ${outputfolder} copy COMPLETE.`);
						resolve();
				} catch(error) {
					console.error(' 🛑Error occurred:', error);
				}
			})
			.catch(err => {
				console.log('ERROR')
				console.error(' 🛑Error occurred:', error);
			})
	});
}

const replaceDate = () => {
	return new Promise(resolve => {

		console.log(`⓶  Task 2 - Replace __DATE__ variable`);

		const now = new Date().toLocaleString('pt-BR', {timeZone: 'America/Argentina/Buenos_Aires', hour12: false});;

		const options = {
			files: outputfolder + '/index.html',
			from: /__DATE__/g,
			to: now
		};

		replace(options)
			.then(results => {
				try {
					console.log(' 👉 Replacing:', options.from, ' to:', options.to);
					console.log(' ✅ Replacement results:', results);
					resolve();
				} catch (error) {
					console.error(' 🛑Error occurred:', error);
				}
			})
			.catch(error => {
				console.error(' 🛑 Error occurred:', error);
			})
	});
}

async function build () {
	console.log('-----------');
	await copyFolder();
	await replaceDate();
	console.log('⓷  Build COMPLETE.');
	console.log('-----------');
}

build();