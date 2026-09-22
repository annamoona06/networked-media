// annotations 
// command l for command / uncommand hotkey

//alert is always the first thing in your code, and then you check the console to see if the pges are loaded correctly
alert('javascript!') 

console.log('log this information to the console!')

// window.addEventListener("load", () => {
// 	console.log("page is fully loaded");
// })

window.onload = () => {
    console.log('page has loaded')
}