/// <reference types="cypress" />
var faker = require('faker');

context('Teste da funcionalidade de cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o cadastro com sucesso', () => {
        
        let nomeFaker = faker.name.firstName()
        let sobreNomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)
        
        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('teste@teste123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobreNomeFaker)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });

});