// annotations 
// command l for command / uncommand hotkey

//alert is always the first thing in your code, and then you check the console to see if the pges are loaded correctly
alert('javascript!') 

console.log('log this information to the console!')

// global variables
let colors = [ "#FFFFFF","#89ff87", "#ffe08c",  "rgb(255, 166, 233)",  "#000000"]

// window.addEventListener("load", () => {
// 	console.log("page is fully loaded");
// })


window.onload = () => {
    // window.onload = () => { is a shorthand syntax for window.addEventListener("load", ()=>{})
    console.log("page has loaded")
    // get element by id
    //rertieve single js element using id
    let mainElement = document.getElementById("main")
    mainElement.style.color = "white"
    // javascript has the highest prriority in terms of overwriting commands
    console.log(mainElement)

    //query selector, retrieves single element using the query selector
    // does not need to have id
    let firstParagraph = document.querySelector("p")
    let blueParagraph = document.querySelector(".blue")
    document.querySelector("#main")

    firstParagraph.textContent = "I have updated the tect with js" // you have now updated the text content of the first paragraph through js
    blueParagraph.style.backgroundColor = "navy"

    //query selector for ID works the same as getelementbyid
    let containerDiv = document.querySelector("#blue-div")
    //creates a loop to keep geenrating colors
    for (let i = 0; i < 60; i++){
        // creating an element on the webpage:
        //1. declare what type of element we are creating
        let newSpan = document.createElement("span")
        //2 modify the element / content
        newSpan.textContent = "new span"
        newSpan.classList.add("all-spans")
         //Math.random() returns a number 
        let c = Math.floor(Math.random()*colors.length)
        newSpan.style.backgroundColor = colors[c];
        // 3. add the created element to the page
        // anywhere on the bottom of the html: document.body
        // in a specific container: select that element
        containerDiv.appendChild(newSpan)
    }

    //set interval is built-in to js
    // 2 params:
    // 1. callback
    // 2. amount of time in milliseconds
    // there are 3 ways to write the same function but the one that is not commented is the one that sam prefers to use
    // setInterval(function() {}, 2000);
    // setInterval(intervalFunction, 2000);
    
    let rotation = 0
    setInterval(()=>{
        console.log("two seconds have passed")
        // two ways to retrive all the elements of a class
        // document.getElementsByClassName("all-spans')
        let allSpans = document.querySelectorAll(".all-spans")
        console.log(allSpans)
        // add fix code later ito use this
        // shorthand for (let s = 0; s < allSpans.length; s++)
        for(let s of allSpans){
            s.style.transform = `rotate(${rotation}deg)`
            rotation++
            console.log(s.style.transform)
        }
    }, 2000);

    //helper functions go after window.onload()
    function intervalFunction(){
    }
}