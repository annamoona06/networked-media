// i missed lecture today so I got help from a classmate to catch up on the materials covered in class.
// here are still a few bugs in the code that prevented it to run successfully in my laptop
// right not only the "forms" view is working, I'm still working on debugging these!
// one form, one app.post required; have to display data in form; can do images, require another library (deatils will be uploaded to notes)

const express = require('express'); // handles routes and HTTP requests
const nunjucks = require('nunjucks'); // fills templates with server-provided data

// app is express server that uses express library variable
const app = express();

// all css and front-end js will go in public folder
app.use(express.static('public'));
// allows us to use request.body
app.use(express.urlencoded({ extended: true }));


// add our nunjucks settings under our middleware
// this links our express application to the templating tool
nunjucks.configure('views', {
	autoescape: true,
	express: app,
});
app.set('view engine', 'njk');



// ------------ new stuff ----------------------------------
// store data on our server using an array variable
let allData = [{ user: 'anna', message: 'yayy' }, { user: 'anna', message: 'yayy' }];

app.get('/', (request, response)=>{
    // response.render always goes inside an app.get OR an app.post
    // response.render accepts 2 parameters:
    // 1: the name of the njk file
    // 2: a javascript object. the properties you pass into this object are the variables that you use in the .njk files
            // serverData is the name of the variable we used in baseLayout.njk
    response.render('home.njk')
})

// for every new njk file, we need an app.get
app.get('/form', (request, response)=>{ // debug
        response.render('form.njk');
})

app.get('/view-all', (request, response)=>{ // debug
        // optional second param in response.render:
        // is the data from the server
        response.render('view-all.njk', { messagesArrayFromServer: allData });
})

app.post('/send-message', (request, response)=>{
        // this action will handle:
        // 1. storing the data from the form on the server (in the data array)
        console.log(request.body);
        allData.push(request.body);
        // 2. redirect to where we want the data to be displayed
        response.redirect('/view-all'); // debug

})

app.listen(8080, ()=>{
    // to run the server:
    // 1. make sure you are in the correct folder
            // if you type pwd it should print out the path to class_14_demo
            // if it does not show class_14_demo, you need to navigate to the folder using cd
    // 2. in terminal use the starting command: node --watch server.js 
            // another way to do this is to add a script in package.json (go to that file and look at line 8)
    console.log('http://localhost:8080')
})