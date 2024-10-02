var progress = document.querySelector("#progress");
var song = document.querySelector("audio");  // Changed to select the audio tag directly
var ctrlIcon = document.querySelector("#ctrlIcon");

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

// Update progress bar as the song plays
song.addEventListener('timeupdate', function() {
    progress.value = song.currentTime;
});

progress.onchange = function() {
    song.currentTime = progress.value;
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}
