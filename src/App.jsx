import React from 'react';
import './App.css';

function Header({ name, children }) {
  return (
    <header style={{ 
      borderBottom: '2px solid #333', 
      padding: '20px', 
      marginBottom: '20px' 
    }}>
      <h1>{name}</h1>
      <nav>
        {children} 
      </nav>
    </header>
  );
}

function Card() {
  const products = [
    { id: 1, name: 'Ноутбук', price: '65 000 ₽' },
    { id: 2, name: 'Смартфон', price: '45 000 ₽' },
    { id: 3, name: 'Наушники', price: '7 500 ₽' },
    { id: 4, name: 'Клавиатура', price: '3 200 ₽' },
  ];

  return (
    <main style={{ padding: '20px' }}>
      <h2>Карточки товаров</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div 
            key={product.id} 
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '20px',
              width: '180px',
              boxShadow: '2px 2px 10px rgba(0,0,0,0.1)'
            }}
          >
            <h3>{product.name}</h3>
            <p style={{ fontWeight: 'bold', color: 'green' }}>{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

function Footer({ name, children }) {
  return (
    <footer style={{ 
      borderTop: '2px solid #aaa', 
      marginTop: '40px', 
      padding: '20px',
      textAlign: 'center'
    }}>
      <h4>{name}</h4>
      <div>{children}</div>
      <small>© 2024 Все права защищены</small>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Мой Интернет-магазин">
        <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', justifyContent: 'center' }}>
          <li><a href="/">Главная</a></li>
          <li><a href="/catalog">Каталог</a></li>
          <li><a href="/contacts">Контакты</a></li>
        </ul>
      </Header>

      <Card />

      <Footer name="Контакты компании">
        <p>Телефон: +7 (999) 123-45-67 | Email: shop@react.ru</p>
      </Footer>
    </div>
  );
}

export default App;