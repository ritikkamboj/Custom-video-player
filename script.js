const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");
console.log(video.pause)

function toggleVideoStatus() {
    console.log(video.paused);
    if(video.paused)
        video.play()
    else
    video.pause(); 
}
function updatePlayIcon() {}

function updateProgress() {}

function stopVideo() {}
function setVideoProgress() {}

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timestamp", updateProgress);

play.addEventListener("click", toggleVideoStatus);
// stop.addEventListener('click',stopVideo);
stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);


