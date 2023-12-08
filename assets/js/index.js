const button = document.getElementById('entrar');
const inputLogin = document.getElementById('email'); 
const inputSenha = document.getElementById('senha');

button.addEventListener('click', function(e) {
  e.preventDefault();

  const login = inputLogin.value;
  const senha = inputSenha.value;

  if (!login.length) {
    alert("Prencha o campo de e-mail!");
    return false;
  }

  if (!senha.length) {
    alert("Preencha o campo de senha!");
    return false;
  }
});



