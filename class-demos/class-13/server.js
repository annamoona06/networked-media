// check location of terminal
// pwd to check your terminal's location, it should be in /Users/anna_f/Desktop/networked-media/class-demos/class-13
// ls to check what subfolders/content is in your current location
// cd to go to a subfolder within the current location that you have checked through using ls command

//installing
// 1. npm init to intialize
// ---- initialize node.js
// ---- create "package.json"
// 2. "npm install express" to install express
// ---- install express library
// ---- node modules created
// 3. create server.js
// 4. run server.js
// ---- node server.js

// npm install to npm install express is essentially interchangeble

// uploading
// never upload node modules to github or cyberduck because it is too huge
// when uploading to cyber duck, copypaste everything except for node folder

//restarting
// control c to restart
// easieer command to restart: --watch server.js

const express = require("express")

//initialize application using express
const app = express()

//"middleware"
// setting our app needs to know about our server

// allows us to access foront-end with GET requests by default
// serves our first-end html that exists in the publix folder
app.use(express.static("public"));
// allows us to access the body of a post request
app.use(express.urlencoded({ extended: true }));

//above 4 lines of code will be in every server

//Routes -- all of the url pages we want accessible
// syntax for GET request: app.get(route, anonymous function)
// similar to document.addEcenet listen("eventName", (e)=>{})
app.get("/",(request, response)=>{
    //response will contain all of the information wil send back fromt the server to the client
    console.log("recieved a request at /route")
    //we always need to have a response
    response.send(" this is <em>some</em> data!")
})

// location that we can send and recieve info from our server, here, e.g. get location after "/", texts here does not matter
// GET /First-server, callback function
app.get("/first-server", (request, response)=>{
    // send response back to client who is requesting this info to /first-server
    response.send("this is my first server!")
})


// LAST
// Port, Parameter, followed by callback function
app.listen(8080, ()=>{
    console.log("restarted")
    console.log("got http://127.0.0.1:8080/first-server")
})

// POST looks exactly the same and will handle the form data
app.post("/form-upload", (request, response)=>{
    //console.log in server js only shows up in the terminal because it is a different condole then the one ion the browser
    console.log(request.body)
    //send the client to a different route
    repsonse.redirect("/")

})