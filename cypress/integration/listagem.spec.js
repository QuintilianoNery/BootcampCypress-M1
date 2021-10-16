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
            response: 'fx:webtable-get-vazio'
        }).as('getNewtable');

        cy.visit('WebTable.html');

        //Validando se existe apenas uma linha na tabela, sendo essa linha o cabeçalho.
        cy.get('div[role=row]')
            .should('have.length', 1);
    });

    //Neste teste eu trago as informações continas na rota para semrem apresantadas na tela vintas em formato JS.

    //No sistema da Tecsystem podemos fazer isso para testar o retorno de informações erradas e validar se ao salvar o sistema vai mostrar exatamente as validações necessárias.

    //posso configurar assim 
    //response: 'fixture: webtable-get-unico'
    //response: 'fixture: webtable-get-unico'

    it('Listagem com apenas um registro', () => {
        cy.server();
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: 'fx:webtable-get-unico'

        }).as('getNewtable');
        cy.visit('WebTable.html');

        //Validando valor de célula
        cy.get('div[role=row] div[role=gridcell]')
            .eq(3)
            //dentro da célula de posição 3 coluna 4 eu quero que pegue o texto que esteja dentro da DIV
            .find('div')
            .as('gridName');

        //.as('') - salva em uma variável temporária as informações do seletor

        //Usando valor da célula que está no aliases
        cy.get('@gridName')
            .should('contain.text', 'Quintiliano');

        //comandos CSS selector
        //1 - .first() - Primeiro elemento da lista
        //2 - 
        //3 - 
        //4 - .eq(3)
        //5 - .last() - Ultimo elemento da lista

        //find('div') - informa o que pero pegar após selecionar o elemento

    });

});