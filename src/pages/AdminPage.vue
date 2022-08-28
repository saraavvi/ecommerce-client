<template>
  <h1>Admin page</h1>
  <ul>
    <li :key="product.id" v-for="product in allProducts">{{ product.title }}</li>
  </ul>
</template>

<script>
export default {
  methods: {
    getProducts() {
      this.$store.dispatch('products/fetchProducts');
    },
  },
  computed: {
    allProducts() {
      const products = this.$store.getters['products/products'];
      return products;
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
