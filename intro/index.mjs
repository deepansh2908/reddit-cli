// console.log(global);
// console.log(__dirname, __filename);
//2 types of exports -> using commonjs module and using ES module

// const path = require('path');
// const { readFile } = require('fs/promises');
// // readFile is an async function and it obviously returns a promise
// // console.log(readFile);
// const template = await readFile(path.join(__dirname, 'template.html'));
// console.log(template)

import { readFile, writeFile } from 'fs/promises';

let template = await readFile(
	new URL('./template.html', import.meta.url),
	'utf-8'
);

// console.log(template)

const data = {
	title: 'Introduction to Node.js',
	body: 'Less goo!!',
};

for (const [key, val] of Object.entries(data)) {
	template = template.replace(`{${key}}`, val);
}

await writeFile(new URL('./index.html', import.meta.url), template);