describe('Product List', () => {
  it('should display all products correctly', () => {
    // Visita a página inicial
    cy.visit('http://localhost:4200');

    // Verifica se o componente de lista de produtos está visível
    cy.get('.product-grid').should('be.visible');

    // Verifica se há pelo menos um produto na lista
    cy.get('.product-card').should('have.length.greaterThan', 0);

    cy.wait(2000);
  });
});

describe('Header and Product Search with Add to Cart', () => {
  it('should search for "Smartphone" (no results), then "Geladeira" and add to cart', () => {
    // Acesse a aplicação
    cy.visit('http://localhost:4200');

    // Verifica se o logo está visível
    cy.get('.logo img').should('be.visible');

    // Verifica se o campo de busca está presente
    cy.get('.search-bar input').should('be.visible');

    // Primeira pesquisa: "Smartphone"
    cy.get('.search-bar input').type('Smartphone');
    cy.get('.search-bar button').click(); // Simula o clique no botão de buscar

    // Verifica que não há produtos encontrados
    cy.get('.no-products')
      .should('be.visible')
      .and('contain.text', 'Nenhum produto encontrado');

    cy.wait(2000);


    // Apaga o texto do campo de busca
    cy.get('.search-bar input').clear();

    // Segunda pesquisa: "Geladeira"
    cy.get('.search-bar input').type('Geladeira');
    cy.get('.search-bar button').click();

    // Aguarda o carregamento da lista filtrada
    cy.get('.product-grid', { timeout: 5000 }).should('be.visible');

    // Verifica se os produtos exibidos contêm o termo pesquisado
    cy.get('.product-card').each(($el) => {
      cy.wrap($el)
        .find('.product-title')
        .should('contain.text', 'Geladeira');
    });

    // Adiciona o primeiro produto da lista ao carrinho
    cy.get('.product-card').first().within(() => {
      // Clique no botão "Adicionar ao Carrinho"
      cy.contains('Adicionar ao Carrinho').click();
    });

    cy.wait(4000);

    // Verifica se o feedback de sucesso é exibido
    cy.get('.feedback')
      .should('be.visible')
      .and('contain.text', 'Produto adicionado ao carrinho!');

    // Opcional: Verifique se o contador do carrinho foi atualizado
    // cy.get('.cart-count').should('contain', '1');
  });
});

describe('Add to Cart with Feedback', () => {
  it('should add a product to the cart and display feedback', () => {
    cy.visit('http://localhost:4200'); // Certifique-se de que o servidor está ativo

    // Pesquisa "Geladeira"
    cy.get('.search-bar input').type('Geladeira');
    cy.get('.search-bar button').click();

    // Aguarda os resultados da busca
    cy.get('.product-grid', { timeout: 5000 }).should('be.visible');

    // Adiciona o primeiro produto ao carrinho
    cy.get('.product-card').first().within(() => {
      cy.contains('Adicionar ao Carrinho').click();
    });

    // Verifica se o feedback de sucesso é exibido
    cy.get('.feedback', { timeout: 5000 })
      .should('be.visible')
      .and('contain.text', 'Produto adicionado ao carrinho!');
  });
});
