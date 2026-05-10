document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("fundo-audio");
    audio.pause(); 
    // pausa no inicio

    setTimeout(() => {
        audio.play();
    }, 4000);
    // a música começa a tocar depois de 5 segundos, para sincronizar com o vídeo de fundo
});