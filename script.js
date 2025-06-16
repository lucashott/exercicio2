const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputTelefone = document.getElementById('telefone');
const inputMensagem = document.getElementById('mensagem');
const botaoEnviar = document.getElementById('enviar');  

botaoEnviar.addEventListener('click', () => {
    if (!inputNome.value || !inputEmail.value || !inputTelefone.value || !inputMensagem.value) {
        alert('Por favor, preencha todos os campos.');
    } else {
        alert('Mensagem enviada com sucesso!');
        inputNome.value = '';
        inputEmail.value = '';
        inputTelefone.value = '';
        inputMensagem.value = '';
    }
});