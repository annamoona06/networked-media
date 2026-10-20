// first thing inside js file
window.addEventListener("load", ()=>{
    // document.body selector to retrieve the body html element

    // in order to write
    // function mousePressed9){
    // print(mouseX, mouseY)}

    // in order to get "mouseX and mouseY", add "e"

    document.body.addEventListener("click", (e) => {
        console.log(e)
        console.log("document.body was clicked")
        //a;ternative wyas to write the same code
        console.log(e.clientX + "" + e.clientY) 
        console.log("${e.clientX}, ${e.clientY}")
    })

    // using id is best practice for js
    let textDiv = document.getElementById("text")
    // keypresses need to be on the document itself
    document.addEventListener("keydown", (e)=>{
        console.log("keypressed")
        console.log(e.key)

        //adding they key that was typed to the div on my page
        textDiv.textContent += e.key

        if(e.key == ""){
            textDiv.textContent += '!'
        }
    })
})
