const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Produtos mockados
const products = [
    {
      id: 1,
      title: 'Geladeira Frost Free 350L',
      description: 'Geladeira moderna com alta eficiência energética.',
      price: 1999.90,
      imageUrl: 'https://imgs.casasbahia.com.br/55066470/1g.jpg'
    },
    {
      id: 2,
      title: 'Smart TV 55" 4K',
      description: 'Imagem incrível com qualidade 4K.',
      price: 2999.99,
      imageUrl: 'https://imgs.casasbahia.com.br/55066185/1g.jpg'
    },
    {
      id: 3,
      title: 'Notebook i5 8GB SSD 256GB',
      description: 'Ideal para trabalho e estudos.',
      price: 3499.00,
      imageUrl: 'https://imgs.casasbahia.com.br/1546366805/1xg.jpg'
    }
  ];

// Endpoint para buscar produtos
app.get('/products', (req, res) => {
  const searchTerm = req.query.q?.toLowerCase() || '';
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );
  res.json(filteredProducts);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
