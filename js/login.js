function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    
    if(login == "adm@gmail.com" && senha == "adm"){
        alert('Login efetuado com sucesso!');
        location.href = "index.html"; 
    }
    else{
        alert('Algo está errado. Tente novamente.');
    }
}