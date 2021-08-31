// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("addPlayer", (name, score = 0, assertions = 0, gravatarEmail = 'mail@mail.com') => {
    window.localStorage.setItem('state', JSON.stringify({
        player: {
            name,
            assertions,
            score,
            gravatarEmail
        }
    }))
})
Cypress.Commands.add("addRanking", (ranking = []) => {
    window.localStorage.setItem('ranking', JSON.stringify(ranking))
})

Cypress.Commands.add('setToken', () => {
    cy.request({
        method: 'GET',
        url: 'https://opentdb.com/api_token.php?command=request',
    })
        .then((resp) => {
            console.log({resp})
            window.localStorage.setItem('token', resp.body.token)
        })

})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
