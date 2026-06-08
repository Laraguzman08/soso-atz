function fecharDicas() {
    const menssagem = document.getElementById('dicaMenssagem');
    menssagem.classList.remove('ativa');
}

function validarLogin() {

    const menssagem = document.getElementById('dicaMenssagem');

    if (menssagem && menssagem.style.display === 'block') {
        return false; // Impede o login se as dicas estiverem abertas
    }

    let nome = document.getElementById('nome').value;
    let senha = document.getElementById('senha').value;

    let erro = document.getElementById('problema');
    let errorBox = document.getElementById('error-message');

    errorBox.style.display = 'none'; // Esconde a caixa de erro antes de validar

    const nomeCorreto = 'Esposa do Wooyoung';
    const senhaCorreta = '27052008';

    if (nome === "" || senha === "") {
        erro.textContent = 'Please fill in all fields!';
        errorBox.style.display = 'block';
        return false;
    } // Verifica se os campos estão vazios

    if (nome !== nomeCorreto || senha !== senhaCorreta) {
        erro.textContent = 'Incorrect username or password. Please try again!';
        errorBox.style.display = 'block';
        return false; // Verifica se o nome ou senha estão incorretos
    }

    window.location.href = 'transicao.html'; // Redireciona para a página de transição;
    return false;

}

function dicas() {
    const menssagem = document.getElementById('dicaMenssagem');
    const texto = document.getElementById('dicaTexto');

    menssagem.classList.toggle('ativa');

    if (menssagem.classList.contains('ativa')) {
        texto.textContent = 'Click on the buttons to get hints for username and password!';
    }
}

function mostrarDica(tipo) {
    const texto = document.getElementById('dicaTexto');

    if (tipo === 'nome') {
        texto.textContent = 'The username is a very romantic nickname 💕 It starts with "Esposa" and ends with "do Wooyoung"💍✨';
    } else if (tipo === 'senha') {
        texto.textContent = 'The password is a significant date in the format DDMMYYYY!🎂🎀';
    }
}