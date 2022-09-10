import { defineStore } from 'pinia';

const baseUrl = process.env.VUE_APP_BASE_URL;

const useProductsStore = defineStore({
  id: 'productsId',
  state: () => ({
    products: [],
  }),
  getters: {
    getProducts: (state) => state.products,
  },
  actions: {
    async fetchProducts() {
      const response = await fetch(`${baseUrl}/api/admin/products`);
      const data = await response.json();
      this.products = data.data;
    },
  },
});

export default useProductsStore;
