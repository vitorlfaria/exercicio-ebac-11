/// <reference types="cypress" />

context('Testes da funcionalidade de login', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    });

    it('Deve falhar o login com o usuário errado', () => {
        cy.get('#username').type('alunoerrado@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')
    })

    it('Deve falhar o login com a senha errada', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('testeteste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta.')
    })

});