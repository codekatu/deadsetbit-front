// 2. This code loads the IFrame Player API code asynchronously.
let tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var section = {
  start: 10,
  end: 40,
};

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: "LZjBOApY54k",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  player.seekTo(section.start);
  player.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    var duration = section.end - section.start;
    setTimeout(restartVideoSection, duration * 1000);
  }
}

function restartVideoSection() {
  player.seekTo(section.start);
}
