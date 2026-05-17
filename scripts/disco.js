function mostrarMusicas(id, event) { // "id" é o album clicado, por exemplo "ep1"
    const display = document.getElementById('musicas'); // div onde as músicas serão exibidas
    const album = musicas[id]; // pega as informações do álbum clicado

    // se já está selecionado, fecha
    if (display.dataset.atual === id) {
    display.style.animation = 'none';
    display.offsetHeight;
    display.style.animation = 'sumir 0.4s ease forwards';
    setTimeout(() => {
        display.style.display = 'none';
    }, 400);
    display.dataset.atual = '';
    event.currentTarget.classList.remove('album-selecionado');
    return;
    }

    display.dataset.atual = id; // salva qual álbum está aberto

    // tira o destaque de todos os álbuns
    document.querySelectorAll('.d-flex.align-items-center.gap-3').forEach(el => {
        el.classList.remove('album-selecionado');
    });
    event.currentTarget.classList.add('album-selecionado'); // destaca o álbum clicado

    let html = `<h3>${album.nome}</h3>`; // começa o html com o nome do álbum
    html += `<p><strong>Release date:</strong> ${album.data}</p>`; // adiciona a data de lançamento ao html
    html += `<p><strong>Type:</strong> ${album.tipo}</p>`; // adiciona o tipo de álbum ao html
    html += `<iframe src="https://open.spotify.com/embed/album/${album.playlist}?utm_source=generator&theme=0" width="100%" height="350" frameborder="0" style="border-radius: 0.75rem;"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
    // adiciona um link para a playlist do álbum no Spotify

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
        playlist: "3iS3jNsGNXWcKb653VpDNV",
    },
    ep2: {
        nome: "TREASURE EP.2: Zero To One",
        data: "January 15, 2019",
        tipo: "Mini Album",
        playlist: "0mjLsC33mcxN5yBdtwqmIQ",
    },
    ep3: {
        nome: "TREASURE EP.3: One To All",
        data: "June 10, 2019",
        tipo: "Mini Album",
        playlist: "1w1dfDuyqz63mHJv1A8Xmk",
    },
    ep4: {
        nome: "TREASURE EP.FIN: All To Action",
        data: "October 8, 2019",
        tipo: "Full-Length Album",
        playlist: "5AVSEEmCz4qwDiArvX6ZOx",
    },
    ep5: {
        nome: "TREASURE EPILOGUE : Action To Answer",
        data: "January 6, 2020",
        tipo: "Mini Album",
        playlist: "1GLADlDkcZk6QjjMZyHstu",
    },
    ep6: {
        nome: "ZERO : FEVER Part.1",
        data: "July 29, 2020",
        tipo: "Mini Album",
        playlist: "01IFxHiVOY6uf3vUFVXEoI",
    },
    ep7: {
        nome: "ZERO : FEVER Part.2",
        data: "March 1, 2021",
        tipo: "Mini Album",
        playlist: "1JMc8IZ1Jbax6m5OvswmAB",
    },
    ep8: {
        nome: "ZERO : FEVER Part.3",
        data: "September 13, 2021",
        tipo: "Mini Album",
        playlist: "5ozaWoYQScjFzGODcJmy3G",
    },
    ep9: {
        nome: "ZERO : FEVER EPILOGUE",
        data: "December 10, 2021",
        tipo: "Full-Length Album",
        playlist: "3R2frjpElpzeh46AC7rK7v",
    },
    ep10: {
        nome: "BEYOND : ZERO",
        data: "May 25, 2022",
        tipo: "Japanese Mini Album",
        playlist: "4k7ECCNLLIukf1rwPaOxoY",
    },
    ep11: {
        nome: "THE WORLD EP.1 : MOVEMENT",
        data: "July 29, 2022",
        tipo: "Mini Album",
        playlist: "3fgDrbflffzvV3H3plG9e6",
    },
    ep12: {
        nome: "THE WORLD EP.PARADIGM",
        data: "November 30, 2022",
        tipo: "Japanese Mini Album",
        playlist: "2f1QQQD15aeu9e5EWO3XrA",
    },
    ep13: {
        nome: "SPIN OFF : FROM THE WITNESS",
        data: "December 30, 2022",
        tipo: "Single",
        playlist: "0NQQk6vo9LOOwKjZc2iUwm",
    },
    ep14: {
        nome: "THE WORLD EP.2 : OUTLAW",
        data: "June 16, 2023",
        tipo: "Mini Album",
        playlist: "5DxixnuklLg28S7UMeGC9H",
    },
    ep15: {
        nome: "THE WORLD EP.FIN : WILL",
        data: "December 1, 2023",
        tipo: "Full-Length Album",
        playlist: "1r0F1EzzNOaJyB7U0Jp5RH",
    },
    ep16: {
        nome: "GOLDEN HOUR : Part.1",
        data: "May 21, 2024",
        tipo: "Mini Album",
        playlist: "37XJyd3MfDYOhmAaDY5gEU",
    },
    ep17: {
        nome: "Hush-Hush",
        data: "June 1, 2024",
        tipo: "Collaboration Single",
        playlist: "57miIs3v5jsOL4DGMj8cnK",
    },
    ep18: {
        nome: "Birthday",
        data: "October 2, 2024",
        tipo: "Japanese Single",
        playlist: "4lgToZ6PFbsj6PpN1qfKGa",
    },
    ep19: {
        nome: "GOLDEN HOUR : Part.2",
        data: "November 15, 2024",
        tipo: "Mini Album",
        playlist: "2FLo3lAhEQpvHAtRN0HEUP",
    },
    ep20: {
        nome: "GOLDEN HOUR : Part.3",
        data: "June 13, 2025",
        tipo: "Mini Album",
        playlist: "5LlszztgR3YH7aN7SPgTVi",
    },
    ep21: {
        nome: "GOLDEN HOUR : Part.3 ‘In Your Fantasy Edition’",
        data: "July 11, 2025",
        tipo: "Mini Album Repackage",
        playlist: "2rBtlOpNMuE4u9imyZz0YL",
    },
    ep22: {
        nome: "Ashes to Light",
        data: "September 17, 2025",
        tipo: "Japanese Full Album",
        playlist: "0N3IF32AyRsrhGO8YIl4qF",
    },
    ep23: {
        nome: "GOLDEN HOUR : Part.4",
        data: "February 6, 2026",
        tipo: "Mini Album",
        playlist: "1FBxW4I6azDVjGallQ4wQk",
    },
}