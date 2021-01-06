/// <reference types="cypress" />

context('Cadastro', () => {
    it('Cadastro de usuário no site', () => {
        //BaseURL + a rota
        cy.visit('Register.html');
    });
});


//elementos
//input[placeholder="First Name"]
//input[ng-model="LastName"]