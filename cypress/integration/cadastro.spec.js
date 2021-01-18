/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

context('Cadastro', () => {
    it('Cadastro do usuário no site', () => {
        //Rotas
        //POST 200 /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
        //POST 200 /api/1/databases/userdetails/collections/usertable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
        //GET 200 /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
        
        //Iniciando o servidor antes de usar as rotas
        cy.server();

        //sem mocs
        //cy.route('METODO', ROTA ).as('');
        //quando o host não está sendo informado
        //rota sendo variável, coloca-se os caracteres curinga, ** não importa qual que for o host + não importa o que vai vir depois **
        //salvar a rota temporário em um aliases (.as)
        //POST newtable
        cy.route('POST','**/api/1/databases/userdetails/collections/newtable?**' )
            .as('postNewtable'); //Apelidos
        
        //usertable
        cy.route('POST','**/api/1/databases/userdetails/collections/usertable?**' )
            .as('postUsertable');

        //GET newtable
        cy.route('GET','**/api/1/databases/userdetails/collections/newtable?**' )
            .as('getNewtable');     

        //BaseURL + a rota
        cy.visit('Register.html');
        //cy.visit('http://demo.automationtesting.in/Register.html');
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
        //cy.get('select#yearbox').select('2015');
        cy.get('select#yearbox').select((chance.year({min:1916, max: 2015})));
        //cy.get('select[ng-model=monthbox]').select('May');
        cy.get('select[ng-model=monthbox]').select((chance.month()));
        cy.get('select#daybox').select('21');
        cy.get('input#firstpassword').type('Quintiliano2021*');
        cy.get('input#secondpassword').type('Quintiliano2021*');
        //Selecionar foto no cadastro
        //.attachFile() -> serve para selecionar um arqivo
        //Aula 02 - upload de arquivos 1:06:22
        cy.get('input#imagesrc').attachFile('raio.png')
        //Click button
        cy.get('button#submitbtn').click();


        //Rotas 1:08:53
        cy.wait('@postNewtable').then((resNewtable) =>{
            console.log(resNewtable.status)
            cy.log(resNewtable.status)
        });



    });
});

//Conceito de rotas
/* */