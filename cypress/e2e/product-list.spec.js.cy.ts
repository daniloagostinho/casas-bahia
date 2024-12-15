describe('Product List', () => {
  it('should display all products correctly', () => {
    // Visita a página inicial
    cy.visit('http://localhost:4200'); // Substitua pelo endereço correto da aplicação

    // Verifica se o componente de lista de produtos está visível
    cy.get('.product-grid').should('be.visible');

    // Verifica se há pelo menos um produto na lista
    cy.get('.product-card').should('have.length.greaterThan', 0);
  });
});


describe('Header', () => {
  it('should display the logo and search bar', () => {
    cy.visit('http://localhost:4200');

    // Verifica se o logo está visível
    cy.get('.logo img').should('be.visible');

    // Verifica se o campo de busca está presente
    cy.get('.search-bar input').should('be.visible');

    // Digita algo na barra de busca
    cy.get('.search-bar input').type('Smartphone').should('have.value', 'Smartphone');
  });
});
