function logar() {
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    // Carregar usuários existentes do localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar se o usuário existe
    const usuario = usuarios.find(usuario => usuario.email === login);

    if (!usuario) {
        alert('Usuário não existe, se registre primeiro.');
    } else if (usuario.senha !== senha) {
        alert('Senha errada, digite a correta.');
    } else {
        location.href = "index.html"; 
    }
}