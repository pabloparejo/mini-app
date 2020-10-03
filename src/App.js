import React from 'react';
import AddItemRow from './components/addItemRow';
import ProductList from './components/productList.js';

function App() {
  const [products, setProducts] = React.useState([
    { name: 'apple', checked: false },
    { name: 'banana', checked: true },
    { name: 'blueberry', checked: false },
  ]);

  const [inputState, setInputState] = React.useState();

  const handleChange = event => setInputState(event.target.value);

  const handleClick = () => {
    setProducts([
      ...products,
      { name: inputState, checked: false }]);
  };

  const handleChecked = productName => {
    // coger el objeto a modificar
    const product = products.find(prod => prod.name === productName);
    // modificarlo
    const productCopy = { ...product, checked: !product.checked };
    // guardarlo en el state
    const index = products.indexOf(product);
    const productsCopy = [...products];
    productsCopy[index] = productCopy;
    setProducts(productsCopy);
  };
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <h1>My shopping list</h1>
      <AddItemRow onChange={handleChange} onClick={handleClick} />
      <ProductList products={products} onChange={handleChecked} />
    </div>
  );
}

export default App;
