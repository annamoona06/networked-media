// imports .env variables so we dont put pw in our js files
require("dotenv").config()

// set up libarary
const m = require("masto")

// setting up mast ovariable to connect to 
// 1. the url
// 2. our token : which is our password to our account
const masto = m.createRestAPIClient({
	url: 'https://networked-media.itp.io/',
	accessToken: process.env.TOKEN,
});

// async function to make a request to our mastodon server
async function makeStatus(text) {
    // await ensures that it creates the status before we do anything else in our code
	const status = await masto.v1.statuses.create({
		status: text,
        // requirement!!!: change visibility to public when project is ready to run
		visibility: 'private', 
	});
}

// array of emojis to select
setInterval(() => {
	let emoji = ['😭', '🤩', '💖'];

	let rand = Math.floor(Math.random() * emoji.length);
 
    // select an emoji from the array 
	let post = emoji[rand];

    // make our status with an emoji
	makeStatus(post);
}, 5000);

