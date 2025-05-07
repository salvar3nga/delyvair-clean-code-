<script lang="ts">
    import type { Product } from '../../types';
    import { createEventDispatcher } from 'svelte';
  
    export let products: Product[];
  
    const dispatch = createEventDispatcher<{ add: Product }>();
  
    function handleAdd(product: Product) {
      dispatch('add', product);
    }
</script>
  
<div class="card">
    {#each products as product}
        <div class="product">
            <span>{product.name} - {product.price}€</span>
            <button on:click={() => handleAdd(product)}>Add</button>
        </div>
    {/each}
</div>

<style>
    .product{
        margin-bottom: 0.5rem;
        display: flex;
        justify-content: space-between;
    }

    button {
      background-color: #1e88e5;
      color: white;
      border: none;
      padding: 0.4rem 0.8rem;
      border-radius: 4px;
      cursor: pointer;
      margin-left: 1rem;
      transition: all 0.3s ease;
    }
  
    button:hover {
      background-color: #1565c0;
    }
</style>
  