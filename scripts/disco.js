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
    const display = document.getElementById('musicas');

    let html = `<h3>${album.nome}</h3>`; // começa o html com o nome do álbum
    html += `<p><strong>Release date:</strong> ${album.data}</p>`; // adiciona a data de lançamento ao html
    html += `<p><strong>Type:</strong> ${album.tipo}</p>`; // adiciona o tipo de álbum ao html
    html += "<ul>"; // abre lista de músicas

    for (let i = 0; i < album.musicas.length; i++) {
        // percorre cada música e adiciona ao html como um item de lista
        html += `<li>${album.musicas[i]}</li>`;
    }
    html += "</ul>"; // fecha a lista
    html += `<p><a href="${album.playlist}" target="_blank">Listen on YouTube</a></p>`; 
    // adiciona um link para a playlist do álbum no YouTube

    display.innerHTML = html; // coloca tudo dentro da div de exibição (musicas)
    display.style.display = "block"; // exibe a div de músicas
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
    }
}