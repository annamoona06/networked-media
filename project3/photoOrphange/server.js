const express = require('express');
const nunjucks = require('nunjucks');

const multer = require('multer')
const uploadProcessor = multer( {dest: 'public/upload/' })

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
nunjucks.configure('views', {
	autoescape: true,
	express: app,
});
app.set('view engine', 'njk');

let allData = [];

let allFilters = ['filter-normal', 'filter-warm', 'filter-cool', 'filter-gray'];
let allCaptionColors = ['caption-white', 'caption-black'];

const randomBetween = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get('/', (request, response) => {
	response.render('home.njk');
});

app.get('/form', (request, response)=>{
        response.render('form.njk')
})

app.post(
	'/send-message',
	uploadProcessor.single('theImage'),
	(request, response) => {

		if (!request.file) {
			response.redirect('/form');
			return;
		}

		let receivedMessage = request.body

		receivedMessage.imgSrc = '/upload/' + request.file.filename;
		receivedMessage.uploadedAt = new Date().toLocaleString();
		receivedMessage.top = randomBetween(0, 88);
		receivedMessage.left = randomBetween(0, 94);
		receivedMessage.filter = allFilters[randomBetween(0, allFilters.length - 1)];

		allData.push(receivedMessage);
		response.redirect('/view-all');
	}
);

app.get('/view-all', (request, response) => {
	response.render('view-all.njk', { messagesArrayFromServer: allData });
});

app.get('/gallery', (request, response) => {
	response.render('gallery.njk', { messagesArrayFromServer: allData });
});

app.listen(8080, () => {
	console.log('http://localhost:8080');
});