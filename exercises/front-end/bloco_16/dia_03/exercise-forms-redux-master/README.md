# Exercício de fixação
Vamos criar formulários utilizando `Redux`! \o/
# Antes de iniciar

Crie um fork desse projeto e para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.

Rode o `npm install`.

Vá para a branch master do seu projeto e execute o comando:

`git branch` ou `git branch -a`

Verifique se as seguintes branchs apareceram:

`master` e `gabarito`

* O exercício deverá ser feito na branch `master`.

* Na branch `gabarito` contém um Readme com o gabarito **guiado** para esse exercício.
Não tem problema dar checkout para conferir, mas não deixe de tentar resolver por conta própria :).


Observe o que deve ser feito nas instruções.

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a master, sinta-se a vontade!

**Atenção**! Quando for criar o PR você irá se deparar com essa tela:

![exemple-pr](images/examplepr.png)

É necessário realizar uma mudança. Clique no base repository como na imagem abaixo:

![exemple-pr](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/forms-redux`. Depois desse passo a página deve ficar assim:

![exemple-pr](images/after-change.png)

Agora basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

Para cada PR realize esse processo.

---

# COMEÇANDO O EXERCÍCIO

Vocês criarão dois formulários, cada um em uma etapa, um para dados pessoais e outro para dados profissionais e exibí-los na tela.

![forms-redux](form-redux.gif)

Para isso, é preciso salvar as informações de cada formulário no gerenciador de estados e, por fim, numa outra página, acessar esses dados para que sejam renderizados.

Você vai precisar de:

* Três páginas: uma vai renderizar o formulário de informações pessoais, outra de informações profissionais e uma para exibir as informações, além de um botão junto dos formulários que enviam as informações e passam para a página seguinte.

* Gerenciador de estados (Reeeedux), para salvar as informações na `store` e também para acessá-las.

Então, mãos ao código!!

**1 - Crie uma pasta chamada `pages`, e, dentro dela, 3 arquivos:**

- PersonalForm.jsx
- ProfessionalForm.jsx
- FormDataDisplay.jsx

_Se vocês quiserem utilizar a extensão .js, tudo bem, fiquem à vontade!_

Não se preocupe com o conteúdo de cada uma delas, por enquanto renderize apenas uma `div` com um texto identificando cada uma das páginas.

**2 - Crie as rotas dentro de `App.js` para renderizar as páginas:**
- `PersonalForm` será renderizada na página principal, com a rota `'/'`.
- `ProfessionalForm` será renderizada ao acessar a rota `'/professionalForm'`.
- `FormDataDisplay` será renderizada ao acessar a rota `'/formDisplay'`.

**Dica:** Teste se suas rotas estão funcionando e lembre-se que, que estamos usando o `Switch`, caso alguma rota não renderize a página correta, verifique a ordem em que ela se encontra.

**3 - Crie um `fieldset` que contenha os seguintes `inputs` e os renderize em `PersonalForm.jsx` salvando os estados no componente:**

- Nome - Texto
- Email - Texto
- CPF - Texto
- Endereço - Texto
- Cidade - Texto
- Estado - Select com todos os estados do Brasil
- Um botão com o texto `Enviar` e que redireciona para a página `ProfessionalForm`

**Dica:** Você pode criar 3 componentes: Input, Select e Button

**4 - Crie um `fieldset` que contenha os seguintes inputs e os renderize em `ProfessionalForm.jsx` salvando os estados no componente:**
- Resumo do currículo - TextArea
- Cargo - Texto
- Descrição do cargo - TextArea
- Um botão com o texto `Enviar` e que redireciona para a página `FormDataDisplay`

**Dica:** Você pode reaproveitar os componentes já existentes e criar um novo para a TextArea

**5 - Implemente o Redux:**
- Dentro da pasta "redux", crie as pastas "actions", "reducers" e "store".
- Dentro de "actions" crie um arquivo chamado `action.js`.
- Dentro de "reducers" crie um arquivo chamado `reducer.js` e, caso necessário, um arquivo `index.js` para usar o `combineReducers`.
- Dentro de "store" crie um arquivo chamado `store.js`.
- Implemente o `reducer`.
- Implemente a `store`.
- Implemente as `actions`.

**Dicas:** 
- De início, você pode implementar seu reducer apenas com o valor `default`.
-  O `composeWithDevTools` pode te ajudar.

_Lembre-se que, ao montar a estrutura do Redux, é preciso importar o `Provider`, que recebe a `store`, no `index.js`._

**Dica:** Caso esteja tendo dificuldades para montar a estrutura do Redux, você pode consultar o passo a passo que está nesse [link!](https://app.betrybe.com/course/front-end/gerenciamento-de-estado-com-redux/usando-o-redux-no-react/a2dac445-434c-4690-83da-7ebef1aad2cd/conteudos/cfc29dbb-9243-4450-baa6-6da6ac0d0674/fluxo-de-dados-no-redux/4341ae67-1e44-4a06-84dc-0f1f87a56f0f?use_case=side_bar)


**6 - Salve as informações das páginas `PersonalForm` e `ProfessionalForm` na `store`.**

**Dica:** Lembre-se que o `mapStateToProps` lê as informações da `store` e o `mapDispatchToProps` envia as informações para a `store`.

**7 - Renderize, em `FormDataDisplay`, todas as informações que estão salvas na `store`.**

---
