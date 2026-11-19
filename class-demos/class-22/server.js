// 1. import libraries
const express = require('express');
const multer = require('multer');
const nedb = require('@seald-io/nedb');
const nunjucks = require('nunjucks')
//new
const cookieParser = require("cookie-parser")

// Q: what do these variables do? write the answer above each declaration.
// A: 
const app = express();
// A: 
const upload = multer({
	dest: 'public/uploads',
});
// A: 
const database = new nedb({
	filename: 'database.db',
	autoload: true,
});

// Q: what do each of these items set up? write above each item configuration.
// A: 
nunjucks.configure('views', {
	autoescape: true,
	express: app,
    noCache: true // NEW! we don't have to restart the server for .njk updates :)
});
// A: 
app.use(express.static('public'));
// A: 
app.use(express.urlencoded({ extended: true })); 
// A: 
app.set('view engine', 'njk');
// new
//enables us to use cookie properties
app.use(cookieParser())

// Q: what route do we use to go to the home page? how do we access it in the browser?
// A: 
app.get('/', (req, res)=>{
	// local variable to trakc number of visits
	let totalVisits = 1

	if(req.cookies.visits){
		let covertToNumber = parseInt(req.cookies.visits)
		totalVisits = convertToNumber + 1
	}
	// create cookie using the repsonse parameters
	// 3 parameters:
	// 1. the name of the cookie, in str format
	// 2. the value of the cookie, which will be total visits
	// 3.  object of the cookie attributes which will b epassed into the header

	res.cookie("visits". totalVisits, {expires: new Date(Date.now() + 100 * 365 * 24 * 60 * 60 * 1000)})

    res.render('home.njk', {severdata: totalVisits}) // 
})

app.listen(6005, ()=>{
    console.log(`http://localhost:6005`)
})