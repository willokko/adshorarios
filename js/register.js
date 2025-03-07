function registrar() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioExistente = usuarios.find(usuario => usuario.email === email);

    if (usuarioExistente) {
        alert('Este e-mail já está cadastrado. Tente outro.');
    } else {
       
        const novoUsuario = { email: email, senha: senha };
        usuarios.push(novoUsuario);

        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Registro realizado com sucesso!');
        location.href = "/html/index.html";
    }
}
