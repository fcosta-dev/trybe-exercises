const elementSelectEstados = document.getElementById('drop_estados_list')

function montaEstados() {
  const estados = [
    {estado: 'Minas Gerais', sigla: 'mg'},
    {estado: 'São Paulo', sigla: 'sp'},
    {estado: 'Ceará', sigla: 'ce'},
    {estado: 'Rio Grande do Sul', sigla: 'rs'},
    {estado: 'Mato Grosso do Sul', sigla: 'ms'},
    {estado: 'Goiás', sigla: 'go'},
  ];

  for (let index = 0; index < estados.length; index += 1) {
    const elementEstado = document.createElement('option');
    elementEstado.innerText = estados[index].estado;
    elementEstado.value = estados[index].sigla;
    elementSelectEstados.appendChild(elementEstado);
  }
}
montaEstados();

/************** BOTÃO LIMPAR ***********/
const elementButtonLimpa = document.querySelector('#limpa_formulario');
elementButtonLimpa.addEventListener('click', acaoBotaoLimpa)
function acaoBotaoLimpa() {
/* Limpa os campos do formulário */
limpaCamposFormulario();
/* Limpa os campos com meu currículo */
limpaCamposCurriculo();
/* Limpa a Div criada */
limpaDiv();
/* Seta o focus no campo Nome Completo */
  const elementPrimario = document.getElementById('txt_nome');
  elementPrimario.focus;
}
function limpaCamposFormulario() {
  const elementsDadosPessoais = document.getElementsByClassName('dados_pessoais');
  for (let index = 0; index < elementsDadosPessoais.length; index += 1) {
    elementsDadosPessoais[index].value = '';
  }
}
function limpaCamposCurriculo() {
  const elementsCurriculo = document.getElementsByClassName('curriculo');
  for (let index = 0; index < elementsCurriculo.length; index += 1) {
    elementsCurriculo[index].value = '';
  }
}
function limpaDiv() {
  let elementDivASerLimpada = document.getElementById('apresentacao');
  elementDivASerLimpada.remove();
}

/************** BOTÃO ENVIAR ***********/
const elementButtonEnvia = document.querySelector('#envia_formulario');
elementButtonEnvia.addEventListener('click', acaoBotaoEnvia)
function acaoBotaoEnvia(event) {
  /* event.preventDefault(); */
  montaDivApresentacao();
}
function adicionaElemento(elementoPai, elementoFilho) {
  let maiusculo = false;
  if (elementoFilho === 'txt_nome' || elementoFilho === 'drop_estados_list') {
    maiusculo = true;
  }
  const elementoASerAdicionado = document.createElement('p');
  const elementoFilhoInfo = document.getElementById(elementoFilho)
  elementoASerAdicionado.innerText = (maiusculo) ? elementoFilhoInfo.value.toUpperCase() : elementoFilhoInfo.value
  elementoPai.appendChild(elementoASerAdicionado);
}
function montaDivApresentacao() {
  let elementDivApresentacao = document.getElementById('div_apresenta');
  let elementFieldset = document.createElement('fieldset');
  elementFieldset.id = 'apresentacao';
  elementDivApresentacao.appendChild(elementFieldset);
  elementFieldset = document.getElementById('apresentacao');

  const elementBr = document.createElement('br');
  elementFieldset.appendChild(elementBr);
  
  adicionaElemento(elementFieldset, 'txt_nome');
  adicionaElemento(elementFieldset, 'txt_email');
  adicionaElemento(elementFieldset, 'txt_cpf');
  adicionaElemento(elementFieldset, 'txt_endereco');
  adicionaElemento(elementFieldset, 'txt_cidade');
  adicionaElemento(elementFieldset, 'drop_estados_list');
}

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 40
    },
    email: {
      required: true,
      email: true,
      maxLength: 50
    }
  },  
  messages: {
    name: {
      required: 'O campo de nome é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    email: {
      required: 'O campo de email é obrigatório.',
      email: 'O email digitado não é válido.',
      maxLength: 'O limite é de 50 caracteres.'
    }
  },
  submitHandler: function (form, values) {
    console.log(form, values);
  }
});