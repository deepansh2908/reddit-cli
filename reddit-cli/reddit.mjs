#! /usr/bin/env node
import fetch from 'node-fetch';
import open from 'open';
import yargs from 'yargs';

// console.log(process.argv)
// console.log("Hello world! from reddit cli");

const { argv } = yargs(process.argv);
// console.log(argv)

const response = await fetch('https://www.reddit.com/.json');
const data = await response.json();
const randomIndex = Math.floor(Math.random() * data.data.children.length);
// get random post from reddit api response of all posts on front page
const post = data.data.children[randomIndex];

// log title and reddit link if --print flag is passed
if (argv.print) {
	console.log(`
    Title: ${post.data.title}\n
    Link: ${post.data.permalink}
  `);
} else {
	// open in browser if not
	open(`https://reddit.com${post.data.permalink}`);
}
