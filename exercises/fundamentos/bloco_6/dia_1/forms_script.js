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
limpaCamposformulario();
/* Limpa a div com meu currículo */
limpaDivCurriculo();
}
function limpaCamposformulario() {

}
function limpaDivCurriculo() {
  const elementsCurriculo = document.getElementsByClassName('curriculo');

  for (let index = 0; index < elementsCurriculo.length; index += 1) {
    elementsCurriculo[index].value = '';
  }
  const elementPrimario = document.getElementById('txt_nome');
  elementPrimario.focus;
}

/************** BOTÃO ENVIAR ***********/
