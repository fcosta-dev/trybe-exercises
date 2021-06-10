/* ELEMENTOS */
const textoLogin = document.getElementById('txt_login');
const textoSenha = document.getElementById('txt_senha');
const elementoBotao = document.getElementById('botao_login');



/* EVENTOS */
elementoBotao.addEventListener('click', validaLogin)

/* FUNÇÕES */
function validaLogin() {
  let checaLogin = false;
  if (textoLogin.value === 'tryber@teste.com') {
    if (textoSenha.value === '123456') {
      checaLogin = true;
    }
  }
  if (checaLogin === false) {
    alert('Login ou senha inválidos')

  } else {
    alert('Olá, Tryber!')
  }
}