const audio = document.getElementById('audio');

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0; // Reset to the beginning
}

function changeSong(songUrl) {
    audio.src = songUrl;
    audio.play();
}
