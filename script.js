// let audio = new Audio('./src/musica dnj 2025.mp3');
// let isPlaying = false;


// document.querySelector('.play').addEventListener('click', function() {
//     if (!isPlaying) {
//         audio.loop = true;
//         audio.play();
//         isPlaying = true;
//     }
// });

// document.querySelector('.bi-pause-circle').addEventListener('click', function() {
//     if (isPlaying) {
//         audio.pause();
//         isPlaying = false;
//     }
// });

// document.querySelector('.bi-stop-circle').addEventListener('click', function() {
//     audio.pause();
//     audio.currentTime = 0;
//     isPlaying = false;
// });     



// Aguarda o carregamento completo do DOM
window.addEventListener('DOMContentLoaded', () => {
    // Corrigido: nome de arquivo sem espaços
    const audio = new Audio('./src/MUSICA-DNJ-2025.mp3');
    let isPlaying = false;

    // Seletores dos botões
    const playBtn = document.querySelector('.play');
    const pauseBtn = document.querySelector('.bi-pause-circle');
    const stopBtn = document.querySelector('.bi-stop-circle');

    // PLAY
    playBtn.addEventListener('click', () => {
        if (!isPlaying) {
            audio.loop = true;

            // Toca o áudio e trata erros de autoplay
            audio.play()
                .then(() => isPlaying = true)
                .catch((err) => {
                    console.error('Erro ao tocar o áudio:', err);
                    alert('Clique novamente para permitir a reprodução de áudio.');
                });
        }
    });

    // PAUSE
    pauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
        }
    });

    // STOP
    stopBtn.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
    });
});

