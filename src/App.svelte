<script lang="ts">

  import ProductList from './components/ProductList/ProductList.svelte';
  import Cart from './components/Cart/Cart.svelte';
  import type { Product, CartItem } from './types';

  let products: Product[] = [
    { id: 1, name: 'Book', price: 12 },
    { id: 2, name: 'Pen', price: 2 },
    { id: 3, name: 'Notebook', price: 5 }
  ];

  let cart: CartItem[] = [];

  function addToCart(product: Product) {
    const existingIndex = cart.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex] = {
        ...updatedCart[existingIndex],
        qty: updatedCart[existingIndex].qty + 1
      };
      cart = updatedCart;
    } else {
      cart = [...cart, { ...product, qty: 1 }];
    }
  }

  function removeFromCart(id: number) {
    cart = cart.filter((item) => item.id !== id);
  }
</script>

<main>
  <h2>Products</h2>
  <ProductList {products} on:add={(e) => addToCart(e.detail)} />

  <h2>Cart</h2>
  <Cart {cart} on:remove={(e) => removeFromCart(e.detail)} />
</main>



<style>
    h2 {
      margin-top: 1.5rem;
      font-size: 1.5rem;
      border-bottom: 2px solid #ddd;
      padding-bottom: 0.25rem;
    }
  
    main {
      max-width: 600px;
      margin: auto;
      font-family: Arial, sans-serif;
      padding: 1rem;
    }
</style>