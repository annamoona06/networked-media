//this js will go inside of the makestatus function in the main.js file. 
// your partner wwill make a request to http://localhost:your-ip-address:6001/get-data

// when we are testing it on our own machine, we use http://localhost:6001/get-data
// copy everything below into your makestatus function and then call the function at the bottom of the file.
async function getData(){
    // the only differnce is url
    let url="http://localhost:6001/get-data"


    let response = awaitfetch(url)
    let json = await response.json
    // what do you want to do with your partner's data?
    // it will use the json variable for any manipulation
    console.log(json)
}

getData()