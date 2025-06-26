// Exibe a mensagem de boas-vindas apenas na primeira visita da sessão
if (!sessionStorage.getItem('visitou')) {
    alert('Bem-vindo ao meu portfólio!');
    sessionStorage.setItem('visitou', 'sim'); // Marca que a mensagem já foi exibida nesta sessão
}

// Mensagem de agradecimento para o LinkedIn
function agradecerLinkedin() {
    alert('Obrigado por visitar meu LinkedIn!');
}

// Mensagem de agradecimento para o GitHub
function agradecerGithub() {
    alert('Obrigado por visitar meu GitHub!');
}