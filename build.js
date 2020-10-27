const fs = require('fs-extra');
const replace = require('replace-in-file');

const inputFolder = './src';
const outputfolder = './dist';
const date = new Date();

const now = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear() + ' - ' + date.toLocaleTimeString('pt', { hour12: false });

if (!fs.existsSync(outputfolder)){
	fs.mkdirSync(outputfolder);
}

const replaceDate = () => {

	const options = {
		files: outputfolder + '/index.html',
		from: /__DATE__/g,
		to: now
	};

	replace(options)
		.then(results => {
			console.log('✅ Replacement results:', results);
			console.log('✅ Build COMPLETE.');
		})
		.catch(error => {
			console.error('Error occurred:', error);
		})
		.finally(() => {
			console.log('-----------');
	});
}

fs.copy(inputFolder, outputfolder)
	.then(() => {
		console.log('-----------');
		console.log(`✅ Folder ${inputFolder} → ${outputfolder} copy COMPLETE.`);
		replaceDate()
	})
	.catch(err => {
		console.log('ERROR')
		console.error(err);
	})
	.finally(() => {
})