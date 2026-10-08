
// Oct 8, 2026
// Project 2
// Networked Media
// Anna Feng
console.log('log this information to the console!')

// global variables
let colors = [ "#FFFFFF", "#d5f4ff", "#ffdde7", "#cde7ff", "#eff3ff"]
let videoList = [
    "assets/hand.mp4",   
    "assets/heartpulse.mp4",   
    "assets/seal.mp4",   
    "assets/snow.mp4",  
    "assets/bars.mp4",   
    "assets/bug.mp4",
    "assets/cell.mp4",   
    "assets/fingertip1.mp4", 
    "assets/fingertip2.mp4",
    "assets/flower.mp4",   
    "assets/opanchu.mp4",    
] 

// variables
let lastActivity = Date.now()

document.addEventListener("mousemove", markActivity)
document.addEventListener("mousedown", markActivity)


window.onload = () => {
    console.log("page has loaded")
    
    let containerDiv = document.querySelector("#black-div")
    // let video = document.querySelector("#myVideo")

    //video play
    // window.addEventListener("click", () => {
    // video.play()
    // })

    for (let i = 0; i < 5000 ; i++){
        let newSpan = document.createElement("span")
        newSpan.textContent = "0 1"
        newSpan.classList.add("all-spans")
        let c = Math.floor(Math.random()*colors.length)
        newSpan.style.backgroundColor = colors[c];
        newSpan.style.color = colors[c] 
        containerDiv.appendChild(newSpan)
        
    }

    // randomize pixels by time
    setInterval(()=>{
        console.log("two seconds have passed")
        let allSpans = document.querySelectorAll(".all-spans")
        for (let s of allSpans) {
        let c = Math.floor(Math.random() * colors.length)
        s.style.backgroundColor = colors[c]
        s.style.color = colors[c] 
    }
    }, 1000);

    setInterval(() => {
    let idleFor = Date.now() - lastActivity
    if (idleFor >= 5000) {
        createRandomVideo() 
    }
}, 5000) 

    //document.addEventListener("mousedown", () => {
    //createRandomVideo()
//})

    //helper functions go after window.onload()
    function intervalFunction(){
    }
} 

function createRandomVideo() {
    let randomIndex = Math.floor(Math.random() * videoList.length);
    let video = document.createElement("video");
    video.src = videoList[randomIndex];
    video.classList.add("videoLayer");
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    let x = Math.random() * (window.innerWidth - 400);
    let y = Math.random() * (window.innerHeight - 300);

    video.style.left = `${x}px`;
    video.style.top = `${y}px`;

    document.body.appendChild(video);

    console.log("Created video:", videoList[randomIndex]);
}

function markActivity() {
    lastActivity = Date.now()
}
