/// <reference types="cypress" />

//Chance
let Chance = require('chance');
let chance = new Chance();


context('Página Inicial', () => {
    it('Verificando primeiro acesso no site', () => {
        cy.visit('/');
        cy.url().should('contain', 'automationtesting.in');

        cy.get('button[id=btn1]')
            .contains('Sign In')
            .should('be.visible')

        cy.get('button[id=btn2]')
            .contains('Skip Sign In')
            .should('be.visible')

    });
});