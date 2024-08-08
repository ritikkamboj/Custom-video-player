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
  if(video.paused)
  {
    play.innerHTML = ' <i class="fa fa-play fa-2x"></i>'
  }
  else
  play.innerHTML =' <i class="fa fa-pause fa-2x"></i>'

}
// function updatePlayIcon2()
// {
//     console.log('play waala')
// }

function updateProgress() {}

function stopVideo() {
    video.timestamp=0;
    video.pause();

}
function setVideoProgress() {}

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timestamp", updateProgress);

play.addEventListener("click", toggleVideoStatus);
// stop.addEventListener('click',stopVideo);
stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
