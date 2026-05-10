document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('fundo-audio');
    audio.volume = 0.08; // Ajusta o volume para 10%
});
// o id é único por página, em páginas diferentes pode usar mais de uma vez


// visibilitychange roda toda vez que o usuário sai ou volta pra aba
document.addEventListener("visibilitychange", function() {
    const video = document.getElementById("fundo-vid");
    const audio = document.getElementById("fundo-audio");

    // Se a aba estiver oculta, pausa o vídeo e o áudio; Se a aba estiver visível, toca o vídeo e o áudio.
    if (document.hidden) {
        if (video) video.pause(); // if (video) é para evitar erros caso a página não tenha vídeo
        audio.pause();
    } else {
        if (video) video.play();
        audio.play();
    }
});