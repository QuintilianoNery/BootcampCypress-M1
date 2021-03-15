/// <reference types="cypress" />


//Anotações importantes dobre Mocks
//Com o controle de Mocks, é possível testar o retorno de status, 200 que seria o retorno das informações
//Testar o retorno de erro 500, 404, 403 validar realmente as páginas sem realmente dar o erro na aplicação
//Quando eu coloco um response com o valor de [] em branco, quer dizer que eu não quero receber nenhum valor para aquela rota ou para o retorno daquele grid, controlando mais especificamente a minha aplicação.
context('Listagem', () => {
    it('Listagem sem registros', () => {
        cy.server();
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: []
        }).as('getNewtable');

        cy.visit('WebTable.html');
    });


    //Neste teste eu trago as informações continas na rota para semrem apresantadas na tela vintas em formato JS.
    it.only('Listagem com apenas um registro', () => {
        cy.server();
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: [{
                "_id": {
                    "$oid": "5bbcad731f6e4f08440ab062"
                },
                "LastName": "Quintiliano",
                "Email": "q@q.com.teste",
                "Phone": "3199999999",
                "Gender": "Male"
            }]
        }).as('getNewtable');

        cy.visit('WebTable.html');
    });
});