describe('Product List', () => {
  it('should display all products correctly', () => {
    // Visita a página inicial
    cy.visit('http://localhost:4200'); // Substitua pelo endereço correto da aplicação


    // Verifica se o componente de lista de produtos está visível
    cy.get('.product-grid').should('be.visible');


    // Verifica se há pelo menos um produto na lista
    cy.get('.product-card').should('have.length.greaterThan', 0);
    cy.wait(2000);

  });
});


describe('Header', () => {
  it('should display the logo and search bar', () => {

    cy.visit('http://localhost:4200'); // Substitua pelo endereço correto da aplicação

    // Verifica se o logo está visível
    cy.get('.logo img').should('be.visible');

    // Verifica se o campo de busca está presente
    cy.get('.search-bar input').should('be.visible');

    // Digita algo na barra de busca
    cy.get('.search-bar input').type('Smartphone').should('have.value', 'Smartphone');

    cy.wait(2000);


  });
});

describe('Add to Cart', () => {

  it('should add a product to the cart', () => {
    cy.visit('http://localhost:4200'); // Substitua pelo endereço correto da aplicação

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
