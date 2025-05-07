<script lang="ts">
    import type { CartItem } from '../../types';
    import { createEventDispatcher } from 'svelte';
  
    export let cart: CartItem[];
  
    const dispatch = createEventDispatcher<{ remove: number }>();
  
    function handleRemove(id: number) {
      dispatch('remove', id);
    }
  
    $: total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
</script>
  
<div class="card">
    {#if cart.length > 0}
        <ul>
            {#each cart as item}
                <li class="cartItem">
                    <span>{item.name} x {item.qty}</span>
                    <button on:click={() => handleRemove(item.id)}>Remove</button>
                </li>
            {/each}
        </ul>
        <p><strong>Total:</strong>{total}€</p>
    {:else}
        <p>No items in cart.</p>
    {/if}
</div>

<style>
    .card {
      background-color: #4a4a4a;
      border: 1px solid #848484;
      border-radius: 8px;
      padding: 1rem;
      margin-bottom: 1rem;
    }

    .cartItem{
        margin-bottom: 0.8rem;
        gap: 2rem;
        display: flex;
        justify-content: space-between;
    }


    button {
      background-color: #e5501e;
      color: white;
      border: none;
      padding: 0.4rem 0.8rem;
      border-radius: 4px;
      cursor: pointer;
      margin-left: 1rem;
      transition: all 0.3s ease;
    }

    button:hover {
      background-color: #c01515;
    }
</style>



  