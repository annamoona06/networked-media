let express = require('express')
let nedb = require("@seald-io/nedb")

// set up variables to use
let app = express()
let database = new nedb({
    filename:"mydatabase.db", 
    autoload: true
});

//set up my server manually
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))

app.get("/", (request, response)=>{
    response.send("server is working!")
})

app.post("/add-data",(request,response)=>{
    console.log(request.body)
    let dataToBeAdded = {
        message:request.body.newMessage,
        timestamp:Date.now()
    }

    //add to database
    database.insert(dataToBeAdded, (error, newData)=>{
        if (error){
            console.log("error")
            response.send("data is not added")
        } else {
            console.log(newData)
            response.send("data added successfully")
        }
})
})

app.get("/get-data", (request,response)=>{
    let query = {}
    database.find(query, (error, data)=>{
        console.log(data)
        response.json(data)
    })
})

app.listen(6001, ()=>{
    console.log("server is running on http://localhost:6001")
})