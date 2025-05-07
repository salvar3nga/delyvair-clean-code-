
---

# 👋 Intro to Svelte 

Svelte is a modern JavaScript framework for building user interfaces. Unlike React or Vue, **Svelte compiles your components into highly efficient JavaScript code** — there's no virtual DOM.

Here’s a super quick intro to get you started.

---

## 🧱 Svelte File Structure

A `.svelte` file contains three parts:

```svelte
<script lang="ts">
  // your logic (TypeScript/JavaScript)
</script>

<style>
  /* your styles */
</style>

<!-- your markup -->
<h1>Hello World</h1>
```

## 🔁 Reactivity

Svelte tracks changes automatically, but only when you reassign variables.

```svelte
let count = 0;

// ✅ This works
count = count + 1;

// ❌ This won't trigger UI updates
someArray.push(1);        // BAD
someArray[0] = 'changed'; // BAD

// ✅ Use:
someArray = [...someArray, 1]; // GOOD

```

## 🎯 Event Handling

Svelte uses on:click, on:input, etc. for event listeners.

```svelte
<button on:click={() => count += 1}>
  Add
</button>

```

## 📦 Passing Data Between Components

Use export let to receive props:

```svelte
<!-- ProjectList.svelte -->

<script lang="ts">

  export let projects: Project[]; // this is a prop

</script>

```

To send data back up, use events:

```svelte

import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

function handleAdd(p) {
  dispatch('addProject', p);
}
```