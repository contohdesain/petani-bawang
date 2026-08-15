<script lang="ts">
  import { currentPath } from './lib/router'
  import Nav from './lib/Nav.svelte'
  import Footer from './lib/Footer.svelte'
  import Home from './routes/Home.svelte'
  import About from './routes/About.svelte'
  import Contact from './routes/Contact.svelte'
</script>

<div class="flex min-h-screen flex-col bg-white">
  <Nav />

  <main class="flex-1">
    {#if $currentPath === '/about'}
      <About />
    {:else if $currentPath === '/contact'}
      <Contact />
    {:else}
      <Home />
    {/if}
  </main>

  <Footer />
</div>
