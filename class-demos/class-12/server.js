// pwd to check your terminal's location, it should be in /Users/anna_f/Desktop/networked-media/class-demos/class-12 -->
// cd to go to the next specified subfolder within the current location-->
// npm init to intialize-->
// then a file called "package.json" should be created within that folder location-->
// then type "npm install express" to install express-->
// never upload node modules to github because it is too huge-->

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

//Routes
// location that we can send and recieve info from our server, here, e.g. get location after "/", texts here does not matter
// GET /First-server, callback function
app.get("/first-server", (request, response)=>{
    // send response back to client who is requesting this info to /first-server
    response.send("this is my first server!")
})


// LAST
// Port, Parameter, followed by callback function
app.listen(8080, ()=>{
    console.log("got http://127.0.0.1:8080/first-server")
})
