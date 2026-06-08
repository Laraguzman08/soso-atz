validarLogin() {
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    if (nome === 'Esposa do woyoung' && senha === '27052008') {
        alert('Login successful!');
        return true; // Permite o envio do formulário
    } else {
        alert('Invalid username or password. Please try again.');
        return false; // Impede o envio do formulário
    }

function dica() {

    const nomeDica = 'Esposa do woyoung';
    const senhaDica = '27052008';

    


    alert('Hint: Think of a hopeless romantic\'s username~ 💕 It begins with \"Esposa\" and ends with \"do Woyoung\", and the password is a significant date 🎂🎀');
}