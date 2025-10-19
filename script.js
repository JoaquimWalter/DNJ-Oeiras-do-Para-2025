let audio = new Audio('./src/MUSICA-DNJ2025.mp3');
let isPlaying = false;


document.querySelector('.play').addEventListener('click', function() {
    if (!isPlaying) {
        audio.loop = true;
        audio.play();
        isPlaying = true;
    }
});

document.querySelector('.bi-pause-circle').addEventListener('click', function() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    }
});

document.querySelector('.bi-stop-circle').addEventListener('click', function() {
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
});     

