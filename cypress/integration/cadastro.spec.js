/// <reference types="cypress" />

context('Cadastro', () => {
    it('Cadastro do usuário no site', () => {
        //BaseURL + a rota
        cy.visit('Register.html');

        //preencher os campos com o type
        //elementos
        //input[placeholder="First Name"]
        //input[ng-model="LastName"]
        //input[ng-model^=Email]
        //input[ng-model^=Phone]
        //textarea[ng-model^=Adress]
        
        //input[value^=Male]
        //input[value=FeMale]
        //input[id=checkbox1]
        //input[id=checkbox2]
        //input[id=checkbox3]
     
        cy.get('input[placeholder="First Name"]').type('Quintiliano');
        cy.get('input[ng-model="LastName"]').type('Paquini Nery');
        cy.get('input[ng-model^=Email]').type('quintiliano@gmail.com');
        cy.get('input[ng-model^=Phone]').type('28999999999');
        cy.get('textarea[ng-model^=Adress]').type('Av. teste de endereço,321, Monte cristo, Rio de Janeiro, RJ');
        //click
        cy.get('input[value^=Male]').click();
        cy.get('input[value=FeMale]').click();
        cy.get('input[value^=Male]').click();
        cy.get('input[id=checkbox1]').click();
        cy.get('input[id=checkbox2]').click();
        cy.get('input[id=checkbox3]').click();
        
    });
});