// this server handles image upload
// this is built off of class_15_demo
// new info is commented

const express = require('express');
const nunjucks = require('nunjucks');

// setting up multer library
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

app.get('/', (request, response) => {
	response.render('home.njk');
});

app.get('/form', (request, response)=>{
        response.render('form.njk')
})

// i am updating my form action to have another piece of middleware that will store files
// there is a new second parameter here:
// uploadProcessor is a variable that uses the multer library, just like app
// .single() is the function that accepts a single image
// 'theImage' is the name of the input file type, set in views/form.njk
app.post(
	'/send-message',
	uploadProcessor.single('theImage'),
	(request, response) => {

		// making an object to add to the array instead of directly adding request.body
		let receivedMessage = request.body

		// if there is a file uploaded, store its file name and location inside our object
		if (request.file) {
			// we use receivedMessage variable here and set a new property called imgSrc, which is on top of user and message properties
			// our files are set to go to this location from line 10
			receivedMessage.imgSrc = '/upload/' + request.file.filename;
		}
		allData.push(receivedMessage);
		// now go to the /view-all route
		response.redirect('/view-all');
	}
);


app.get('/view-all', (request, response) => {
	// now the allData array is an array with objects that look like
	// {user: '', message: '', imgSrc:'/upload/filename'}
	// so we need to change the view-all.njk to diplay the image
	response.render('view-all.njk', { messagesArrayFromServer: allData });
});

app.listen(8080, () => {
	console.log('http://localhost:8080');
});