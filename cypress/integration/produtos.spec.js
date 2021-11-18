/// <reference types="cypress" />

context('Testes das listas de produto', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista, configurar e colocar no carrinho', () => {

        let quantidade = 3

        cy.get('.product-block').eq(5).click()
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    });

});