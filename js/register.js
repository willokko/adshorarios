function registrar() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Carregar usuários existentes do localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar se o e-mail já existe
    const usuarioExistente = usuarios.find(usuario => usuario.email === email);

    if (usuarioExistente) {
        alert('Este e-mail já está cadastrado. Tente outro.');
    } else {
        // Adicionar novo usuário
        const novoUsuario = { email: email, senha: senha };
        usuarios.push(novoUsuario);

        // Salvar o novo usuário no localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Registro realizado com sucesso!');
        location.href = "/html/index.html"; // Redirecionar para a tela inicial
    }
}
