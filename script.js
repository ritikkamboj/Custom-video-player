const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");
// console.log(video.pause)

function toggleVideoStatus() {
  console.log(video.paused);
  if (video.paused) video.play();
  else video.pause();
}
function updatePlayIcon() {
  //   console.log("pause waala ");
  if (video.paused) {
    play.innerHTML = ' <i class="fa fa-play fa-2x"></i>';
  } else play.innerHTML = ' <i class="fa fa-pause fa-2x"></i>';
}
// function updatePlayIcon2()
// {
//     console.log('play waala')
// }

function updateProgress() {
//   console.log(video.currentTime);
console.log(progress.value)
progress.value = parseInt((video.currentTime/video.duration)*100);

// here we have to found mins and secs 
let mins ;
mins = Math.floor(video.currentTime/60);
if(mins < 10)
{
    mins = '0'+mins;
}
let secs ;
secs = Math.floor(video.currentTime%60);
if(secs < 10)
{
    secs = '0'+secs;
}
timestamp.innerHTML = `${mins}:${secs}`
}

function stopVideo() {
  video.timestamp = 0;
  video.pause();
}
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration)/100;
}

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
// stop.addEventListener('click',stopVideo);
stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
