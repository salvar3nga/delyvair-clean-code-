<script lang="ts">

// State
  let products = [
    { id: 1, name: 'Book', price: 12 },
    { id: 2, name: 'Pen', price: 2 },
    { id: 3, name: 'Notebook', price: 5 }
  ];

  let cart : any[] = [];


// Functions

  function add(p: any) {
    cart.push({ ...p, qty: 1 }); // BUG 1: does not check if item already exists
    cart = [...cart]
  }

  function remove(pId: any) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === pId) {
        cart.splice(i, 1);
      }
    }
    cart = [...cart]
  }

  function sum() {
    let sum = 0;
    for (let j = 0; j < cart.length; j++) {
      sum = cart[j].price * cart[j].qty; // BUG 2: overwrites instead of accumulates
    }
    return sum;
  }
</script>


<h2>Products</h2>
{#each products as p}
  <div class="product">
    {p.name} - ${p.price}
    <button on:click={() => add(p)}>Add</button>
  </div>
{/each}

<h2>Cart</h2>
<ul>
  {#if cart.length === 0}
    <p>No items in cart.</p>
  {:else}
    {#each cart as item}
      <li>
        {item.name} x {item.qty}
        <button on:click={() => remove(item.id)}>Remove</button>
      </li>
    {/each}
  {/if}
  
</ul>

<p>
  <strong>Total:</strong> ${sum()}
</p>



<style>

  button { margin-left: 10px; }
  
</style>