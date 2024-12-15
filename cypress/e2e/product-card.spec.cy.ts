describe('Add to Cart', () => {
  it('should add a product to the cart', () => {
    cy.visit('http://localhost:4200');

    // Verifica se há produtos
    cy.get('.product-card').first().within(() => {
      // Clique no botão "Adicionar ao Carrinho"
      cy.contains('Adicionar ao Carrinho').click();
    });

    // Verifique se uma ação ou feedback visual é exibido (exemplo: contagem no carrinho)
    // Aqui você deve ajustar para verificar se o estado do carrinho é atualizado
    // cy.get('.cart-counter').should('contain', '1');
  });
});
