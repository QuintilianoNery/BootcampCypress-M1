/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

context('Cadastro', () => {
    it('Cadastro do usuário no site', () => {
        //BaseURL + a rota
        //cy.visit('Register.html');
        cy.visit('http://demo.automationtesting.in/Register.html');

        cy.get('input[placeholder="First Name"]').type(chance.first());
        cy.get('input[ng-model="LastName"]').type(chance.last());
        cy.get('textarea[ng-model^=Adress]').type(chance.address());
        cy.get('input[ng-model^=Email]').type(chance.email());
        cy.get('input[ng-model^=Phone]').type(chance.phone({formatted:false}));
        //click
        cy.get('input[value^=Male]').click();
        cy.get('input[value=FeMale]').click();
        //Check -> radio's e checkboxes
        cy.get('input[value^=Male]').check();
        //Check passando o value, que é o valor na frente do checkbox
        cy.get('input[type=checkbox]').check('Movies');
        cy.get('input[type=checkbox]').check('Hockey');
        cy.get('input[id=checkbox1]').click();
        cy.get('input[id=checkbox2]').click();
        cy.get('input[id=checkbox3]').click();
        //Select -> select & select2
        cy.get('select#Skills').select('Design');
        cy.get('select#countries').select('Brazil'); 
        //{force:true} faz com que o Cypress continue interagindo com elemento, quando existir span2 e o primeiro oculto
        cy.get('select#country').select('New Zealand', {force:true});
        cy.get('select#yearbox').select('2015');
        cy.get('select[ng-model=monthbox]').select('May');
        cy.get('select#daybox').select('21');
        cy.get('input#firstpassword').type('Quintiliano2021*');
        cy.get('input#secondpassword').type('Quintiliano2021*');
        //Selecionar foto no cadastro
        //.attachFile() -> serve para selecionar um arqivo
        //Aula 02 - upload de arquivos 1:06:22
        cy.get('input#imagesrc').attachFile('raio.png')
        cy.get('button#submitbtn').click();
    });
});