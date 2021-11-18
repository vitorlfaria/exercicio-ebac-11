/// <reference types="cypress" />

context('Funcionalidade de páginas (home)', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br')
    });

    it('Deve acessar as homepages da loja', () => {

        cy.get('#primary-menu > .menu-item-536 > .dropdown-toggle').get()
    
    });

});