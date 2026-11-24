const express = require('express');
const multer = require('multer');
const nedb = require('@seald-io/nedb');
const nunjucks = require('nunjucks');
const cookieParser = require('cookie-parser');

const app = express();
const upload = multer({
	dest: 'public/uploads',
});
const database = new nedb({
	filename: 'database.db',
	autoload: true,
});

nunjucks.configure('views', {
	autoescape: true,
	express: app,
	noCache: true,
});

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'njk');
app.use(cookieParser());

app.get('/', (req, res) => {
	let totalVisits = 1;

	if (req.cookies.visits) {
		let convertToNumber = parseInt(req.cookies.visits);
		totalVisits = convertToNumber + 1;
	}

	res.cookie('visits', totalVisits, {
		expires: new Date(Date.now() + 100 * 365 * 24 * 60 * 60 * 1000),
	});

	res.render('home.njk', { serverData: totalVisits });
});

app.get('/signup', (req, res)=>{
	res.render('signup.njk')
})

app.listen(6005, () => {
	console.log(`http://localhost:6005`);
});