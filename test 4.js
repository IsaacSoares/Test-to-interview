function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificar se os campos obrigatórios não estão vazios
    if (name === '' || email === '' || message === '') {
        alert('Todos os campos são obrigatórios.');
        return false;
    }

    // Validar o formato do e-mail
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return false;
    }

    // O formulário é válido, enviar o formulário ou realizar outras ações aqui.
    // Se desejar enviar o formulário, você pode remover o comando de retorno (return).

    // Por exemplo:
    // document.getElementById('contactForm').submit();

    return true;
}
