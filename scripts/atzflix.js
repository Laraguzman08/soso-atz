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
            { id: "COLOQUE_O_ID_AQUI", titulo: "Pirate King" },
            { id: "COLOQUE_O_ID_AQUI", titulo: "Say My Name" },
            // adicione mais vídeos aqui
        ]
    },
    performances: {
        titulo: "Performances",
        videos: [
            { id: "COLOQUE_O_ID_AQUI", titulo: "Performance 1" },
            // adicione mais vídeos aqui
        ]
    },
    entrevistas: {
        titulo: "Entrevistas",
        videos: [
            { id: "COLOQUE_O_ID_AQUI", titulo: "Entrevista 1" },
            // adicione mais vídeos aqui
        ]
    },
    bastidores: {
        titulo: "Bastidores",
        videos: [
            { id: "COLOQUE_O_ID_AQUI", titulo: "Behind the Scenes 1" },
            // adicione mais vídeos aqui
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