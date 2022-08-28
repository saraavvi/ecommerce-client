import { createStore } from 'vuex';
import productsModule from './modules/products/index';

const store = createStore({
  modules: {
    products: productsModule,
  },
  state() {
    return {};
  },
});

export default store;
