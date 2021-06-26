Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do Manual da Pessoa Estudante da Trybe.

# Boas vindas ao repositório do projeto de ES6 e Higher Order Functions!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

## Habilidades

Neste projeto, verificamos se você é capaz de:

- Produzir código legível, conciso e expressivo utilizando as novas funcionalidades do ES6
- Utilizar as _Higher Order Functions_ para manipular e criar arrays
- Escolher a _Higher Order Function_ mais adequada para a obtenção de um resultado esperado
- Aprender a usar de forma conjunta as _Higher Order Functions_
- Interpretar testes unitários e produzir soluções que atendam a eles

---

## Sumário

- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de entrega](#data-de-entrega)
- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
  - [Depois de terminar o desenvolvimento (opcional)](#depois-de-terminar-o-desenvolvimento-opcional)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [1. Implemente a função getSpeciesByIds](#1-implemente-a-função-getSpeciesByIds)
  - [2. Implemente a função getAnimalsOlderThan](#2-implemente-a-função-getAnimalsOlderThan)
  - [3. Implemente a função getEmployeeByName](#3-implemente-a-função-getEmployeeByName)
  - [4. Implemente a função createEmployee](#4-implemente-a-função-createEmployee)
  - [5. Implemente a função isManager](#5-implemente-a-função-isManager)
  - [6. Implemente a função addEmployee](#6-implemente-a-função-addEmployee)
  - [7. Implemente a função countAnimals](#7-implemente-a-função-countAnimals)
  - [8. Implemente a função calculateEntry](#8-implemente-a-função-calculateEntry)
  - [9. Implemente a função getAnimalMap](#9-implemente-a-função-getAnimalMap)
  - [10. Implemente a função getSchedule](#10-implemente-a-função-getSchedule)
  - [11. Implemente a função getOldestFromFirstSpecies](#11-implemente-a-função-getOldestFromFirstSpecies)
  - [12. Implemente a função increasePrices](#12-implemente-a-função-increasePrices)
  - [13. Implemente a função getEmployeeCoverage](#13-implemente-a-função-getEmployeeCoverage)
- [Avisos finais](#avisos-finais)
  - [Code Review](#revisando-um-pull-request)
  - [Avaliação do projeto](#avaliação-do-projeto)
  - [Ordem dos requisitos no avaliador automático](#ordem-dos-requisitos-no-avaliador-automático)

---

## Entregáveis

### O QUE DEVERÁ SER DESENVOLVIDO

Você implementará várias funções para atender aos requisitos propostos e garantir que todas as funções passem nos testes unitários.

### DESENVOLVIMENTO

Este repositório contém um _template_ de uma aplicação **NodeJS** (observe a existência do arquivo _package.json_).
Após clonar o projeto e instalar as dependências, você não precisará realizar nenhuma configuração adicional.
Todos os arquivos estritamente necessários para finalizar o projeto já estão criados, **não** sendo necessária a criação de outros arquivos.
Você deverá completar as funções e testes unitários de forma a satisfazer os requisitos listados na próxima seção.

Na pasta raíz do projeto, temos a pasta `src` e a pasta `tests`. A pasta `src` é composta pelo arquivo `zoo.js`, que contém as funções a serem implementadas, e o arquivo `data.js`, que armazena os dados que serão utilizados. Já a pasta `tests`, contém os testes unitários correspondentes a cada função do arquivo `zoo.js`.

O nome dos arquivos também segue uma ordem definida. Basicamente, os arquivos de teste possuem o nome da função alvo acrescido do nome `.spec.js`.
O arquivo `src/zoo.js` conterá a implementação de uma função, `getSpeciesByIds,` por exemplo, e o arquivo `tests/getSpeciesByIds.spec.js` conterá os testes unitários referentes à função.

Você só deve alterar os arquivos indicados nos requisitos. **Os arquivos que não estão indicados nos requisitos não devem ser alterados, ou sua avaliação poderá ser comprometida.**

### DATA DE ENTREGA

 - Projeto individual;
 - Serão `2` dias de projeto;
 - O projeto tem até a seguinte data: `09/06/2021 - 14:00h` para ter entregue a avaliação final.

---

## Instruções para entregar seu projeto

### ANTES DE COMEÇAR A DESENVOLVER

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-012-project-zoo-functions.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-012-project-zoo-functions`

2. Instale as dependências
  * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora crie uma branch para qual você vai submeter os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b luiza-zoo-functions-project`

4. Desenvolva a solução para os problemas no arquivo `src/zoo.js`. Você pode usar os arquivos do diretório `test` para verificar se a sua implementação está de acordo com o esperado;

5. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (o arquivo `src/zoo.js` deve aparecer em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (deve aparecer listado o arquivo `src/zoo.js` em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin luiza-zoo-functions-project`

7. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-012-project-zoo-functions-rubric/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-012-project-zoo-functions-rubric/pulls) e confira que o seu _Pull Request_ está criado.

### DURANTE O DESENVOLVIMENTO

📌 **PULL REQUESTS COM ISSUES NO ESLINT NÃO SERÃO AVALIADAS, ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!**

📌 **OS NOMES DOS ARQUIVOS NÃO DEVEM SER ALTERADOS!** Você pode adicionar outros arquivos, se julgar necessário. Qualquer dúvida, procure a Pessoa Instrutora que te acompanha.

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre, após um (ou alguns) `commits`, atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_
  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  6. `npm test` _(executa todos os testes presentes na aplicação)_
  7. `npm test path/to/file` _(executa apenas os testes presentes no arquivo path/to/file)_

### DEPOIS DE TERMINAR O DESENVOLVIMENTO (OPCIONAL)

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-00`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

📌 **LEMBRE-SE DE GARANTIR QUE TODAS AS ISSUES COMENTADAS PELO ESLINT ESTÃO RESOLVIDAS**

---

## Requisitos do projeto

Vocẽ deverá implementar as funções que estão no `src/zoo.js` para passarem em cada um dos testes. O teste `test/getSpeciesByIds.test.js`, por exemplo, testa a função `getSpeciesByIds`, que já está criada dentro do `src/zoo.js`, embora ainda não contenha lógica alguma. Para ver o que cada função precisa retornar, basta ver o `assert` de cada um dos testes.

Utilize as novas funcionalidades do ES6 como arrow functions, template literals, spread operator, parâmetro rest, object destructuring, entre outras. Utilize também as _Higher Order Functions_.

**Dica**: uma importante soft-skill é saber como gerenciar seu tempo. Alguns exercícios são mais difíceis que outros, e não estão em ordem de complexidade. Caso tenha dificuldade para realizar algum exercício, pule-o, resolva outro, e, quando se sentir confortável, volte ao exercício em questão. A ideia é não ficar preso a um problema por um longo período. Realizar outros exercícios pode te ajudar a enxergar e/ou aprender novas maneiras de se chegar ao resultado esperado.

Antes de começar, analise o arquivo `src/data.js`, para ver os dados que serão usados.

### 1. IMPLEMENTE A FUNÇÃO getSpeciesByIds

  Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.

  **Observações técnicas**

  - O parâmetro desta função pode ser alterado para atender ao requisito proposto

  **O que será avaliado**

  - Caso receba nenhum parâmetro, necessário retornar um array vazio
  - Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id
  - Ao receber mais de um id, retorna um array com as espécies referentes aos ids

### 2. IMPLEMENTE A FUNÇÃO getAnimalsOlderThan

  Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada

  **Observações técnicas**

  - Deve retornar um valor booleano

  **O que será avaliado**

  - Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta
 espécie possuem a idade mínima especificada

### 3. IMPLEMENTE A FUNÇÃO getEmployeeByName

   Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

  **O que será avaliado**

  - Sem parâmetros, retorna um objeto vazio
  - Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
  - Quando provido o último nome do funcionário, retorna o objeto do funcionário

### 4. IMPLEMENTE A FUNÇÃO createEmployee

  A função, a partir de informações recebidas nos parâmetros, é capaz de criar um objeto equivalente ao de uma pessoa colaboradora, retornando-o

  **Observações técnicas**

  - O parâmetro `personalInfo` recebe um objeto que contém o `id`, o `firstName` e o `lastName`
  - O parâmetro `associatedWith` recebe um objeto que contém dois array: `managers` e `responsibleFor`

  **O que será avaliado**

  - Cria um novo colaborador a partir de objetos contendo `informações pessoais` e `gerentes e animais gerenciados`.

### 5. IMPLEMENTE A FUNÇÃO isManager

  Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de gerência.

  **Observações técnicas**

  - Deve retornar um valor booleano

  **O que será avaliado**

  - Testa se o id passado é de um gerente

### 6. IMPLEMENTE A FUNÇÃO addEmployee

  A função irá adicionar uma nova pessoa colaboradora ao array `employees`, presente no arquivo `data.js`.

  **O que será avaliado**

  - Adiciona um funcionário no fim da lista

### 7. IMPLEMENTE A FUNÇÃO countAnimals

  Esta função é responsável por contabilizar a quantidade de animais.

  **Observações técnicas**

  - Sem parâmetros, retorna um objeto
  - Com o nome de uma espécie de animal, retorna um número

  **O que será avaliado**

  - Sem parâmetros, retorna animais e suas quantidades
  - Com o nome de uma espécie de animal, retorna somente a quantidade

### 8. IMPLEMENTE A FUNÇÃO calculateEntry

  A partir da quantidade de visitantes e a faixa etária de cada um, esta função é responsável por retornar o preço total a ser cobrado

  **Observações técnicas**

  - O parâmetro `entrants` recebe um objeto que contém as chaves `Adult`, `Child` e `Senior`, com suas respectivas quantidades de pessoas

  **O que será avaliado**

  - Retorna 0 se nenhum argumento for passado
  - Retorna 0 se um objeto vazio for passado
  - Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos

### 9. IMPLEMENTE A FUNÇÃO getAnimalMap

  A função é responsável pelo mapeamento geográfico das espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e gênero, por exemplo

  **Observações técnicas**

  - Analise o teste unitário para entender os retornos que são esperados para esta função

  **O que será avaliado**

  - Sem parâmetros, retorna animais categorizados por localização
  - Com a opção `includeNames: true` especificada, retorna nomes de animais
  - Com a opção `sorted: true` especificada, retorna nomes de animais ordenados
  - Com a opção `sex: 'female'` ou `sex: 'male'` especificada, retorna somente nomes de animais macho/fêmea
  - Com a opção `sex: 'female'` ou `sex: 'male'` especificada e a opção `sort: true` especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados
  - Só retorna informações ordenadas e com sexo se a opção `includeNames: true` for especificada

### 10. IMPLEMENTE A FUNÇÃO getSchedule

  A função é responsável por disponibilizar as informações de horário para uma consulta, que pode querer ter acesso a todo o cronograma da semana ou apenas o cronograma de um dia específico

  **Observações técnicas**

  - Analise o teste unitário para entender os retornos que são esperados para esta função

  **O que será avaliado**

  - Sem parâmetros, retorna um cronograma legível para humanos
  - Se um único dia for passado, retorna somente este dia em um formato legível para humanos

### 11. IMPLEMENTE A FUNÇÃO getOldestFromFirstSpecies

  A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro

  **O que será avaliado**

  - Passado o id de um funcionário, encontra a primeira espécie de animal
  gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do
  animal mais velho dessa espécie

### 12. IMPLEMENTE A FUNÇÃO increasePrices

  A função é responsável por aumentar o preço das visitas, com base no valor de aumento recebido no parâmetro, em porcentagem

  **Observações técnicas**

  - Se o parâmetro da função recebe o valor 20, o aumento é de 20%
  - Altera o objeto `prices` do arquivo `data.js`

  **O que será avaliado**

  - Ao passar uma porcentagem, incrementa todos os preços, arrendondados em duas casas decimais

### 13. IMPLEMENTE A FUNÇÃO getEmployeeCoverage

  A função é responsável por consultar as espécies pela qual a pessoa colaborada, recebida no parâmetro através de seu `id`, `firstName` ou `lastName`, é responsável

  **Observações técnicas**

  - Analise o teste unitário para entender os retornos que são esperados para esta função

  **O que será avaliado**

  - Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais eles são responsáveis
  - Com o id de um funcionário, retorna os animais pelos quais o funcionário é responsável
  - Com o primeiro nome de um funcionário, retorna os animais pelos quais o funcionário é responsável
  - Com o último nome de um funcionário, retorna os animais pelos quais o funcionário é responsável

---

## Avisos Finais

### REVISANDO UM PULL REQUEST

À medida que você e as outras pessoas que estudam na Trybe forem entregando os projetos, vocês receberão um alerta via Slack para também fazer a revisão dos Pull Requests dos seus colegas. Fiquem atentos às mensagens do "Pull Reminders" no Slack!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.

### AVALIAÇÃO DO PROJETO

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://bit.ly/2OfLJPn)

### ORDEM DOS REQUISITOS NO AVALIADOR AUTOMÁTICO

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

---
