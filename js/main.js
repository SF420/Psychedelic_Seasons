window.onerror = function (message, url, lineNumber) {
  console.log("Error: " + message + " in " + url + " at line " + lineNumber);
};

// Function to get a random item from an array
function getRandomItem(arr) {
  var num = Math.floor(Math.random() * arr.length);
  return arr[num];
}

// Function to handle image errors
function imageError(element) {
  element.src = "fallback_image_url_here";
}

// Function to preload and set images
function preloadAndSetImage(elementId, imgAr) {
  var imgSrc = getRandomItem(imgAr);
  var imgElement = document.getElementById(elementId);
  imgElement.src = imgSrc;
  imgElement.onerror = function () {
    imageError(imgElement);
  };
}

// Initialize an array for each season with the URLs of the images
var springImages = [
  "assets/img/spring/SPRING1.webp",
  "assets/img/spring/SPRING2.webp",
  "assets/img/spring/SPRING3.webp",
  "assets/img/spring/SPRING4.webp",
  "assets/img/spring/SPRING5.webp",
  "assets/img/spring/SPRING6.webp",
  "assets/img/spring/SPRING7.webp",
  "assets/img/spring/SPRING8.webp",
  "assets/img/spring/SPRING9.webp",
  "assets/img/spring/SPRING10.webp",
  "assets/img/spring/SPRING11.webp",
  "assets/img/spring/SPRING12.webp",
  "assets/img/spring/SPRING13.webp",
  "assets/img/spring/SPRING14.webp",
  "assets/img/spring/SPRING15.webp",
  "assets/img/spring/SPRING16.webp",
  "assets/img/spring/SPRING17.webp",
  "assets/img/spring/SPRING18.webp",
  "assets/img/spring/SPRING19.webp",
  "assets/img/spring/SPRING20.webp",
  "assets/img/spring/SPRING21.webp",
  "assets/img/spring/SPRING22.webp",
  "assets/img/spring/SPRING23.webp",
  "assets/img/spring/SPRING24.webp",
  "assets/img/spring/SPRING25.webp",
  "assets/img/spring/SPRING26.webp",
  "assets/img/spring/SPRING27.webp",
  "assets/img/spring/SPRING28.webp",
  "assets/img/spring/SPRING29.webp",
  "assets/img/spring/SPRING30.webp",
  "assets/img/spring/SPRING31.webp",
  "assets/img/spring/SPRING32.webp",
  "assets/img/spring/SPRING33.webp",
  "assets/img/spring/SPRING34.webp",
  "assets/img/spring/SPRING35.webp",
  "assets/img/spring/SPRING36.webp",
];

var summerImages = [
  "assets/img/summer/SUMMER1.webp",
  "assets/img/summer/SUMMER2.webp",
  "assets/img/summer/SUMMER3.webp",
  "assets/img/summer/SUMMER4.webp",
  "assets/img/summer/SUMMER5.webp",
  "assets/img/summer/SUMMER6.webp",
  "assets/img/summer/SUMMER7.webp",
  "assets/img/summer/SUMMER8.webp",
  "assets/img/summer/SUMMER9.webp",
  "assets/img/summer/SUMMER10.webp",
  "assets/img/summer/SUMMER11.webp",
  "assets/img/summer/SUMMER12.webp",
  "assets/img/summer/SUMMER13.webp",
  "assets/img/summer/SUMMER14.webp",
  "assets/img/summer/SUMMER15.webp",
  "assets/img/summer/SUMMER16.webp",
  "assets/img/summer/SUMMER17.webp",
  "assets/img/summer/SUMMER18.webp",
  "assets/img/summer/SUMMER19.webp",
  "assets/img/summer/SUMMER20.webp",
  "assets/img/summer/SUMMER21.webp",
  "assets/img/summer/SUMMER22.webp",
  "assets/img/summer/SUMMER23.webp",
  "assets/img/summer/SUMMER24.webp",
  "assets/img/summer/SUMMER25.webp",
  "assets/img/summer/SUMMER26.webp",
  "assets/img/summer/SUMMER27.webp",
  "assets/img/summer/SUMMER28.webp",
  "assets/img/summer/SUMMER29.webp",
  "assets/img/summer/SUMMER30.webp",
  "assets/img/summer/SUMMER31.webp",
  "assets/img/summer/SUMMER32.webp",
  "assets/img/summer/SUMMER33.webp",
  "assets/img/summer/SUMMER34.webp",
  "assets/img/summer/SUMMER35.webp",
  "assets/img/summer/SUMMER36.webp",
];

var autumnImages = [
  "assets/img/autumn/AUTUMN1.webp",
  "assets/img/autumn/AUTUMN2.webp",
  "assets/img/autumn/AUTUMN3.webp",
  "assets/img/autumn/AUTUMN4.webp",
  "assets/img/autumn/AUTUMN5.webp",
  "assets/img/autumn/AUTUMN6.webp",
  "assets/img/autumn/AUTUMN7.webp",
  "assets/img/autumn/AUTUMN8.webp",
  "assets/img/autumn/AUTUMN9.webp",
  "assets/img/autumn/AUTUMN10.webp",
  "assets/img/autumn/AUTUMN11.webp",
  "assets/img/autumn/AUTUMN12.webp",
  "assets/img/autumn/AUTUMN13.webp",
  "assets/img/autumn/AUTUMN14.webp",
  "assets/img/autumn/AUTUMN15.webp",
  "assets/img/autumn/AUTUMN16.webp",
  "assets/img/autumn/AUTUMN17.webp",
  "assets/img/autumn/AUTUMN18.webp",
  "assets/img/autumn/AUTUMN19.webp",
  "assets/img/autumn/AUTUMN20.webp",
  "assets/img/autumn/AUTUMN21.webp",
  "assets/img/autumn/AUTUMN22.webp",
  "assets/img/autumn/AUTUMN23.webp",
  "assets/img/autumn/AUTUMN24.webp",
  "assets/img/autumn/AUTUMN25.webp",
  "assets/img/autumn/AUTUMN26.webp",
  "assets/img/autumn/AUTUMN27.webp",
  "assets/img/autumn/AUTUMN28.webp",
  "assets/img/autumn/AUTUMN29.webp",
  "assets/img/autumn/AUTUMN30.webp",
  "assets/img/autumn/AUTUMN31.webp",
  "assets/img/autumn/AUTUMN32.webp",
  "assets/img/autumn/AUTUMN33.webp",
  "assets/img/autumn/AUTUMN34.webp",
  "assets/img/autumn/AUTUMN35.webp",
  "assets/img/autumn/AUTUMN36.webp",
];

var winterImages = [
  "..assets/img/winter/WINTER1.webp",
  "assets/img/winter/WINTER2.webp",
  "assets/img/winter/WINTER3.webp",
  "assets/img/winter/WINTER4.webp",
  "assets/img/winter/WINTER5.webp",
  "assets/img/winter/WINTER6.webp",
  "assets/img/winter/WINTER7.webp",
  "assets/img/winter/WINTER8.webp",
  "assets/img/winter/WINTER9.webp",
  "assets/img/winter/WINTER10.webp",
  "assets/img/winter/WINTER11.webp",
  "assets/img/winter/WINTER12.webp",
  "assets/img/winter/WINTER13.webp",
  "assets/img/winter/WINTER14.webp",
  "assets/img/winter/WINTER15.webp",
  "assets/img/winter/WINTER16.webp",
  "assets/img/winter/WINTER17.webp",
  "assets/img/winter/WINTER18.webp",
  "assets/img/winter/WINTER19.webp",
  "assets/img/winter/WINTER20.webp",
  "assets/img/winter/WINTER21.webp",
  "assets/img/winter/WINTER22.webp",
  "assets/img/winter/WINTER23.webp",
  "assets/img/winter/WINTER24.webp",
  "assets/img/winter/WINTER25.webp",
  "assets/img/winter/WINTER26.webp",
  "assets/img/winter/WINTER27.webp",
  "assets/img/winter/WINTER28.webp",
  "assets/img/winter/WINTER29.webp",
  "assets/img/winter/WINTER30.webp",
  "assets/img/winter/WINTER31.webp",
  "assets/img/winter/WINTER32.webp",
  "assets/img/winter/WINTER33.webp",
  "assets/img/winter/WINTER34.webp",
  "assets/img/winter/WINTER35.webp",
  "assets/img/winter/WINTER36.webp",
];

// Preload and set images for each season
preloadAndSetImage("spring", springImages);
preloadAndSetImage("summer", summerImages);
preloadAndSetImage("autumn", autumnImages);
preloadAndSetImage("winter", winterImages);

// Function to handle video errors
function videoError(element) {
  element.src = "fallback_video_url_here";
}

// Function to preload and set video
function preloadAndSetVideo(elementId, videoAr) {
  var videoSrc = getRandomItem(videoAr);
  var videoElement = document.getElementById(elementId);
  videoElement.src = videoSrc;
  videoElement.onerror = function () {
    videoError(videoElement);
  };
}

// Initialize array for sets of videos with the URLs of the video files
var videoSets = [
  "assets/vids/SPRING1.webm",
"assets/vids/SPRING2.webm",
"assets/vids/SPRING3.webm",
"assets/vids/SPRING4.webm",
"assets/vids/SPRING5.webm",
"assets/vids/SPRING6.webm",
"assets/vids/SPRING7.webm",
"assets/vids/SPRING8.webm",
"assets/vids/SPRING9.webm",
"assets/vids/SPRING10.webm",
"assets/vids/SPRING11.webm",
"assets/vids/SPRING12.webm",
"assets/vids/SPRING13.webm",
"assets/vids/SPRING14.webm",
"assets/vids/SPRING15.webm",
"assets/vids/SPRING16.webm",
"assets/vids/SPRING17.webm",
"assets/vids/SPRING18.webm",
"assets/vids/SPRING19.webm",
"assets/vids/SPRING20.webm",
"assets/vids/SPRING21.webm",
"assets/vids/SPRING22.webm",
"assets/vids/SPRING23.webm",
"assets/vids/SPRING24.webm",
"assets/vids/SPRING25.webm",
"assets/vids/SPRING26.webm",
"assets/vids/SPRING27.webm",
  "assets/vids/AUTUMN1.webm",
"assets/vids/AUTUMN2.webm",
"assets/vids/AUTUMN3.webm",
"assets/vids/AUTUMN4.webm",
"assets/vids/AUTUMN5.webm",
"assets/vids/AUTUMN6.webm",
"assets/vids/AUTUMN7.webm",
"assets/vids/AUTUMN8.webm",
"assets/vids/AUTUMN9.webm",
"assets/vids/AUTUMN10.webm",
"assets/vids/AUTUMN11.webm",
"assets/vids/AUTUMN12.webm",
"assets/vids/AUTUMN13.webm",
"assets/vids/AUTUMN14.webm",
"assets/vids/AUTUMN15.webm",
"assets/vids/AUTUMN16.webm",
"assets/vids/AUTUMN17.webm",
"assets/vids/AUTUMN18.webm",
"assets/vids/AUTUMN19.webm",
"assets/vids/AUTUMN20.webm",
"assets/vids/AUTUMN21.webm",
"assets/vids/AUTUMN22.webm",
"assets/vids/AUTUMN23.webm",
"assets/vids/AUTUMN24.webm",
"assets/vids/AUTUMN25.webm",
"assets/vids/AUTUMN26.webm",
"assets/vids/AUTUMN27.webm",
  "assets/vids/SUMMER1.webm",
"assets/vids/SUMMER2.webm",
"assets/vids/SUMMER3.webm",
"assets/vids/SUMMER4.webm",
"assets/vids/SUMMER5.webm",
"assets/vids/SUMMER6.webm",
"assets/vids/SUMMER7.webm",
"assets/vids/SUMMER8.webm",
"assets/vids/SUMMER9.webm",
"assets/vids/SUMMER10.webm",
"assets/vids/SUMMER11.webm",
"assets/vids/SUMMER12.webm",
"assets/vids/SUMMER13.webm",
"assets/vids/SUMMER14.webm",
"assets/vids/SUMMER15.webm",
"assets/vids/SUMMER16.webm",
"assets/vids/SUMMER17.webm",
"assets/vids/SUMMER18.webm",
"assets/vids/SUMMER19.webm",
"assets/vids/SUMMER20.webm",
"assets/vids/SUMMER21.webm",
"assets/vids/SUMMER22.webm",
"assets/vids/SUMMER23.webm",
"assets/vids/WINTER1.webm",
"assets/vids/WINTER2.webm",
"assets/vids/WINTER3.webm",
"assets/vids/WINTER4.webm",
"assets/vids/WINTER5.webm",
"assets/vids/WINTER6.webm",
"assets/vids/WINTER7.webm",
"assets/vids/WINTER8.webm",
"assets/vids/WINTER9.webm",
"assets/vids/WINTER10.webm",
"assets/vids/WINTER11.webm",
"assets/vids/WINTER12.webm",
"assets/vids/WINTER13.webm",
"assets/vids/WINTER14.webm",
"assets/vids/WINTER15.webm",
"assets/vids/WINTER16.webm",
"assets/vids/WINTER17.webm",
"assets/vids/WINTER18.webm",
"assets/vids/WINTER19.webm",
"assets/vids/WINTER20.webm",
"assets/vids/WINTER21.webm",
"assets/vids/WINTER22.webm",
"assets/vids/WINTER23.webm",
"assets/vids/WINTER24.webm",
"assets/vids/WINTER25.webm",
"assets/vids/WINTER26.webm",
"assets/vids/WINTER27.webm",
"assets/vids/WINTER28.webm",
"assets/vids/WINTER29.webm",
"assets/vids/WINTER30.webm",
"assets/vids/WINTER31.webm",
"assets/vids/WINTER32.webm",
"assets/vids/WINTER33.webm",
"assets/vids/WINTER34.webm",
  // Add more video URLs here when you have them
];

// Function to set the video source and play the video
function setAndPlayVideo() {
  var videoElement = document.getElementById("season-video");
  var videoSource = document.getElementById("video-source");
  videoSource.src = getRandomItem(videoSets);
  videoElement.load();

  // Wait for user interaction before playing the video
  document.addEventListener(
    "click",
    function () {
      videoElement.play();
    },
    { once: true }
  );
}

// Set the initial video
setAndPlayVideo();

// Function to toggle play and pause
function togglePlayPause() {
  var videoElement = document.getElementById("season-video");
  var playButton = document.getElementById("play-button");
  var pauseButton = document.getElementById("pause-button");

  if (videoElement.paused) {
    videoElement.play();
    playButton.classList.add("hidden");
    pauseButton.classList.remove("hidden");
  } else {
    videoElement.pause();
    pauseButton.classList.add("hidden");
    playButton.classList.remove("hidden");
  }
}

// Event to show and hide pause button on hover
document
  .getElementById("video-frame")
  .addEventListener("mouseenter", function () {
    var videoElement = document.getElementById("season-video");
    var pauseButton = document.getElementById("pause-button");

    if (!videoElement.paused) {
      pauseButton.classList.remove("hidden");
    }
  });

document
  .getElementById("video-frame")
  .addEventListener("mouseleave", function () {
    var pauseButton = document.getElementById("pause-button");
    pauseButton.classList.add("hidden");
  });

// Disable context menu (right-click menu)
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Attach error listener to videoElement
var videoElement = document.getElementById("season-video");
videoElement.addEventListener("error", function () {
  console.log("Error with video: ", videoElement.error);
});

// Play the initial video after the document has loaded
document.addEventListener("DOMContentLoaded", (event) => {
  var videoElement = document.getElementById("season-video");
  videoElement.play();
});
