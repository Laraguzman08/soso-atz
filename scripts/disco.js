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

    let html = '<div id="info-view">'; // abre a div principal
    html += `<div class="info-grid">`; // abre a div de grid para o album
    html += `<div class="info-text">`; // abre a div de informações
    html += `<h3>${album.nome}</h3>`; // começa o nome do álbum
    html += `<p><strong>Release date:</strong> ${album.data}</p>`; // adiciona a data de lançamento ao html
    html += `<p><strong>Type:</strong> ${album.tipo}</p>`; // adiciona o tipo de álbum ao html
    html += `<p>${album.descricao}</p>`; // adiciona a descrição do álbum ao html
    html += `${album.faixaPrincipal ? `<button class="button mt-3" onclick="mostrarKaraoke('${id}')">KARAOKE</button>` : ''}`; // adiciona o botão de karaoke se houver faixa principal
    html += `</div>`; // fecha a div de informações
    html += `<div class="info-spotify">`; // abre a div da playlist completa
    html += `<iframe src="https://open.spotify.com/embed/album/${album.playlist}" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`; // adiciona a playlist do álbum ao html
    html += `</div>`; // fecha a div da playlist completa
    html += `</div>`; // fecha a div de grid
    html += '</div>'; // fecha a div principal
    html += '<div id="karaoke-view" style="display:none;"></div>'; // adiciona a div do karaoke, que será preenchida quando o botão for clicado

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
        faixaPrincipal: {
            titulo: "Pirate King",
            instrumental: "../assets/songs/ep1-instr.mp3",
            letra: [
                { tempo: 0, coreano: "...", romanizacao: "..." },
                { tempo: 12, coreano: "Beam me up, beam me up", romanizacao: "Beam me up, beam me up" },
                { tempo: 14, coreano: "우린 요동치듯 춤춰 every day", romanizacao: "urin yodongchideut chumchwo every day" },
                { tempo: 18, coreano: "Ready, set, get ready, set", romanizacao: "Ready, set, get ready, set" },
                { tempo: 20, coreano: "점점 발을 굴려 아주 뜨겁게", romanizacao: "jeomjeom bareul gullyeo aju tteugeopge" },
                { tempo: 22, coreano: "(해가 떨어져도 go)", romanizacao: "(haega tteoreojyeodo go)" },
                { tempo: 24, coreano: "비틀어 이 판을 get it", romanizacao: "biteureo i paneul get it" },
                { tempo: 25, coreano: "I feel like somebody, you get it", romanizacao: "I feel like somebody, you get it" },
                { tempo: 26, coreano: "우주에 닿을 때까지 발을 딛고 sail", romanizacao: "ujue daeul ttaekkaji bareul ditgo sail" },
                { tempo: 29, coreano: "I see future face zoom", romanizacao: "I see future face zoom" },
                { tempo: 30, coreano: "닻이 올랐지 gotta pass yeah", romanizacao: "dachi ollatji gotta pass yeah" },
                { tempo: 32, coreano: "끝없이 항해 I'm ready", romanizacao: "kkeuteopsi hanghae I'm ready" },
                { tempo: 33, coreano: "Come to me till the end", romanizacao: "Come to me till the end" },
                { tempo: 34, coreano: "이제 닻을 올려라", romanizacao: "ije dacheul ollyeora" },
                { tempo: 36, coreano: "어두운 맘을 걷어라", romanizacao: "eoduun mameul geodeora" },
                { tempo: 37, coreano: "어디든지 we can go", romanizacao: "eodideunji we can go" },
                { tempo: 40, coreano: "우린 뭐든 뭐든 돼 우릴 따라오면 돼", romanizacao: "urin mwodeun mwodeun dwae uril ttaraomyeon dwae" },
                { tempo: 43, coreano: "손을 높게 들어", romanizacao: "soneul nopge deureo" },
                { tempo: 45, coreano: "너와 나 타는 불빛 아래", romanizacao: "neowa na taneun bulbit arae" },
                { tempo: 47, coreano: "찬란한 그곳으로", romanizacao: "challanhan geugoseuro" },
                { tempo: 51, coreano: "Step one, two, three, and one, two, three, let's go", romanizacao: "Step one, two, three, and one, two, three, let's go" },
                { tempo: 55, coreano: "Will you be my friend", romanizacao: "Will you be my friend" },
                { tempo: 57, coreano: "Um, oh-eh-oh", romanizacao: "Um, oh-eh-oh" },
                { tempo: 62, coreano: "Um, oh-eh-oh", romanizacao: "Um, oh-eh-oh" },
                { tempo: 68, coreano: "Um, oh-eh-oh, woah", romanizacao: "Um, oh-eh-oh, woah" },
                { tempo: 73, coreano: "Um, oh-eh-oh", romanizacao: "Um, oh-eh-oh" },
                { tempo: 79, coreano: "저기 지평선 끝 어딘가 우리 도착지", romanizacao: "jeogi jipyeongseon kkeut eodin-ga uri dochakji" },
                { tempo: 82, coreano: "한 배를 탈라면 지금", romanizacao: "han baereul tallamyeon jigeum" },
                { tempo: 84, coreano: "You, you need a pirate king", romanizacao: "You, you need a pirate king" },
                { tempo: 85, coreano: "주의할 건 없어", romanizacao: "juuihal geon eopseo" },
                { tempo: 86, coreano: "그냥 내 동료가 돼주길", romanizacao: "geunyang nae dongnyoga dwaejugil" },
                { tempo: 87, coreano: "좋아 너랑, 너도", romanizacao: "joa neorang, neodo" },
                { tempo: 89, coreano: "이리 와 앉아서 준비됨 총소리 bang", romanizacao: "iri wa anjaseo junbidoem chongsori bang" },
                { tempo: 90, coreano: "Time we gon' get it", romanizacao: "Time we gon' get it" },
                { tempo: 91, coreano: "Taking our time, we gon' get it", romanizacao: "Taking our time, we gon' get it" },
                { tempo: 93, coreano: "Time we gon' get it", romanizacao: "Time we gon' get it" },
                { tempo: 94, coreano: "Taking our time, we gon' get it", romanizacao: "Taking our time, we gon' get it" },
                { tempo: 95, coreano: "하나에 back 둘하면 head", romanizacao: "hana-e back dulhamyeon head" },
                { tempo: 97, coreano: "바다와 우린 늘 하나야 I got it", romanizacao: "badawa urin neul hanaya I got it" },
                { tempo: 98, coreano: "You're head, I'm back, back", romanizacao: "You're head, I'm back, back" },
                { tempo: 99, coreano: "Back a race, who’s with me", romanizacao: "Back a race, who’s with me" },
                { tempo: 100, coreano: "어기 어디 여차", romanizacao: "eogi eodi yeocha" },
                { tempo: 101, coreano: "이제 닻을 올려라", romanizacao: "ije dacheul ollyeora" },
                { tempo: 102, coreano: "어두운 맘을 걷어라", romanizacao: "eoduun mameul geodeora" },
                { tempo: 104, coreano: "어디든지 we can go", romanizacao: "eodideunji we can go" },
                { tempo: 107, coreano: "우린 뭐든 뭐든 돼 우릴 따라오면 돼", romanizacao: "urin mwodeun mwodeun dwae uril ttaraomyeon dwae" },
                { tempo: 109, coreano: "손을 높게 들어", romanizacao: "soneul nopge deureo" },
                { tempo: 112, coreano: "너와 나 타는 불빛 아래", romanizacao: "neowa na taneun bulbit arae" },
                { tempo: 114, coreano: "찬란한 그곳으로", romanizacao: "challanhan geugoseuro" },
                { tempo: 117, coreano: "Step one, two, three, and one, two, three, let's go", romanizacao: "Step one, two, three, and one, two, three, let's go" },
                { tempo: 122, coreano: "Will you be my friend", romanizacao: "Will you be my friend" },
                { tempo: 124, coreano: "Um, oh-eh-oh", romanizacao: "Um, oh-eh-oh" },
                { tempo: 127, coreano: "노를 저어 노를 저어 나가자", romanizacao: "noreul jeoeo noreul jeoeo nagaja" },
                { tempo: 129, coreano: "Um, oh-eh-oh", romanizacao: "Um, oh-eh-oh" },
                { tempo: 132, coreano: "세게 불어라", romanizacao: "sege bureora" },
                { tempo: 133, coreano: "불어 바람아 더 blow it up", romanizacao: "bureo barama deo blow it up" },
                { tempo: 135, coreano: "Um, oh-eh-oh, woah", romanizacao: "Um, oh-eh-oh, woah" },
                { tempo: 138, coreano: "노를 저어 노를 저어 나가자", romanizacao: "noreul jeoeo noreul jeoeo nagaja" },
                { tempo: 140, coreano: "Um, oh-eh-oh", romanizacao: "Um, oh-eh-oh" },
                { tempo: 143, coreano: "It’s burning up", romanizacao: "It’s burning up" },
                { tempo: 144, coreano: "정상을 향해 turn it up", romanizacao: "jeongsang-eul hyanghae turn it up" },
                { tempo: 146, coreano: "어떤 곳도 혼자라면 의미가 없어", romanizacao: "eotteon gotdo honjaramyeon uimiga eopseo" },
                { tempo: 150, coreano: "내 손을 잡아", romanizacao: "nae soneul jaba" },
                { tempo: 154, coreano: "어디든 함께 갈 수 있어", romanizacao: "eodideun hamkke gal su isseo" },
                { tempo: 158, coreano: "무엇이 우릴 막아도", romanizacao: "mueosi uril magado" },
                { tempo: 161, coreano: "모두 이겨낼 수 있는 걸", romanizacao: "modu igyeonael su inneun geol" },
                { tempo: 163, coreano: "We can make everything together", romanizacao: "We can make everything together" },
                { tempo: 167, coreano: "Hey", romanizacao: "Hey" },
                { tempo: 170, coreano: "날 놓치지 마라 놓치지 마라 너", romanizacao: "nal nochiji mara nochiji mara neo" },
                { tempo: 175, coreano: "더 바짝 붙어라 바짝 붙어라", romanizacao: "deo bajjak buteora bajjak buteora" },
                { tempo: 180, coreano: "날 놓치지 마라 놓치지 마라 너", romanizacao: "nal nochiji mara nochiji mara neo" },
                { tempo: 187, coreano: "We can go", romanizacao: "We can go" },
                { tempo: 188, coreano: "We can go", romanizacao: "We can go" },
                { tempo: 189, coreano: "We can go", romanizacao: "We can go" },
                { tempo: 190, coreano: "We can go", romanizacao: "We can go" }
            ]
        }
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

// KARAOKE
let karaokeAudio = null;
let faixaAtualKaraoke = null;

function mostrarKaraoke(id) {
    const album = musicas[id];
    const faixa = album.faixaPrincipal;
    faixaAtualKaraoke = faixa;
    const infoView = document.getElementById('info-view');
    const karaokeView = document.getElementById('karaoke-view');

    infoView.style.animation = 'sumir 0.3s ease forwards';

    setTimeout(() => {
        infoView.style.display = 'none';

        let html = `<div class="karaoke-container">`;
        html += `<h3 class="karaoke-title">${faixa.titulo}</h3>`;
        html += `<div id="karaoke-lyrics">`;
        html += faixa.letra.map((l, i) => {
            const mostrarRomanizacao = l.romanizacao && l.romanizacao.trim() !== l.coreano.trim();
            return `
    <div id="k-linha-${i}" class="linha-karaoke">
        <p class="linha-coreano">${l.coreano}</p>
        ${mostrarRomanizacao ? `<p class="linha-romanizacao">${l.romanizacao}</p>` : ''}
    </div>
    `;
        }).join('');
        html += `</div>`;
        html += `<div class="karaoke-controles d-flex gap-3 justify-content-center">`;
        html += `<button class="button" onclick="iniciarKaraoke()">▶ Start</button>`;
        html += `<button class="button" onclick="pararKaraoke()">⏹ Stop</button>`;
        html += `<button class="button" onclick="voltarKaraoke()">← Voltar</button>`;
        html += `</div>`;
        html += `</div>`;

        karaokeView.innerHTML = html;
        karaokeView.style.display = 'block';
        karaokeView.style.animation = 'none';
        karaokeView.offsetHeight;
        karaokeView.style.animation = 'surgirLado 0.4s ease forwards';
    }, 300);
}

function iniciarKaraoke() {
    if (!faixaAtualKaraoke) return;

    if (karaokeAudio) { karaokeAudio.pause(); karaokeAudio.currentTime = 0; }

    karaokeAudio = new Audio(faixaAtualKaraoke.instrumental);
    karaokeAudio.play();

    karaokeAudio.addEventListener('timeupdate', () => {
        const tempoAtual = karaokeAudio.currentTime;
        let linhaAtual = 0;
        faixaAtualKaraoke.letra.forEach((l, i) => { if (tempoAtual >= l.tempo) linhaAtual = i; });

        faixaAtualKaraoke.letra.forEach((l, i) => {
            const el = document.getElementById(`k-linha-${i}`);
            if (!el) return;
            if (i === linhaAtual) {
                el.classList.add('linha-ativa');
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                el.classList.remove('linha-ativa');
            }
        });
    });
}

function pararKaraoke() {
    if (karaokeAudio) {
        karaokeAudio.pause();
        karaokeAudio.currentTime = 0;
        karaokeAudio = null;
    }
    document.querySelectorAll('.linha-karaoke').forEach(el => el.classList.remove('linha-ativa'));
}

function voltarKaraoke() {
    pararKaraoke();

    const infoView = document.getElementById('info-view');
    const karaokeView = document.getElementById('karaoke-view');

    karaokeView.style.animation = 'sumir 0.3s ease forwards';

    setTimeout(() => {
        karaokeView.style.display = 'none';
        infoView.style.display = 'block';
        infoView.style.animation = 'none';
        infoView.offsetHeight;
        infoView.style.animation = 'surgirLado 0.4s ease forwards';
    }, 300);
}