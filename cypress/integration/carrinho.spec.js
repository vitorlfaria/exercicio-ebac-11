/// <reference types="cypress" />

context('Teste do carrinho de compras', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/product/abominable-hoodie/')
    });

    it('Deve adicionar e remover produtos do carrinho', () => {

        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type('5')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', '5')

        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('.button.view-cart').eq(1).click()

        cy.get('.remove > .fa').click()
        cy.get('.woocommerce-message').should('contain', 'removido. Desfazer?')
    
    });

});