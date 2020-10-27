const fs = require('fs-extra');
const replace = require('replace-in-file');

const inputFolder = './src';
const outputfolder = './dist';
const date = new Date();

const now = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear() + ' - ' + date.toLocaleTimeString('pt', { hour12: false });

console.log('-----------');

if (!fs.existsSync(outputfolder)){
	fs.mkdirSync(outputfolder);
}
fs.copySync(inputFolder + '/index.html', outputfolder + '/index.html');

console.log('✅ File copy: ', inputFolder + '/index.html', '→', outputfolder + '/index.html');


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
	.finally(function() {
		console.log('-----------')
	});