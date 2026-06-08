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
        document.getElementById('fundo-era').style.opacity = '0';
        return;
    }

    display.dataset.atual = id; // salva qual álbum está aberto

    // tira o destaque de todos os álbuns
    document.querySelectorAll('.d-flex.align-items-center.gap-3').forEach(el => {
        el.classList.remove('album-selecionado');
    });
    event.currentTarget.classList.add('album-selecionado'); // destaca o álbum clicado

    const fundo = document.getElementById('fundo-era');
    fundo.style.opacity = '0';
    display.style.animation = 'sumir 0.3s ease forwards';

    let html = '<div style="display: flex; gap: 2rem; align-items: flex-start; justify-content: space-between;">';
    html += `<div style="flex: 1; width: 100%">`;
    html += `<h3>${album.nome}</h3>`; // começa o html com o nome do álbum
    html += `<p><strong>Release date:</strong> ${album.data}</p>`; // adiciona a data de lançamento ao html
    html += `<p><strong>Type:</strong> ${album.tipo}</p>`; // adiciona o tipo de álbum ao html
    html += `<p>${album.descricao}</p>`; // adiciona a descrição do álbum ao html
    html += `<iframe onload="this.style.opacity='1'" src="https://open.spotify.com/embed/album/${album.playlist}?utm_source=generator&theme=0" width="100%" height="300" frameborder="0" style="border-radius: 0.75rem; opacity: 0; transition: opacity 0.4s ease;"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
    // adiciona um link para a playlist do álbum no Spotify
    html += `</div>`; // fecha a div de informações
    html += `<img src="${album.poster}" alt="${album.nome} poster" style="width: 32%; height: 400; border-radius: 0.75rem;">`; // adiciona o poster do álbum
    html += '</div>'; // fecha a div principal

    setTimeout(() => {
        fundo.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${album.fundo})`;
        fundo.style.opacity = '1';
        display.innerHTML = html;
        display.style.display = 'block';
        display.style.animation = 'none';
        display.offsetHeight;
        display.style.animation = 'surgirLado 0.4s ease forwards';
    }, 400);

}

const musicas = {
    ep1: {
        nome: "TREASURE EP.1: All to Zero",
        data: "October 24, 2018",
        tipo: "Mini Album",
        playlist: "3iS3jNsGNXWcKb653VpDNV",
        fundo: "../assets/backgrounds/ep1era.jpg", // imagem de fundo dessa era
        descricao: "ATEEZ’s debut mini album marks the beginning of the conceptual Treasure series. Serving as a prologue, the project portrays the eight members at the start of a long journey, setting out into a wider world as budding anarchists and revolutionaries, guided by their hearts in search of the treasure that lies within themselves.",
        poster: "../assets/posters/posterep1.jpg" // poster do álbum
    },
    ep2: {
        nome: "TREASURE EP.2: Zero To One",
        data: "January 15, 2019",
        tipo: "Mini Album",
        playlist: "0mjLsC33mcxN5yBdtwqmIQ",
        fundo: "../assets/backgrounds/ep2era.jpg",
        descricao: "Their second mini album represents the awakening of the narrative, as the group comes together and discovers masked alter egos in a dystopian dimension. The project explores themes of identity and rebellion through the title tracks “Say My Name” and “HALA HALA (Hearts Awakened, Live Alive).”",
        poster: "../assets/posters/posterep2.jpg"
    },
    ep3: {
        nome: "TREASURE EP.3: One To All",
        data: "June 10, 2019",
        tipo: "Mini Album",
        playlist: "1w1dfDuyqz63mHJv1A8Xmk",
        fundo: "../assets/backgrounds/ep3era.jpg",
        descricao: "ATEEZ’s third mini album represents the moment when the group enters a tropical illusion before confronting the reality of their journey. Serving as a turning point in the storyline, the members are caught between a perfect dream and the real world, and must decide whether to remain in a false utopia or confront the storms of reality. The title One to All symbolizes the group’s complete unity and the spread of their message to the world.",
        poster: "../assets/posters/posterep3.jpg"
    },
    ep4: {
        nome: "TREASURE EP.FIN: All To Action",
        data: "October 8, 2019",
        tipo: "Full-Length Album",
        playlist: "5AVSEEmCz4qwDiArvX6ZOx",
        descricao: "ATEEZ’s first full-length studio album serves as the climax and official conclusion of the main Treasure saga. The project unfolds like a battle march: after awakening from the paradise-like illusion of the previous album, the members raise their flags and move forward to fight against an oppressive system and help liberate the world. The title <strong>All to Action</strong> is a call for the entire crew to stop running and begin the final revolution.",
        fundo: "../assets/backgrounds/ep4era.jpg",
        poster: "../assets/posters/posterep4.jpg"
    },
    ep5: {
        nome: "TREASURE EPILOGUE : Action To Answer",
        data: "January 6, 2020",
        tipo: "Mini Album",
        playlist: "1GLADlDkcZk6QjjMZyHstu",
        descricao: "This epilogueserves as the grand finale of ATEEZ's acclaimed Treasure series, bringing the group's debut storyline to a powerful and meaningful conclusion. Blending energetic Hip-Hop and EDM sounds, the album captures both the excitement of the journey and the reflection that comes with reaching its destination. Rather than discovering a physical treasure, ATEEZ reveals that the true treasure lies within themselves—their identity, independence, and inner light. Through its message of self-discovery and growth, the album marks the end of one chapter and the beginning of a new era.",
        fundo: "../assets/backgrounds/ep5era.jpg",
        poster: "../assets/posters/posterep5.jpg",
    },
    ep6: {
        nome: "ZERO : FEVER Part.1",
        data: "July 29, 2020",
        tipo: "Mini Album",
        playlist: "01IFxHiVOY6uf3vUFVXEoI",
        descricao: "ZERO : FEVER Part.1 marks the beginning of ATEEZ’s FEVER series and the start of a new chapter following the conclusion of the TREASURE era. Released in 2020, the album explores the emotions of youth, capturing the fears, uncertainties, dreams, and passions that come with growing up. Through its energetic sound and introspective themes, the project portrays a generation searching for its place in the world while chasing its aspirations despite the challenges aheadd",
        fundo: "../assets/backgrounds/ep6era.jpg",
        poster: "../assets/posters/posterep6.jpg",
    },
    ep7: {
        nome: "ZERO : FEVER Part.2",
        data: "March 1, 2021",
        tipo: "Mini Album",
        playlist: "1JMc8IZ1Jbax6m5OvswmAB",
        descricao: "The sixth EP by ATEEZ continues the group's FEVER series by exploring the emotional struggles and uncertainties of youth. The album reflects the pressure of chasing dreams while facing fear, doubt, and the challenges of growing up, balancing moments of hope with feelings of anxiety and confusion. At the same time, it expands the group's lore, following the members as they confront an oppressive system and move closer to discovering their purpose and freedom.",
        fundo: "../assets/backgrounds/ep7era.jpg",
        poster: "../assets/posters/posterep7.jpg",
    },
    ep8: {
        nome: "ZERO : FEVER Part.3",
        data: "September 13, 2021",
        tipo: "Mini Album",
        playlist: "5ozaWoYQScjFzGODcJmy3G",
        descricao: "Their seventh EP continues the FEVER series while exploring themes of duality, choice, and the pursuit of a brighter future. The album is especially significant for marking Mingi’s return after an eight-month hiatus. For the first time, the group promoted two fan-voted title tracks: “Deja Vu,” which showcases a darker, more mature and sensual side, and “Eternal Sunshine,” a bright and uplifting pop track filled with optimism and positive energy. Through these contrasting concepts, the album captures the emotional intensity of youth and the determination to move forward despite uncertainty.",
        fundo: "../assets/backgrounds/ep8era.jpg",
        poster: "../assets/posters/posterep8.jpg",

    },
    ep9: {
        nome: "ZERO : FEVER EPILOGUE",
        data: "December 10, 2021",
        tipo: "Full-Length Album",
        playlist: "3R2frjpElpzeh46AC7rK7v",
        descricao: "The final chapter of ATEEZ’s FEVER series serves as a repackage album that brings the era’s story to a meaningful close. Building on the themes of youth, struggle, and personal growth explored throughout the series, the album reflects on the lessons learned along the journey while looking ahead to the future. As both a conclusion and a transition, it acts as a bridge between the FEVER era and the next stage of ATEEZ’s evolving narrative.",
        fundo: "../assets/backgrounds/ep9era.jpg",
        poster: "../assets/posters/posterep9.jpg",
    },
    ep10: {
        nome: "BEYOND : ZERO",
        data: "May 25, 2022",
        tipo: "Japanese Mini Album",
        playlist: "4k7ECCNLLIukf1rwPaOxoY",
        descricao: "The second Japanese EP by ATEEZ, released on May 25, 2022, expands the group’s discography with Japanese versions of their music while maintaining the powerful energy that defines their sound. Featuring a striking boxing-inspired concept, the album symbolizes determination, resilience, and the strength to overcome obstacles. Through its dynamic visuals and intense performances, the project highlights ATEEZ’s fighting spirit and commitment to pushing beyond their limits.",
        fundo: "../assets/backgrounds/ep10era.jpg",
        poster: "../assets/posters/posterep10.jpg",
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