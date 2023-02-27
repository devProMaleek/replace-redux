import React, { createContext, useContext, useState } from 'react';

const initialState = [
  {
    id: 'p1',
    title: 'Red Scarf',
    description: 'A pretty red scarf.',
    isFavorite: false,
  },
  {
    id: 'p2',
    title: 'Blue T-Shirt',
    description: 'A pretty blue t-shirt.',
    isFavorite: false,
  },
  {
    id: 'p3',
    title: 'Green Trousers',
    description: 'A pair of lightly green trousers.',
    isFavorite: false,
  },
  {
    id: 'p4',
    title: 'Orange Hat',
    description: 'Street style! An orange hat.',
    isFavorite: false,
  },
];

const contextState = {
  products: [],
  toggleFavorites: (id) => {},
  setProducts: () => {},
};

const ProductsContext = createContext(contextState);

const ProductsProvider = ({ children }) => {  
  const [products, setProducts] = useState(initialState);

  const toggleFavorites = (productId) => {
    const productIndex = products.findIndex((product) => product.id === productId);
    const favoriteProduct = products[productIndex];
    const updatedFavoriteProduct = { ...favoriteProduct, isFavorite: !favoriteProduct.isFavorite };
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[productIndex] = updatedFavoriteProduct;
      return updatedProducts;
    });
  };
  return (
    <ProductsContext.Provider value={{ products: products, toggleFavorites, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => {
  const { products, toggleFavorites, setProducts } = useContext(ProductsContext);
  return { products, toggleFavorites, setProducts };
};

export default ProductsProvider;
export { useProductsContext };
