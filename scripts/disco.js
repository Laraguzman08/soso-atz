document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("fundo-audio");
    audio.pause();
    // pausa no inicio

    setTimeout(() => {
        audio.play();
    }, 4000);
    // a música começa a tocar depois de 5 segundos, para sincronizar com o vídeo de fundo
});

function mostrarMusicas(id) {
    // "id" é o album clicado, por exemplo "ep1"
    const album = musicas[id];
    const display = document.getElementById('musicas'); // div onde as músicas serão exibidas

    let html = `<h3>${album.nome}</h3>`; // começa o html com o nome do álbum
    html += `<p><strong>Release date:</strong> ${album.data}</p>`; // adiciona a data de lançamento ao html
    html += `<p><strong>Type:</strong> ${album.tipo}</p>`; // adiciona o tipo de álbum ao html
    html += "<ul>"; // abre lista de músicas

    for (let i = 0; i < album.musicas.length; i++) {
        // percorre cada música e adiciona ao html como um item da lista
        html += `<li>${album.musicas[i]}</li>`;
    }
    html += "</ul>"; // fecha a lista
    html += `<p><a href="${album.playlist}" target="_blank">Listen on YouTube</a></p>`;
    // adiciona um link para a playlist do álbum no YouTube

    display.style.opacity = '0'; // esconde antes de atualizar
    display.innerHTML = html; // atualiza o conteúdo
    display.style.display = 'block'; // mostra a div
    display.style.animation = 'none'; // reseta a animação
    display.offsetHeight; // força recalcular o layout para reiniciar a animação
    display.style.animation = 'surgirLado 0.4s ease forwards';
}

const musicas = {
    ep1: {
        nome: "TREASURE EP.1: All to Zero",
        data: "October 24, 2018",
        tipo: "Mini Album",
        playlist: "https://www.youtube.com/watch?v=zaTisOaQyuQ&list=PLtYXanAa7INwVMSGW2vLBBanxV55wsId3",
        musicas: [
            "Intro: Long Journey",
            "해적왕 (Pirate King)",
            "Treasure",
            "Twilight",
            "Stay",
            "My Way"
        ]
    },
    ep2: {
        nome: "TREASURE EP.2: Zero To One",
        data: "January 15, 2019",
        tipo: "Mini Album",
        playlist: "https://www.youtube.com/watch?v=QbjmVyP9RFg&list=OLAK5uy_k6TmIaA2eJo_9VwRxfC3MDnTu4dH6H6Do",
        musicas: [
            "HALA HALA (Hearts Awakened, Live Alive)",
            "Say My Name",
            "Desire",
            "Light",
            "Promise",
            "From (CD only)"
        ]
    },
}