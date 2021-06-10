/* ELEMENTOS */
const textoLogin = document.getElementById('txt_login');
const textoSenha = document.getElementById('txt_senha');
const elementoBotao = document.getElementById('botao_login');
const elementoAgreement = document.getElementById('agreement')
const elementoEnviar = document.getElementById('submit-btn')

elementoEnviar.disabled = true;

/* EVENTOS */
elementoBotao.addEventListener('click', validaLogin)
elementoAgreement.addEventListener('click', checaSubmit)

function checaSubmit() {
  if (elementoAgreement.checked === true) {
    elementoEnviar.disabled = false;
  } else {
    elementoEnviar.disabled = true;
  }
}

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