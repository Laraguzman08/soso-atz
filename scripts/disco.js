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
    ep3: {
        nome: "TREASURE EP.3: One To All",
        data: "June 10, 2019",
        tipo: "Mini Album",
        playlist: "https://www.youtube.com/watch?v=MriePJkEays&list=OLAK5uy_kmHGarpMyx8RGF-NhiLNjQHk8xNh_7JaU",
        musicas: [
            "UTOPIA",
            "ILLUSION",
            "Crescent",
            "WAVE",
            "AURORA",
            "Dancing Like Butterfly Wings"
        ]
    },
    ep4: {
        nome: "TREASURE EP.FIN: All To Action",
        data: "October 8, 2019",
        tipo: "Full-Length Album",
        playlist: "https://www.youtube.com/watch?v=8uErrB0DpHk&list=OLAK5uy_khhLi0qMU0bWMkxsunrZ-7D4cl-gW1_lY",
        musicas: [
            "End of the Beginning",
            "WONDERLAND",
            "Dazzling Light",
            "안개 (Mist)",
            "Precious (Overture)",
            "WIN",
            "If Without You",
            "친구 (THANK U)",
            "Sunrise",
            "걸어가고 있어 (WALKING/WITH U)",
            "Beginning of the End"
        ]
    },
    ep5: {
        nome: "TREASURE EPILOGUE : Action To Answer",
        data: "January 6, 2020",
        tipo: "Mini Album",
        playlist: "https://www.youtube.com/watch?v=dTT3MRODUsA&list=OLAK5uy_kkBDZFYItTePlxktoy3ZNKS4ru554otWE",
        musicas: [
            "Answer",
            "지평선 (Horizon)",
            "Star 1117",
            "Precious",
            "Outro: Long Journey"
        ]
    },
    ep6: {
        nome: "ZERO : FEVER Part.1",
        data: "July 29, 2020",
        tipo: "Mini Album",
        playlist: "https://www.youtube.com/watch?v=XHLtcKcWi1k&list=OLAK5uy_nHhTEv-fuUNZkNcUDldagVB5ogJsrE1ec",
        musicas: [
            "Dear Diary: 2016.07.29",
            "FEVER",
            "THANXX",
            "지평선춤을 춰 (TO THE BEAT)",
            "INCEPTION",
            "Good Lil Boy",
            "One Day At A Time"
        ]
    },
    ep7: {
        nome: "ZERO : FEVER Part.2",
        data: "March 1, 2021",
        tipo: "Mini Album",
        playlist: "https://www.youtube.com/watch?v=xtcVwuauVV0&list=OLAK5uy_kglITOarjHCGjXeF8EGEcUaVfz4t7J2k0",
        musicas: [
            "불놀이야 Fireworks (I’m the One)",
            "선도부 (The Leaders)",
            "Time of Love",
            "Take Me Home",
            "Celebrate",
            "Take Me Home (English ver.)",
            "I’m The One (HEAT-TOPPING ver.)"
        ]
    },
    ep8: {
        nome: "ZERO : FEVER Part.3",
        data: "September 13, 2021",
        tipo: "Mini Album",
        playlist: "https://www.youtube.com/watch?v=WJgTnDAmJHc&list=OLAK5uy_nHsV1VeboxluAnoVh-LjmDAmCE7-CPr6g",
        musicas: [
            "Eternal Sunshine",
            "Feeling Like I Do",
            "Deja Vu",
            "ROCKY",
            "All About You",
            "Not Too Late (밤하늘)"
        ]
    },
    ep9: {
        nome: "ZERO : FEVER EPILOGUE",
        data: "December 10, 2021",
        tipo: "Full-Length Album",
        playlist: "https://www.youtube.com/watch?v=80WvAnsHOdM&list=OLAK5uy_lne_7_KLZMB782aaeuUvyNHDb21Zt_4nQ",
        musicas: [
            "야간비행 (Turbulence)",
            "Be With You",
            "The Letter",
            "Still Here (Korean Ver.)",
            "Better (Korean Ver.)",
            "멋 (The Real) (흥 : 興 Heung Ver.)",
            "WAVE (Overture)",
            "WONDERLAND (Symphony No.9 'From The Wonderland')",
            "Answer (Ode to Joy) (feat. LA POEM)",
            "Outro : Over the Horizon"
        ]
    },
    ep10: {
        nome: "BEYOND : ZERO",
        data: "May 25, 2022",
        tipo: "Japanese Mini Album",
        playlist: "https://www.youtube.com/watch?v=gpvziLy4DOw&list=OLAK5uy_nE3GCWmBPe3Vphf_f_SQJp2g8ehEiVqas&index=1",
        musicas: [
            "INTRO [BEYOND : ZERO]",
            "Deja Vu (Japanese Ver.)",
            "ROCKY (Boxers Ver.)",
            "The King",
            "夜間飛行 (Turbulence) (Japanese Ver.)",
            "Take Me Home (Japanese Ver.)",
            "Fireworks (I’m The One) (Japanese Ver.)"
        ]
    },
    ep11: {
        nome: "THE WORLD EP.1 : MOVEMENT",
        data: "July 29, 2022",
        tipo: "Mini Album",
        playlist: "https://www.youtube.com/watch?v=My7gjN7ez-k&list=OLAK5uy_myLeQGvb-gxLAiEuv_2KZrmXPLTub0KTk",
        musicas: [
            "PROPAGANDA",
            "Sector 1",
            "Cyberpunk",
            "Guerilla",
            "The Ring",
            "WDIG (Where Do I Go)",
            "New World"
        ]
    },
    ep12: {
        nome: "THE WORLD EP.PARADIGM",
        data: "November 30, 2022",
        tipo: "Japanese Mini Album",
        playlist: "https://www.youtube.com/watch?v=gV9H5c3Volk&list=OLAK5uy_ngVWGkR5Cz23X3TSj1Bhd5_NRkRfVbMVQ",
        musicas: [
            "Intro : Siren",
            "Paradigm",
            "Cyberpunk (Japanese Ver.)",
            "Guerilla (Flag Ver.)",
            "New World (Japanese Ver.)",
            "Outro : Liberty"
        ],
    },
    ep13: {
        nome: "SPIN OFF : FROM THE WITNESS",
        data: "December 30, 2022",
        tipo: "Single",
        playlist: "https://www.youtube.com/watch?v=SszP3hlQ55Y&list=OLAK5uy_mYelIKJlN9F56AdVgJ7Sumc68k-7StPGY",
        musicas: [
            "HALAZIA",
            "WIN (June One Remix)",
            "I’m The One (Eden-ary Remix)",
            "Take Me Home (IDIOTAPE Remix)",
            "Outro : Blue Bird"
        ]
    },
    ep14: {
        nome: "THE WORLD EP.2 : OUTLAW",
        data: "June 16, 2023",
        tipo: "Mini Album",
        playlist: "https://www.youtube.com/watch?v=FNj0IuM8a44&list=OLAK5uy_muA2b75whfcCcl7QSQvBLbyhh9jJauxRs",
        musicas: [
            "This World",
            "Dune",
            "BOUNCY (K-HOT CHILLI PEPPERS)",
            "DJANGO",
            "최면 (Wake Up)",
            "Outlaw"
        ]
    },
    ep15: {
        nome: "THE WORLD EP.FIN : WILL",
        data: "December 1, 2023",
        tipo: "Full-Length Album",
        playlist: "https://www.youtube.com/watch?v=910397KV1uE&list=OLAK5uy_nEPcaeQBgBiEEZSdfrJzcO3KIAIx6Npmw",
        musicas: [
            "WE KNOW",
            "Emergency",
            "미친 폼 (Crazy Form)",
            "ARRIBA",
            "Silver Light",
            "Crescent Part.2",
            "꿈날 (Dreamy Day)",
            "MATZ (HONGJOONG, SEONGHWA)",
            "IT’s You (YEOSANG, SAN, WOOYOUNG)",
            "Youth (YUNHO, MINGI)",
            "Everything (JONGHO)",
            "FIN : WILL"
        ]
    },
    ep16: {
        nome: "GOLDEN HOUR : Part.1",
        data: "May 21, 2024",
        tipo: "Mini Album",
        playlist: "https://www.youtube.com/watch?v=upTemtt7h_0&list=OLAK5uy_ncmGvlLDFDzZRRJT0T7X0ztGhCo-7AgfM",
        musicas: [
            "Golden Hour",
            "Blind",
            "WORK",
            "Empty Box",
            "Shaboom",
            "Siren"
        ]
    },
    ep17: {
        nome: "Hush-Hush",
        data: "June 1, 2024",
        tipo: "Collaboration Single",
        playlist: "https://www.youtube.com/watch?v=6KEqMEmyuIs&list=OLAK5uy_l6mZ_fsJUWcCGdh_g1AO_pWPN3SbURwYQ",
        musicas: [
            "Hush-Hush"
        ]
    },
    ep18: {
        nome: "Birthday",
        data: "October 2, 2024",
        tipo: "Japanese Single",
        playlist: "https://www.youtube.com/watch?v=H5AtTIXTbGg&list=OLAK5uy_nA9_HdDpzP90j0bV7hG26h75rl238K4-k",
        musicas: [
            "Birthday",
            "Royal",
            "Forevermore"
        ]
    },
    ep19: {
        nome: "GOLDEN HOUR : Part.2",
        data: "November 15, 2024",
        tipo: "Mini Album",
        playlist: "https://www.youtube.com/watch?v=Zs2bVRlV9AY&list=OLAK5uy_kDNusvgqiFjv1dioYEZw6SUmSWV4dDk_0",
        musicas: [
            "DEEP DIVE",
            "Scene 1 : Value",
            "Ice On My Teeth",
            "Man on Fire",
            "Selfish Waltz",
            "Enough"
        ]
    },
    ep20: {
        nome: "GOLDEN HOUR : Part.3",
        data: "June 13, 2025",
        tipo: "Mini Album",
        playlist: "https://www.youtube.com/watch?v=H4H99b1CjPU&list=OLAK5uy_k2JndmYMylSq39xPRLdYegPwpKO-HbxP4",
        musicas: [
            "Lemon Drop",
            "Masterpiece",
            "Now this house ain’t a home",
            "Castle",
            "Bridge : The Edge of Reality"
        ]
    },
    ep21: {
        nome: "GOLDEN HOUR : Part.3 ‘In Your Fantasy Edition’",
        data: "July 11, 2025",
        tipo: "Mini Album Repackage",
        playlist: "https://www.youtube.com/watch?v=H4H99b1CjPU&list=OLAK5uy_nYGbryQ4Lby59Agj3qZ8f06loeUQlfHqA",
        musicas: [
            "Lemon Drop",
            "Masterpiece",
            "Now this house ain’t a home",
            "Castle",
            "Bridge : The Edge of Reality",
            "In Your Fantasy",
            "NO1",
            "Skin",
            "Slide to me",
            "Legacy",
            "Creep",
            "ROAR",
            "Sagittarius",
            "To be your light",
            "In Your Fantasy (Korean ver.)"
        ]
    },
    ep22: {
        nome: "Ashes to Light",
        data: "September 17, 2025",
        tipo: "Japanese Full Album",
        playlist: "https://www.youtube.com/watch?v=cRFWo5vWrcw&list=OLAK5uy_ngg_NZv3Pi4MTDbTArNyWxoAYm_BlQn9Q",
        musicas: [
            "Ash",
            "12 Midnight",
            "Tippy Toes",
            "FACE",
            "Crescendo",
            "NOT OKAY",
            "Days",
            "Birthday",
            "Forevermore"
        ]
    },
    ep23: {
        nome: "GOLDEN HOUR : Part.4",
        data: "February 6, 2026",
        tipo: "Mini Album",
        playlist: "https://www.youtube.com/watch?v=qDpEcO1hlZE&list=OLAK5uy_nDw2GlTZdnxVUJdK-J9HmZf4ZytbduDZs",
        musicas: [
            "Ghost",
            "Adrenaline",
            "NASA",
            "On The Road",
            "Choose"
        ]
    },
}