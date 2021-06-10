import React, { useState } from 'react'
import Products from '../examplePayment/Products'
import Checkout from '../examplePayment/Checkout'
import { products } from '../examplePayment/productsDesc'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

const Bizum = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  return (
    <div>
      <Products
        products={products}
        selectProduct={setSelectedProduct}
        history={history}
      />
      <Checkout selectedProduct={selectedProduct} history={history} />
    </div>
  );
};

export default Bizum;
