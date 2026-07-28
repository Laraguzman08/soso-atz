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
                { tempo: 190, coreano: "We can go", romanizacao: "We can go" },
                { tempo: 192, coreano: "...", romanizacao: "..." }
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
        faixaPrincipal: {
            titulo: "Say My Name",
            instrumental: "../assets/songs/ep2-instr.mp3",
            letra: [
                { tempo: 0, coreano: "...", romanizacao: "..." },
                { tempo: 6, coreano: "Come in to you", romanizacao: "Come in to you" },
                { tempo: 8, coreano: "I won’t give up", romanizacao: "I won’t give up" },
                { tempo: 10, coreano: "Everybody say yeah", romanizacao: "Everybody say yeah" },
                { tempo: 11, coreano: "ATEEZ, present", romanizacao: "ATEEZ, present" },
                { tempo: 13, coreano: "조금 더 크게 say my name", romanizacao: "jogeum deo keuge say my name" },
                { tempo: 17, coreano: "그게 잠든 날 눈 뜨게 해", romanizacao: "geuge jamdeun nal nun tteuge hae" },
                { tempo: 20, coreano: "한 번 더 크게 say my name", romanizacao: "han beon deo keuge say my name" },
                { tempo: 22, coreano: "네가 내 이름을 불러주면", romanizacao: "nega nae ireumeul bulleojumyeon" },
                { tempo: 23, coreano: "어느새 먼 곳을 향해 더", romanizacao: "eoneusae meon goseul hyanghae deo" },
                { tempo: 24, coreano: "Fly high", romanizacao: "Fly high" },
                { tempo: 26, coreano: "막아서지 마라 give it up", romanizacao: "magaseoji mara give it up" },
                { tempo: 28, coreano: "지난 나는 이제 burning up now", romanizacao: "jinan naneun ije burning up now" },
                { tempo: 33, coreano: "We don’t want no trouble", romanizacao: "We don’t want no trouble" },
                { tempo: 34, coreano: "Just movin' forward", romanizacao: "Just movin' forward" },
                { tempo: 35, coreano: "새까만 달력 그 안에 불꽃을 향해서", romanizacao: "saekkaman dallyeok geu ane bulkkocheul hyanghaeseo" },
                { tempo: 37, coreano: "또다시 달려", romanizacao: "ttodasi dallyeo" },
                { tempo: 39, coreano: "모두 여기로 높은 곳으로", romanizacao: "modu yeogiro nopeun goseuro" },
                { tempo: 41, coreano: "함께라면", romanizacao: "hamkkeramyeon" },
                { tempo: 43, coreano: "No down, down, down", romanizacao: "No down, down, down" },
                { tempo: 45, coreano: "손을 들어라 소리 질러라", romanizacao: "soneul deureora sori jilleora" },
                { tempo: 47, coreano: "터질듯한 시작을 위해", romanizacao: "teojildeutan sijageul wihae" },
                { tempo: 51, coreano: "저기 저 달빛이 부를 때", romanizacao: "jeogi jeo dalbichi bureul ttae" },
                { tempo: 54, coreano: "세상을 덮칠 듯 달구네", romanizacao: "sesang-eul deopchil deut dalgune" },
                { tempo: 58, coreano: "우리 손을 잡고 날아가", romanizacao: "uri soneul japgo naraga" },
                { tempo: 60, coreano: "Yes, sir, 부름에 응답", romanizacao: "Yes, sir, bureume eungdap" },
                { tempo: 63, coreano: "Say my name", romanizacao: "Say my name" },
                { tempo: 64, coreano: "Say my name", romanizacao: "Say my name" },
                { tempo: 65, coreano: "Say my name", romanizacao: "Say my name" },
                { tempo: 67, coreano: "Say my name", romanizacao: "Say my name" },
                { tempo: 68, coreano: "Say my name", romanizacao: "Say my name" },
                { tempo: 69, coreano: "Say my name", romanizacao: "Say my name" },
                { tempo: 70, coreano: "나를 불러줘 나를 불러줘", romanizacao: "nareul bulleojwo nareul bulleojwo" },
                { tempo: 72, coreano: "내 손을 잡아봐 내 눈을 바라봐", romanizacao: "nae soneul jababwa nae nuneul barabwa" },
                { tempo: 75, coreano: "내 이름은, 이름은 A to the Z", romanizacao: "nae ireumeun, ireumeun A to the Z" },
                { tempo: 79, coreano: "내 이름은, 이름은 A to the Z", romanizacao: "nae ireumeun, ireumeun A to the Z" },
                { tempo: 82, coreano: "나를 불러줘, 나를 불러줘", romanizacao: "nareul bulleojwo, nareul bulleojwo" },
                { tempo: 84, coreano: "내 손을 잡아봐 내 눈을 바라봐", romanizacao: "nae soneul jababwa nae nuneul barabwa" },
                { tempo: 87, coreano: "Fix on", romanizacao: "Fix on" },
                { tempo: 88, coreano: "길을 터 이 길의 시작은 창대한 법", romanizacao: "gireul teo i girui sijageun changdaehan beop" },
                { tempo: 91, coreano: "위상과 비상은 한 끗 차이로", romanizacao: "wisanggwa bisang-eun han kkeut chairo" },
                { tempo: 93, coreano: "꿈이 완전 갈리는 것", romanizacao: "kkumi wanjeon gallineun geot" },
                { tempo: 95, coreano: "더 이상을 better than better", romanizacao: "deo isang-eul better than better" },
                { tempo: 96, coreano: "고갤 들어 getter go getter", romanizacao: "gogael deureo getter go getter" },
                { tempo: 98, coreano: "또한 금은보화 한배를 타", romanizacao: "ttohan geumeunbohwa hanbaereul ta" },
                { tempo: 99, coreano: "걸어와 내게로", romanizacao: "georeowa naegero" },
                { tempo: 101, coreano: "부르고 부르고 불러줘 날", romanizacao: "bureugo bureugo bulleojwo nal" },
                { tempo: 102, coreano: "내 이름은 이름은 검색창에 나와", romanizacao: "nae ireumeun ireumeun geomsaekchang-e nawa" },
                { tempo: 104, coreano: "그렇게 바라던 네임텍 달았고", romanizacao: "geureoke baradeon neimtek daratgo" },
                { tempo: 105, coreano: "곁에 가득 친구들도 모아", romanizacao: "gyeote gadeuk chin-gudeuldo moa" },
                { tempo: 107, coreano: "에워싸 두르고 지켜봐", romanizacao: "ewossa dureugo jikyeobwa" },
                { tempo: 109, coreano: "이름 딱 네 글자 여기다", romanizacao: "ireum ttak ne geulja yeogida" },
                { tempo: 110, coreano: "티 나게 남겨놔", romanizacao: "ti nage namgyeonwa" },
                { tempo: 112, coreano: "Zoom in here 'cause I'm the captain", romanizacao: "Zoom in here 'cause I'm the captain" },
                { tempo: 114, coreano: "모두 여기로 높은 곳으로", romanizacao: "modu yeogiro nopeun goseuro" },
                { tempo: 117, coreano: "함께라면", romanizacao: "hamkkeramyeon" },
                { tempo: 118, coreano: "No down, down, down", romanizacao: "No down, down, down" },
                { tempo: 120, coreano: "손을 들어라 소리 질러라", romanizacao: "soneul deureora sori jilleora" },
                { tempo: 123, coreano: "터질 듯한 시작을 위해", romanizacao: "teojil deutan sijageul wihae" },
                { tempo: 126, coreano: "저기 저 달빛이 부를 때", romanizacao: "jeogi jeo dalbichi bureul ttae" },
                { tempo: 129, coreano: "세상을 덮칠 듯 달구네", romanizacao: "sesang-eul deopchil deut dalgune" },
                { tempo: 133, coreano: "우리 손을 잡고 날아가", romanizacao: "uri soneul japgo naraga" },
                { tempo: 135, coreano: "Yes, sir, 부름에 응답", romanizacao: "Yes, sir, bureume eungdap" },
                { tempo: 139, coreano: "Say my name", romanizacao: "Say my name" },
                { tempo: 140, coreano: "Say my name", romanizacao: "Say my name" },
                { tempo: 141, coreano: "Say my name", romanizacao: "Say my name" },
                { tempo: 142, coreano: "Say my name", romanizacao: "Say my name" },
                { tempo: 143, coreano: "Say my name", romanizacao: "Say my name" },
                { tempo: 144, coreano: "Say my name", romanizacao: "Say my name" },
                { tempo: 145, coreano: "나를 불러줘 나를 불러줘", romanizacao: "nareul bulleojwo nareul bulleojwo" },
                { tempo: 147, coreano: "내 손을 잡아봐 내 눈을 바라봐", romanizacao: "nae soneul jababwa nae nuneul barabwa" },
                { tempo: 151, coreano: "내 이름은, 이름은 A to the Z", romanizacao: "nae ireumeun, ireumeun A to the Z" },
                { tempo: 155, coreano: "내 이름은, 이름은 A to the Z", romanizacao: "nae ireumeun, ireumeun A to the Z" },
                { tempo: 158, coreano: "나를 불러줘 나를 불러줘", romanizacao: "nareul bulleojwo nareul bulleojwo" },
                { tempo: 160, coreano: "내 손을 잡아봐 내 눈을 바라봐", romanizacao: "nae soneul jababwa nae nuneul barabwa" },
                { tempo: 164, coreano: "가슴이 뛰는 건 벅차오르는 건", romanizacao: "gaseumi ttwineun geon beokchaoreuneun geon" },
                { tempo: 168, coreano: "아마도 운명일 거야", romanizacao: "amado unmyeong-il geoya" },
                { tempo: 171, coreano: "Please don’t let me go", romanizacao: "Please don’t let me go" },
                { tempo: 173, coreano: "비로소 정해진", romanizacao: "biroso jeonghaejin" },
                { tempo: 175, coreano: "하나의 my way", romanizacao: "hanaui my way" },
                { tempo: 178, coreano: "Couldn't nobody else", romanizacao: "Couldn't nobody else" },
                { tempo: 182, coreano: "Couldn't nobody else", romanizacao: "Couldn't nobody else" },
                { tempo: 183, coreano: "Oh, I believe in me", romanizacao: "Oh, I believe in me" },
                { tempo: 187, coreano: "나를 불러준 순간", romanizacao: "nareul bulleojun sun-gan" },
                { tempo: 189, coreano: "Say my name", romanizacao: "Say my name" },
                { tempo: 190, coreano: "Say my name", romanizacao: "Say my name" },
                { tempo: 191, coreano: "Say my name", romanizacao: "Say my name" },
                { tempo: 192, coreano: "Say my name", romanizacao: "Say my name" },
                { tempo: 193, coreano: "Say my name", romanizacao: "Say my name" },
                { tempo: 194, coreano: "Say my name", romanizacao: "Say my name" },
                { tempo: 195, coreano: "Say my name", romanizacao: "Say my name" },
                { tempo: 196, coreano: "Say my name", romanizacao: "Say my name" },
                { tempo: 197, coreano: "Say my name", romanizacao: "Say my name" },
                { tempo: 198, coreano: "나를 불러줘 함께 갈 수 있도록", romanizacao: "nareul bulleojwo hamkke gal su itdorok" },
                { tempo: 201, coreano: "내 손을 잡아봐 내 눈을 바라봐", romanizacao: "nae soneul jababwa nae nuneul barabwa" },
                { tempo: 204, coreano: "내 이름은, 이름은 A to the Z", romanizacao: "nae ireumeun, ireumeun A to the Z" },
                { tempo: 208, coreano: "내 이름은, 이름은 A to the Z", romanizacao: "nae ireumeun, ireumeun A to the Z" },
                { tempo: 211, coreano: "너에게만", romanizacao: "neoegeman" },
                { tempo: 212, coreano: "I can give you everything", romanizacao: "I can give you everything" },
                { tempo: 215, coreano: "이제 새로 태어난 my mind", romanizacao: "ije saero tae-eonan my mind" },
                { tempo: 217, coreano: "...", romanizacao: "..." }
            ]
        }
    },
    ep3: {
        nome: "TREASURE EP.3: One To All",
        data: "June 10, 2019",
        tipo: "Mini Album",
        playlist: "1w1dfDuyqz63mHJv1A8Xmk",
        fundo: "../assets/backgrounds/ep3era.jpg",
        descricao: "ATEEZ’s third mini album represents the moment when the group enters a tropical illusion before confronting the reality of their journey. Serving as a major turning point in the Treasure storyline, the members must choose between remaining in a false paradise or facing the challenges of the real world together.",
        faixaPrincipal: {
            titulo: "ILLUSION",
            instrumental: "../assets/songs/ep3-instr.mp3",
            letra: [
                { tempo: 0, coreano: "...", romanizacao: "..." },
                { tempo: 1, coreano: "푸른빛 태양", romanizacao: "pureunbit taeyang" },
                { tempo: 2, coreano: "보라색 별", romanizacao: "borasaek byeol" },
                { tempo: 4, coreano: "꽃이 춤춰", romanizacao: "kkochi chumchwo" },
                { tempo: 6, coreano: "노래는 덤", romanizacao: "noraeneun deom" },
                { tempo: 7, coreano: "어디선가", romanizacao: "eodiseon-ga" },
                { tempo: 9, coreano: "말을 거네", romanizacao: "mareul geone" },
                { tempo: 11, coreano: "We party all day", romanizacao: "We party all day" },
                { tempo: 13, coreano: "We party all day", romanizacao: "We party all day" },
                { tempo: 15, coreano: "거짓말 같아", romanizacao: "geojinmal gata" },
                { tempo: 16, coreano: "거짓말 같은 장관", romanizacao: "geojinmal gateun janggwan" },
                { tempo: 18, coreano: "눈 감았다 떴다", romanizacao: "nun gamatda tteotda" },
                { tempo: 19, coreano: "몇 번을 감았다 떴다", romanizacao: "myeot beoneul gamatda tteotda" },
                { tempo: 21, coreano: "지금 난 마치 콜럼버스 이 기분 맞지?", romanizacao: "jigeum nan machi kolleombeoseu i gibun matji?" },
                { tempo: 25, coreano: "반말하는 개구리와 거북이", romanizacao: "banmalhaneun gaeguriwa geobugi" },
                { tempo: 26, coreano: "빨간색 개나리 해바라기", romanizacao: "ppalgansaek gaenari haebaragi" },
                { tempo: 28, coreano: "저건 뭐야?", romanizacao: "jeogeon mwoya?" },
                { tempo: 29, coreano: "Oh, oh, oh", romanizacao: "Oh, oh, oh" },
                { tempo: 31, coreano: "꿈을 꾸는듯해", romanizacao: "kkumeul kkuneundeutae" },
                { tempo: 33, coreano: "제발 don't wake me up, oh, oh", romanizacao: "jebal don't wake me up, oh, oh" },
                { tempo: 35, coreano: "Oh, oh, oh", romanizacao: "Oh, oh, oh" },
                { tempo: 38, coreano: "하루 이틀 사흘 나흘", romanizacao: "haru iteul saheul naheul" },
                { tempo: 40, coreano: "오늘이 며칠인지 몰라", romanizacao: "oneuri myeochirinji molla" },
                { tempo: 43, coreano: "나는 지금 어디 너는 누구", romanizacao: "naneun jigeum eodi neoneun nugu" },
                { tempo: 47, coreano: "처음 느껴 보는 이런 기분", romanizacao: "cheoeum neukkyeo boneun ireon gibun" },
                { tempo: 50, coreano: "지금 여긴 많이 paradise", romanizacao: "jigeum yeogin mani paradise" },
                { tempo: 52, coreano: "모르겠고 일단 party all night long", romanizacao: "moreugetgo ildan party all night long" },
                { tempo: 55, coreano: "푸른빛 태양", romanizacao: "pureunbit taeyang" },
                { tempo: 57, coreano: "보라색 별 (let me free)", romanizacao: "borasaek byeol (let me free)" },
                { tempo: 59, coreano: "꽃이 춤춰", romanizacao: "kkochi chumchwo" },
                { tempo: 60, coreano: "노래는 덤", romanizacao: "noraeneun deom" },
                { tempo: 62, coreano: "또 어디선가", romanizacao: "tto eodiseon-ga" },
                { tempo: 64, coreano: "말을 거네 (let me free)", romanizacao: "mareul geone (let me free)" },
                { tempo: 66, coreano: "밤새도록 어서 party all night long", romanizacao: "bamsaedorok eoseo party all night long" },
                { tempo: 70, coreano: "Oh, ah, 날 따라올래 너", romanizacao: "Oh, ah, nal ttaraollae neo" },
                { tempo: 73, coreano: "Oh, ah, 날 따라올래 you", romanizacao: "Oh, ah, nal ttaraollae you" },
                { tempo: 77, coreano: "Oh, ah, 해 뜰 때까지 right", romanizacao: "Oh, ah, hae tteul ttaekkaji right" },
                { tempo: 79, coreano: "밤새도록 어서 party all night long", romanizacao: "bamsaedorok eoseo party all night long" },
                { tempo: 83, coreano: "천장엔 별이 보여 어서 올라타", romanizacao: "cheonjang-en byeori boyeo eoseo ollata" },
                { tempo: 85, coreano: "그 위에 빛을 따라 돌고 돌아 난", romanizacao: "geu wie bicheul ttara dolgo dora nan" },
                { tempo: 87, coreano: "아 뜨거워 난 후끈 달았네", romanizacao: "a tteugeowo nan hukkeun daranne" },
                { tempo: 89, coreano: "보랏빛 paradigm 난 따라 들어왔네", romanizacao: "boratbit paradigm nan ttara deureowanne" },
                { tempo: 91, coreano: "죽었다 살았다 반복해 계속", romanizacao: "jugeotda saratda banbokae gyesok" },
                { tempo: 92, coreano: "누구도 억지로 맞춰있진 않지", romanizacao: "nugudo eokjiro matchwoitjin anji" },
                { tempo: 94, coreano: "푸른빛 태양 아래서", romanizacao: "pureunbit taeyang araeseo" },
                { tempo: 95, coreano: "눈부셔 눈부셔 눈부셔, oh, 부셔", romanizacao: "nunbusyeo nunbusyeo nunbusyeo, oh, busyeo" },
                { tempo: 97, coreano: "Oh, oh, oh", romanizacao: "Oh, oh, oh" },
                { tempo: 100, coreano: "꿈을 꾸는듯해", romanizacao: "kkumeul kkuneundeutae" },
                { tempo: 102, coreano: "제발 don't wake me up, oh, oh", romanizacao: "jebal don't wake me up, oh, oh" },
                { tempo: 104, coreano: "Oh, oh, oh", romanizacao: "Oh, oh, oh" },
                { tempo: 107, coreano: "하루 이틀 사흘 나흘", romanizacao: "haru iteul saheul naheul" },
                { tempo: 108, coreano: "오늘이 며칠인지 몰라", romanizacao: "oneuri myeochirinji molla" },
                { tempo: 111, coreano: "나는 지금 어디 너는 누구", romanizacao: "naneun jigeum eodi neoneun nugu" },
                { tempo: 115, coreano: "처음 느껴 보는 이런 기분", romanizacao: "cheoeum neukkyeo boneun ireon gibun" },
                { tempo: 118, coreano: "지금 여긴 많이 paradise", romanizacao: "jigeum yeogin mani paradise" },
                { tempo: 120, coreano: "모르겠고 일단 party all night long", romanizacao: "moreugetgo ildan party all night long" },
                { tempo: 124, coreano: "푸른빛 태양", romanizacao: "pureunbit taeyang" },
                { tempo: 125, coreano: "보라색 별 (let me free)", romanizacao: "borasaek byeol (let me free)" },
                { tempo: 128, coreano: "꽃이 춤춰", romanizacao: "kkochi chumchwo" },
                { tempo: 129, coreano: "노래는 덤", romanizacao: "noraeneun deom" },
                { tempo: 131, coreano: "또 어디선가", romanizacao: "tto eodiseon-ga" },
                { tempo: 132, coreano: "말을 거네 (let me free)", romanizacao: "mareul geone (let me free)" },
                { tempo: 134, coreano: "밤새도록 어서 party all night long", romanizacao: "bamsaedorok eoseo party all night long" },
                { tempo: 139, coreano: "Oh, ah, 날 따라올래 너", romanizacao: "Oh, ah, nal ttaraollae neo" },
                { tempo: 142, coreano: "Oh, ah, 날 따라올래 you", romanizacao: "Oh, ah, nal ttaraollae you" },
                { tempo: 145, coreano: "Oh, ah, 해 뜰 때까지 right", romanizacao: "Oh, ah, hae tteul ttaekkaji right" },
                { tempo: 148, coreano: "밤새도록 어서 party all night long", romanizacao: "bamsaedorok eoseo party all night long" },
                { tempo: 153, coreano: "분홍빛 모래알에", romanizacao: "bunhongbit morae-are" },
                { tempo: 156, coreano: "무지갯빛 바다 위에", romanizacao: "mujigaetbit bada wie" },
                { tempo: 159, coreano: "그려볼까 더 환상적인 꿈", romanizacao: "geuryeobolkka deo hwansangjeogin kkum" },
                { tempo: 162, coreano: "지금 여긴 뭐든지 아름다워, oh", romanizacao: "jigeum yeogin mwodeunji areumdawo, oh" },
                { tempo: 167, coreano: "바다 위를 걸어볼까", romanizacao: "bada wireul georeobolkka" },
                { tempo: 171, coreano: "무지갯빛 바다 위에", romanizacao: "mujigaetbit bada wie" },
                { tempo: 174, coreano: "우리 손을 잡고", romanizacao: "uri soneul japgo" },
                { tempo: 175, coreano: "미친 듯이 춤을 추자 night and day", romanizacao: "michin deusi chumeul chuja night and day" },
                { tempo: 178, coreano: "푸른빛 태양", romanizacao: "pureunbit taeyang" },
                { tempo: 180, coreano: "보라색 별 (let me free)", romanizacao: "borasaek byeol (let me free)" },
                { tempo: 182, coreano: "꽃이 춤춰", romanizacao: "kkochi chumchwo" },
                { tempo: 184, coreano: "노래는 덤", romanizacao: "noraeneun deom" },
                { tempo: 185, coreano: "또 어디선가", romanizacao: "tto eodiseon-ga" },
                { tempo: 187, coreano: "말을 거네 (let me free)", romanizacao: "mareul geone (let me free)" },
                { tempo: 190, coreano: "밤새도록 어서 party all night long", romanizacao: "bamsaedorok eoseo party all night long" },
                { tempo: 193, coreano: "Oh, ah, 날 따라올래 너", romanizacao: "Oh, ah, nal ttaraollae neo" },
                { tempo: 197, coreano: "Oh, ah, 날 따라올래 you", romanizacao: "Oh, ah, nal ttaraollae you" },
                { tempo: 201, coreano: "Oh, ah, 해 뜰 때까지 right", romanizacao: "Oh, ah, hae tteul ttaekkaji right" },
                { tempo: 203, coreano: "밤새도록 어서 party all night long", romanizacao: "bamsaedorok eoseo party all night long" },
                { tempo: 207, coreano: "...", romanizacao: "..." },
            ]
        }
    },
    ep4: {
        nome: "TREASURE EP.FIN: All To Action",
        data: "October 8, 2019",
        tipo: "Full-Length Album",
        playlist: "5AVSEEmCz4qwDiArvX6ZOx",
        descricao: "ATEEZ’s first full-length studio album serves as the climax and official conclusion of the main Treasure saga. Following their escape from the paradise-like illusion, the members unite to challenge an oppressive system, inspire change, and lead the final revolution. The title All to Action reflects their determination to move forward together.",
        fundo: "../assets/backgrounds/ep4era.jpg",
        faixaPrincipal: {
            titulo: "WONDERLAND",
            instrumental: "../assets/songs/ep4-instr.mp3",
            letra: [
                { tempo: 0, coreano: "...", romanizacao: "..." },
                { tempo: 8, coreano: "All eyes on me now", romanizacao: "All eyes on me now" },
                { tempo: 10, coreano: "If you still doubt mine", romanizacao: "If you still doubt mine" },
                { tempo: 12, coreano: "It’s too pointless", romanizacao: "It’s too pointless" },
                { tempo: 13, coreano: "We’re still young and wild", romanizacao: "We’re still young and wild" },
                { tempo: 14, coreano: "We gonna find new world to be mine", romanizacao: "We gonna find new world to be mine" },
                { tempo: 16, coreano: "지도가 부르는 곳 그 섬은 곧", romanizacao: "jidoga bureuneun got geu seomeun got" },
                { tempo: 18, coreano: "만인의 꿈이자 겁", romanizacao: "maninui kkumija geop" },
                { tempo: 20, coreano: "끝에 꿈꾸는 시작 날개를 펴고", romanizacao: "kkeute kkumkkuneun sijak nalgaereul pyeogo" },
                { tempo: 21, coreano: "영원히 철없게 like Peter", romanizacao: "yeong-wonhi cheoreopge like Peter" },
                { tempo: 24, coreano: "터질듯한", romanizacao: "teojildeutan" },
                { tempo: 25, coreano: "심장을 pump it up", romanizacao: "simjang-eul pump it up" },
                { tempo: 28, coreano: "풀린듯한", romanizacao: "pullindeutan" },
                { tempo: 29, coreano: "주먹을 꽉 쥐어", romanizacao: "jumeogeul kkwak jwieo" },
                { tempo: 31, coreano: "자 열린다 진실의 문, 그 앞에서", romanizacao: "ja yeollinda jinsirui mun, geu apeseo" },
                { tempo: 35, coreano: "부숴버릴 듯이 we on fire", romanizacao: "buswobeoril deusi we on fire" },
                { tempo: 39, coreano: "너는 여기서 멈출 텐가?", romanizacao: "neoneun yeogiseo meomchul ten-ga?" },
                { tempo: 42, coreano: "그토록 원하던 것이 여기에, oh", romanizacao: "geutorok wonhadeon geosi yeogie, oh" },
                { tempo: 46, coreano: "다시 돌아올 수 없어도", romanizacao: "dasi doraol su eopseodo" },
                { tempo: 49, coreano: "Oh, we must going on", romanizacao: "Oh, we must going on" },
                { tempo: 53, coreano: "가자", romanizacao: "gaja" },
                { tempo: 57, coreano: "가자", romanizacao: "gaja" },
                { tempo: 58, coreano: "끝이 기다리는 시작으로", romanizacao: "kkeuchi gidarineun sijageuro" },
                { tempo: 61, coreano: "On my, my way 모두 발을 맞추고", romanizacao: "On my, my way modu bareul matchugo" },
                { tempo: 65, coreano: "On my, my way 하나 둘 하면 뛰어", romanizacao: "On my, my way hana dul hamyeon ttwieo" },
                { tempo: 69, coreano: "On my, my way 없는 길도 만들어", romanizacao: "On my, my way eomneun gildo mandeureo" },
                { tempo: 72, coreano: "어서 가자, 어서 가자", romanizacao: "eoseo gaja, eoseo gaja" },
                { tempo: 74, coreano: "끝이 기다리는 시작으로", romanizacao: "kkeuchi gidarineun sijageuro" },
                { tempo: 79, coreano: "Ready now for next journey", romanizacao: "Ready now for next journey" },
                { tempo: 81, coreano: "숨 참고 달려", romanizacao: "sum chamgo dallyeo" },
                { tempo: 82, coreano: "내가 달려가는 get money", romanizacao: "naega dallyeoganeun get money" },
                { tempo: 84, coreano: "I got a win 더 외쳐 대", romanizacao: "I got a win deo oechyeo dae" },
                { tempo: 85, coreano: "Acre보다 크게 쳐버리는 탬버린", romanizacao: "Acreboda keuge chyeobeorineun taembeorin" },
                { tempo: 87, coreano: "잭 스패로우보다 높이", romanizacao: "jaek seupaerouboda nopi" },
                { tempo: 88, coreano: "가라고 나 가라고 난 흔들림 없이", romanizacao: "garago na garago nan heundeullim eopsi" },
                { tempo: 90, coreano: "때려, bang, bang, 단번에 숨이", romanizacao: "ttaeryeo, bang, bang, danbeone sumi" },
                { tempo: 92, coreano: "마치 down with us, get it going", romanizacao: "machi down with us, get it going" },
                { tempo: 95, coreano: "터져버려도", romanizacao: "teojyeobeoryeodo" },
                { tempo: 97, coreano: "상관없어 난", romanizacao: "sanggwaneopseo nan" },
                { tempo: 98, coreano: "지금 이곳은", romanizacao: "jigeum igoseun" },
                { tempo: 100, coreano: "끝의 시작", romanizacao: "kkeutui sijak" },
                { tempo: 101, coreano: "자 열린다 진실의 문 그 앞에서", romanizacao: "ja yeollinda jinsirui mun geu apeseo" },
                { tempo: 105, coreano: "부숴버릴 듯이 we on fire", romanizacao: "buswobeoril deusi we on fire" },
                { tempo: 109, coreano: "너는 여기서 멈출 텐가?", romanizacao: "neoneun yeogiseo meomchul ten-ga?" },
                { tempo: 112, coreano: "그토록 원하던 것이 눈앞에, oh", romanizacao: "geutorok wonhadeon geosi nunape, oh" },
                { tempo: 117, coreano: "다시 돌아올 수 없어도", romanizacao: "dasi doraol su eopseodo" },
                { tempo: 119, coreano: "Oh, we must going on", romanizacao: "Oh, we must going on" },
                { tempo: 124, coreano: "가자", romanizacao: "gaja" },
                { tempo: 127, coreano: "가자", romanizacao: "gaja" },
                { tempo: 129, coreano: "끝이 기다리는 시작으로", romanizacao: "kkeuchi gidarineun sijageuro" },
                { tempo: 131, coreano: "On my, my way 모두 발을 맞추고", romanizacao: "On my, my way modu bareul matchugo" },
                { tempo: 135, coreano: "On my, my way 하나 둘 하면 뛰어", romanizacao: "On my, my way hana dul hamyeon ttwieo" },
                { tempo: 138, coreano: "On my, my way 없는 길도 만들어", romanizacao: "On my, my way eomneun gildo mandeureo" },
                { tempo: 142, coreano: "어서 가자, 어서 가자", romanizacao: "eoseo gaja, eoseo gaja" },
                { tempo: 144, coreano: "끝이 기다리는 시작으로", romanizacao: "kkeuchi gidarineun sijageuro" },
                { tempo: 150, coreano: "Breaking the wall, oh, oh", romanizacao: "Breaking the wall, oh, oh" },
                { tempo: 157, coreano: "누군가는", romanizacao: "nugun-ganeun" },
                { tempo: 158, coreano: "가야 할 곳", romanizacao: "gaya hal got" },
                { tempo: 160, coreano: "쉽지만은 않더라도", romanizacao: "swipjimaneun anteorado" },
                { tempo: 164, coreano: "그 이유가 우린 맘에 들어", romanizacao: "geu iyuga urin mame deureo" },
                { tempo: 169, coreano: "뛰어, 뛰어", romanizacao: "ttwieo, ttwieo" },
                { tempo: 173, coreano: "뛰어, 뛰어", romanizacao: "ttwieo, ttwieo" },
                { tempo: 176, coreano: "뛰어, 뛰어", romanizacao: "ttwieo, ttwieo" },
                { tempo: 177, coreano: "어서 가자, 어서 가자", romanizacao: "eoseo gaja, eoseo gaja" },
                { tempo: 180, coreano: "끝이 기다리는 시작으로", romanizacao: "kkeuchi gidarineun sijageuro" },
                { tempo: 181, coreano: "On my, my way 모두 발을 맞추고", romanizacao: "On my, my way modu bareul matchugo" },
                { tempo: 185, coreano: "On my, my way 하나 둘 하면 뛰어", romanizacao: "On my, my way hana dul hamyeon ttwieo" },
                { tempo: 188, coreano: "On my, my way 없는 길도 만들어", romanizacao: "On my, my way eomneun gildo mandeureo" },
                { tempo: 192, coreano: "어서 가자, 어서 가자", romanizacao: "eoseo gaja, eoseo gaja" },
                { tempo: 194, coreano: "끝이 기다리는 시작으로", romanizacao: "kkeuchi gidarineun sijageuro" },
                { tempo: 195, coreano: "가자", romanizacao: "gaja" },
                { tempo: 197, coreano: "...", romanizacao: "..." },
            ]
        },
    },
    ep5: {
        nome: "TREASURE EPILOGUE : Action To Answer",
        data: "January 6, 2020",
        tipo: "Mini Album",
        playlist: "1GLADlDkcZk6QjjMZyHstu",
        descricao: "This epilogue serves as the grand finale of ATEEZ's acclaimed Treasure series, bringing the group's debut storyline to a meaningful conclusion. Serving as the closing chapter, the album reveals that the true treasure is not a physical destination, but the members' own identity, independence, and inner light, marking the end of one era and the beginning of another.",
        fundo: "../assets/backgrounds/ep5era.jpg",
        faixaPrincipal: {
            titulo: "ANSWER",
            instrumental: "../assets/songs/ep5-instr.mp3",
            letra: [
                { tempo: 0, coreano: "...", romanizacao: "..." },
                { tempo: 1, coreano: "건배하자 like a thunder", romanizacao: "geonbaehaja like a thunder" },
                { tempo: 5, coreano: "네 모든 걸 채워", romanizacao: "ne modeun geol chaewo" },
                { tempo: 7, coreano: "넘쳐흐를 듯이", romanizacao: "neomchyeoheureul deusi" },
                { tempo: 10, coreano: "모두 잔을 머리 위로", romanizacao: "modu janeul meori wiro" },
                { tempo: 14, coreano: "세상 어디에서든 보일 수 있게", romanizacao: "sesang eodieseodeun boil su itge" },
                { tempo: 18, coreano: "I got the answer", romanizacao: "I got the answer" },
                { tempo: 20, coreano: "손을 펴 시선은 위로 say: Oh", romanizacao: "soneul pyeo siseoneun wiro say: Oh" },
                { tempo: 22, coreano: "잔을 들어 마주 보며 say: Oh", romanizacao: "janeul deureo maju bomyeo say: Oh" },
                { tempo: 25, coreano: "끝은 먼 시작임을 우린 뱉어내", romanizacao: "kkeuteun meon sijagimeul urin baeteonae" },
                { tempo: 27, coreano: "기억해 발끝부터 함께 say my name", romanizacao: "gieokae balkkeutbuteo hamkke say my name" },
                { tempo: 29, coreano: "Burn, burn", romanizacao: "Burn, burn" },
                { tempo: 30, coreano: "타올라야지 더", romanizacao: "taollayaji deo" },
                { tempo: 31, coreano: "계속해 불을 지펴", romanizacao: "gyesokae bureul jipyeo" },
                { tempo: 32, coreano: "매일이 finale show", romanizacao: "maeiri finale show" },
                { tempo: 34, coreano: "내일이 마치 end of the world", romanizacao: "naeiri machi end of the world" },
                { tempo: 35, coreano: "열기를 죽이지 마", romanizacao: "yeolgireul jugiji ma" },
                { tempo: 37, coreano: "Oxygen, fire", romanizacao: "Oxygen, fire" },
                { tempo: 38, coreano: "너와 나면 푸른빛 띠우니깐", romanizacao: "neowa namyeon pureunbit ttiunikkan" },
                { tempo: 41, coreano: "불타는 태양과", romanizacao: "bultaneun taeyanggwa" },
                { tempo: 43, coreano: "덮치던 파도는", romanizacao: "deopchideon padoneun" },
                { tempo: 45, coreano: "우리에겐 별게 아닌걸", romanizacao: "uriegen byeolge anin-geol" },
                { tempo: 49, coreano: "더 들어와 봐 we don't care", romanizacao: "deo deureowa bwa we don't care" },
                { tempo: 52, coreano: "두려운 것도 anymore", romanizacao: "duryeoun geotdo anymore" },
                { tempo: 54, coreano: "누구도 손댈 수 없어", romanizacao: "nugudo sondael su eopseo" },
                { tempo: 58, coreano: "타는 불꽃처럼", romanizacao: "taneun bulkkotcheoreom" },
                { tempo: 60, coreano: "건배하자 like a thunder", romanizacao: "geonbaehaja like a thunder" },
                { tempo: 63, coreano: "네 모든 걸 채워", romanizacao: "ne modeun geol chaewo" },
                { tempo: 66, coreano: "넘쳐흐를 듯이, woo", romanizacao: "neomchyeoheureul deusi, woo" },
                { tempo: 69, coreano: "모두 잔을 머리 위로", romanizacao: "modu janeul meori wiro" },
                { tempo: 73, coreano: "세상 어디에서든 보일 수 있게", romanizacao: "sesang eodieseodeun boil su itge" },
                { tempo: 77, coreano: "One, two, three, let's burn!", romanizacao: "One, two, three, let's burn!" },
                { tempo: 81, coreano: "불러, 불러, 우릴 지금 불러", romanizacao: "bulleo, bulleo, uril jigeum bulleo" },
                { tempo: 87, coreano: "타올라 불꽃처럼", romanizacao: "taolla bulkkotcheoreom" },
                { tempo: 91, coreano: "불러 불러 우릴 지금 불러", romanizacao: "bulleo bulleo uril jigeum bulleo" },
                { tempo: 93, coreano: "세상 어디에서든 보일 수 있게", romanizacao: "sesang eodieseodeun boil su itge" },
                { tempo: 96, coreano: "타올라 불꽃처럼", romanizacao: "taolla bulkkotcheoreom" },
                { tempo: 99, coreano: "아무것도", romanizacao: "amugeotdo" },
                { tempo: 101, coreano: "없는 사막", romanizacao: "eomneun samak" },
                { tempo: 104, coreano: "그곳에서", romanizacao: "geugoseseo" },
                { tempo: 106, coreano: "출발한 우리 시작", romanizacao: "chulbalhan uri sijak" },
                { tempo: 108, coreano: "뜨겁게, 뜨겁게", romanizacao: "tteugeopge, tteugeopge" },
                { tempo: 109, coreano: "그땔 기억해", romanizacao: "geuttael gieokae" },
                { tempo: 110, coreano: "둥글게 둥글게", romanizacao: "dunggeulge dunggeulge" },
                { tempo: 111, coreano: "모여 다음 앞에서", romanizacao: "moyeo da-eum apeseo" },
                { tempo: 113, coreano: "Young and free", romanizacao: "Young and free" },
                { tempo: 114, coreano: "우린 세상에 다 야유해", romanizacao: "urin sesang-e da yayuhae" },
                { tempo: 115, coreano: "답이 없는 어둠 속", romanizacao: "dabi eomneun eodum sok" },
                { tempo: 116, coreano: "우리의 존재를 밝혀내", romanizacao: "uriui jonjaereul balkyeonae" },
                { tempo: 118, coreano: "불타는 태양과", romanizacao: "bultaneun taeyanggwa" },
                { tempo: 121, coreano: "덮치던 파도는", romanizacao: "deopchideon padoneun" },
                { tempo: 123, coreano: "우리에겐 별게 아닌걸", romanizacao: "uriegen byeolge anin-geol" },
                { tempo: 127, coreano: "더 들어와 봐 we don't care", romanizacao: "deo deureowa bwa we don't care" },
                { tempo: 130, coreano: "두려운 것도 anymore", romanizacao: "duryeoun geotdo anymore" },
                { tempo: 132, coreano: "누구도 손댈 수 없어", romanizacao: "nugudo sondael su eopseo" },
                { tempo: 135, coreano: "타는 불꽃처럼", romanizacao: "taneun bulkkotcheoreom" },
                { tempo: 137, coreano: "건배하자 like a thunder", romanizacao: "geonbaehaja like a thunder" },
                { tempo: 141, coreano: "네 모든 걸 채워", romanizacao: "ne modeun geol chaewo" },
                { tempo: 144, coreano: "넘쳐흐를 듯이", romanizacao: "neomchyeoheureul deusi" },
                { tempo: 148, coreano: "모두 잔을 머리 위로", romanizacao: "modu janeul meori wiro" },
                { tempo: 151, coreano: "세상 어디에서든 보일 수 있게", romanizacao: "sesang eodieseodeun boil su itge" },
                { tempo: 155, coreano: "One, two, three, let's burn!", romanizacao: "One, two, three, let's burn!" },
                { tempo: 157, coreano: "여기 모두 모여라", romanizacao: "yeogi modu moyeora" },
                { tempo: 160, coreano: "뜨겁다면 join us", romanizacao: "tteugeopdamyeon join us" },
                { tempo: 164, coreano: "세상 모든 걸 원한다면", romanizacao: "sesang modeun geol wonhandamyeon" },
                { tempo: 166, coreano: "외로워 괴로워", romanizacao: "oerowo goerowo" },
                { tempo: 167, coreano: "무서워 두려워", romanizacao: "museowo duryeowo" },
                { tempo: 168, coreano: "했던 지난날은 됐어", romanizacao: "haetdeon jinannareun dwaesseo" },
                { tempo: 169, coreano: "깃발 들고 우린 hands up", romanizacao: "gitbal deulgo urin hands up" },
                { tempo: 171, coreano: "모두 준비되었는가", romanizacao: "modu junbidoe-eonneun-ga" },
                { tempo: 174, coreano: "One, two, three, let's burn!", romanizacao: "One, two, three, let's burn!" },
                { tempo: 177, coreano: "우리가 보이는가", romanizacao: "uriga boineun-ga" },
                { tempo: 179, coreano: "타오르는 눈빛과", romanizacao: "taoreuneun nunbitgwa" },
                { tempo: 182, coreano: "삼킬 듯한 함성이", romanizacao: "samkil deutan hamseong-i" },
                { tempo: 184, coreano: "온 세상을 울리는 걸", romanizacao: "on sesang-eul ullineun geol" },
                { tempo: 186, coreano: "듣고 있다면", romanizacao: "deutgo itdamyeon" },
                { tempo: 188, coreano: "지금 내 곁으로 와줘", romanizacao: "jigeum nae gyeoteuro wajwo" },
                { tempo: 192, coreano: "함께 할 수 있게", romanizacao: "hamkke hal su itge" },
                { tempo: 194, coreano: "One, two, three, let's burn!", romanizacao: "One, two, three, let's burn!" },
                { tempo: 199, coreano: "불러, 불러 우릴 지금 불러", romanizacao: "bulleo, bulleo uril jigeum bulleo" },
                { tempo: 204, coreano: "타올라 불꽃처럼", romanizacao: "taolla bulkkotcheoreom" },
                { tempo: 209, coreano: "불러, 불러 우릴 지금 불러", romanizacao: "bulleo, bulleo uril jigeum bulleo" },
                { tempo: 210, coreano: "세상 어디에서든 보일 수 있게", romanizacao: "sesang eodieseodeun boil su itge" },
                { tempo: 213, coreano: "타올라 불꽃처럼", romanizacao: "taolla bulkkotcheoreom" },
                { tempo: 215, coreano: "...", romanizacao: "..."},
            ]
        },
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