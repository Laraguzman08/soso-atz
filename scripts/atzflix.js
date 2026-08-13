// console.log("atzflix.js carregou!");

const membros = [
    { id: "hongjoong", nome: "Hongjoong", foto: "../assets/members/hongprofile.jpg" },
    { id: "seonghwa", nome: "Seonghwa", foto: "../assets/members/seongprofile.jpg" },
    { id: "yunho", nome: "Yunho", foto: "../assets/members/yunprofile.jpg" },
    { id: "yeosang", nome: "Yeosang", foto: "../assets/members/yeoprofile.jpg" },
    { id: "san", nome: "San", foto: "../assets/members/sanprofile.jpg" },
    { id: "mingi", nome: "Mingi", foto: "../assets/members/minprofile.jpg" },
    { id: "wooyoung", nome: "Wooyoung", foto: "../assets/members/wooprofile.jpg" },
    { id: "jongho", nome: "Jongho", foto: "../assets/members/jongprofile.jpg" },
];

// ===== DADOS DAS CATEGORIAS (preencha com os IDs reais dos vídeos do YouTube) =====
const categorias = {
    mvs: {
        titulo: "Music Videos",
        videos: [
            { id: "RqJ1rH9M5G0", titulo: "Pirate King" },
            { id: "tLV83ndOwz4", titulo: "Treasure" },
            { id: "nKU4OVH18mE", titulo: "Say My Name" },
            { id: "FIInyEWWW-s", titulo: "WAVE" },
            { id: "i_HzsHss94E", titulo: "ILLUSION" },
            { id: "Z_BhMhZpAug", titulo: "WONDERLAND" },
            { id: "yW7wZX3DUaY", titulo: "Answer" },
            { id: "2NArH91kHoQ", titulo: "INCEPTION" },
            { id: "K7LY9Ta0eiY", titulo: "THANXX" },
            { id: "nlnMDttgTbk", titulo: "Deja Vu" },
            { id: "WJgTnDAmJHc", titulo: "Eternal Sunshine" },
            { id: "80WvAnsHOdM", titulo: "Turbulance" },
            { id: "2HcVZm_4qAI", titulo: "Guerrilla" },
            { id: "fNJMOR6x-4s", titulo: "Paradigm" },
            { id: "SszP3hlQ55Y", titulo: "HALAZIA" },
            { id: "U0G5OA6ZH5w", titulo: "BOUNCY (K-HOT CHILLI PEPPERS" },
            { id: "9t57C7NcjWo", titulo: "Crazy Form" },
            { id: "oc_2sjQXa0Q", titulo: "NOT OKAY" },
            { id: "VGnOpZhsPk4", titulo: "WORK" },
            { id: "H5AtTIXTbGg", titulo: "Birthday" },
            { id: "5OflOlcHLb8", titulo: "Ice On My Teeth" },
            { id: "H4H99b1CjPU", titulo: "Lemon Drop" },
            { id: "JOF2ZTqvzwY", titulo: "In Your Fantasy" },
            { id: "cRFWo5vWrcw", titulo: "Ash" },
            { id: "vqkfEUqjl6Y", titulo: "Adrenaline" },
            { id: "-q_S27LbNKU", titulo: "BAD" },

        ]
    },
    dance: {
        titulo: "Dance Practices",
        videos: [
            { id: "jJVoTEt2mC4", titulo: "Treasure" },
            { id: "y2WltvTzQc0", titulo: "Pirate King" },
            { id: "hWpeQJc35Rk", titulo: "Say My Name" },
            { id: "wWhCCXmOl3g", titulo: "HALA HALA" },
            { id: "N8ycGT0zyfM", titulo: "WAVE" },
            { id: "A4WckOkyrj4", titulo: "2019 MAMA" },
            { id: "hmWVbmeA3gs", titulo: "WONDERLAND" },
            { id: "gXrmoI8xy28", titulo: "Answer" },
            { id: "QccLehD5uCA", titulo: "INCEPTION" },
            { id: "ADrASHFOFNw", titulo: "Deja Vu" },
            { id: "9h9_Db1f7go", titulo: "Guerrilla" },
            { id: "hrE936lqiEc", titulo: "KBS 2022" },
            { id: "oVjE78LLFiY", titulo: "MBC 2022" },
            { id: "smLc012VUts", titulo: "BOUNCY (K-HOT CHILLI PEPPERS" },
            { id: "9NJU0WWFaz0", titulo: "Crazy Form" },
            { id: "sooMHseSOwo", titulo: "WORK" },
            { id: "a9StG3aAHew", titulo: "Ice On My Teeth" },
            { id: "7ok9lttUj5Y", titulo: "MMA 2024" },
            { id: "MCKFdxYYRps", titulo: "Lemon Drop" },
            { id: "v6sNecIy7dA", titulo: "Blind" },
            { id: "WwxpFQy3BRw", titulo: "Adrenaline" },
            { id: "6aeC1xoMtpw", titulo: "Adrenaline (SAN ver.)" },
            { id: "ke0UrNoe7-k", titulo: "BAD" },
        ]
    },
    wanteez: {
        titulo: "WANTEEZ",
        videos: [
            { id: "uoIRlXMsm1c", titulo: "Teaser" },
            { id: "S9herlq6QjI", titulo: "EP.1" },
            { id: "H0RfZE3aYYw", titulo: "EP.2" },
            { id: "OvTeZycFrBE", titulo: "EP.3" },
            { id: "yuVu7FgSG_o", titulo: "EP.4" },
            { id: "H49TOyBUWZw", titulo: "EP.5" },
            { id: "MCVl5AEAzFo", titulo: "EP.6" },
            { id: "PIkk0iDOPW4", titulo: "EP.7" },
            { id: "RM_Q1G4-uhQ", titulo: "EP.8" },
            { id: "zPxeBdsykmU", titulo: "EP.9" },
            { id: "EEdNjyaMMRg", titulo: "EP.10" },
            { id: "BqHOa4ueqXs", titulo: "EP.11" },
            { id: "CM9ZWD15QUk", titulo: "EP.12" },
            { id: "qpaIw34Rze4", titulo: "EP.13" },
            { id: "xq-b4HETFt8", titulo: "EP.14" },
            { id: "igsguS_Lbc8", titulo: "EP.15" },
            { id: "hH9zfgUipKs", titulo: "EP.16" },
            { id: "X-ZYN82jzbI", titulo: "EP.17" },
            { id: "2e3c6rWJ8Uo", titulo: "EP.18" },
            { id: "6syyndFfdO4", titulo: "EP.19" },
            { id: "42G5Y_i4q4Q", titulo: "EP.20" },
            { id: "dwfjP1vy0no", titulo: "EP.21" },
            { id: "P6FG-BHvBCM", titulo: "EP.22" },
            { id: "KrSJ3zLSlso", titulo: "EP.23" },
            { id: "VAw2JAX_qAc", titulo: "EP.24" },
            { id: "CC08gglVd7E", titulo: "EP.25" },
            { id: "nNwQytRuQFk", titulo: "EP.26" },
            { id: "HcWnNbpJLtQ", titulo: "EP.27" },
            { id: "Z3VMh5TzwWU", titulo: "EP.28" },
            { id: "VO-QLEJEqu4", titulo: "EP.29" },
            { id: "uALSYaitUcc", titulo: "EP.30" },
        ]
    },
    funny: {
        titulo: "Funny",
        videos: [
            { id: "x2AqaC0onhQ", titulo: "ATEEZ CRACK BR" },
            { id: "Obk6PB1etQY", titulo: "Funny moments" },
            { id: "FmpEY4h95H8", titulo: "Cure for depression" },
            { id: "FfF3glF0FSY", titulo: "ATEEZ CORE" },
            { id: "NsmLTNMAj2Q", titulo: "Chaotic moments" },
            { id: "2cE8iYoo6X4", titulo: "ATEEZ moments" },
        ]
    }
};

let perfilAtual = null;
function tocarSomIntro() {
    const som = new Audio('../assets/atzflix-intro.mp3');
    som.play().catch(() => {});
}

// ===== INTRO =====
window.addEventListener('DOMContentLoaded', () => {
    tocarSomIntro();
    setTimeout(irParaPerfis, 2800);
});

function irParaPerfis() {
    const intro = document.getElementById('intro-view');
    intro.style.opacity = '0';
    setTimeout(() => {
        intro.style.display = 'none';
        mostrarPerfis();
    }, 600);
}

// ===== TELA DE PERFIS =====
function mostrarPerfis() {
    document.getElementById('catalogo-view').style.display = 'none';

    const grid = document.getElementById('perfisGrid');
    grid.innerHTML = membros.map(m => `
        <div class="perfil-card" onclick="selecionarPerfil('${m.id}')">
            <img src="${m.foto}" alt="${m.nome}" class="perfil-foto">
            <p>${m.nome}</p>
        </div>
    `).join('');

    const perfisView = document.getElementById('perfis-view');
    perfisView.style.display = 'flex';
    perfisView.style.opacity = '0';
    void perfisView.offsetWidth; // força o navegador a notar a mudança antes de animar
    perfisView.style.opacity = '1';
}

function selecionarPerfil(id) {
    perfilAtual = membros.find(m => m.id === id);
    document.getElementById('perfilAtualFoto').src = perfilAtual.foto;

    const perfisView = document.getElementById('perfis-view');
    perfisView.style.opacity = '0';
    setTimeout(() => {
        perfisView.style.display = 'none';
        mostrarCatalogo();
    }, 600);
}

function voltarPerfis() {
    document.getElementById('catalogo-view').style.display = 'none';
    mostrarPerfis();
}

// ===== TELA DE CATÁLOGO =====
function mostrarCatalogo() {
    const container = document.getElementById('categoriasContainer');

    container.innerHTML = Object.values(categorias).map(cat => `
        <div class="categoria-fileira">
            <h3 class="categoria-titulo">${cat.titulo}</h3>
            <div class="categoria-scroll">
                ${cat.videos.map(v => `
                    <div class="video-card" onclick="abrirVideo('${v.id}', '${v.titulo.replace(/'/g, "\\'")}')">
                        <img src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" alt="${v.titulo}">
                        <p>${v.titulo}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    const catalogoView = document.getElementById('catalogo-view');
    catalogoView.style.display = 'block';
    catalogoView.style.opacity = '0';
    void catalogoView.offsetWidth;
    catalogoView.style.opacity = '1';
}

// ===== MODAL DE VÍDEO =====
function abrirVideo(videoId, titulo) {
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.id = 'videoModal';
    modal.innerHTML = `
        <div class="video-modal-conteudo">
            <button class="video-modal-fechar" onclick="fecharVideo()">✕</button>
            <h3>${titulo}</h3>
            <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
    `;
    document.body.appendChild(modal);
}

function fecharVideo() {
    const modal = document.getElementById('videoModal');
    if (modal) modal.remove();
}