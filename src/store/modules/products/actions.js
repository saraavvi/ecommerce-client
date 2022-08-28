const baseUrl = process.env.VUE_APP_BASE_URL;

export default {
  async fetchProducts(context) {
    const response = await fetch(`${baseUrl}/api/admin/products`);
    const data = await response.json();
    context.commit('setProducts', data.data);
  },
};
