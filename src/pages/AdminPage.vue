<template>
  <h1>Admin page</h1>
  <ul>
    <li :key="product.id" v-for="product in allProducts">{{ product.title }}</li>
  </ul>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import useProductsStore from '../store/useProducts';

const productStore = useProductsStore();

const setProducts = () => {
  productStore.fetchProducts();
};

const allProducts = computed(() => {
  const products = productStore.getProducts;
  return products;
});

onMounted(() => {
  setProducts();
});
</script>
