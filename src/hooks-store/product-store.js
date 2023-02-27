import { initStore } from './store';

const initialProductState = [
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

const configureStore = () => {
  const actions = {
    TOGGLE_FAVORITE: (currentState, productId) => {
      const productIndex = currentState.products.findIndex((product) => product.id === productId);
      const favoriteProduct = currentState.products[productIndex];
      const updatedFavoriteProduct = { ...favoriteProduct, isFavorite: !favoriteProduct.isFavorite };
      const updatedProducts = [...currentState.products];
      updatedProducts[productIndex] = updatedFavoriteProduct;
      return { products: updatedProducts };
    },
  };

  initStore(actions,{products: initialProductState} )
};

export default configureStore;