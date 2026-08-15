<script lang="ts">
  import { currentPath, href, link } from './router'

  let open = $state(false)

  const menu = [
    { href: '/', label: 'Beranda' },
    { href: '/about', label: 'Tentang' },
    { href: '/contact', label: 'Kontak' },
  ]

  function close() {
    open = false
  }
</script>

<header class="sticky top-0 z-50 border-b border-brand-red/10 bg-white/90 backdrop-blur">
  <div class="h-1 w-full bg-gradient-to-r from-brand-red via-brand-gold to-brand-red"></div>
  <nav class="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
    <a href={href("/")} use:link class="flex items-center gap-2.5">
      <span
        class="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-lg shadow-sm"
      >
        🧅
      </span>
      <span class="leading-tight">
        <span class="block text-[15px] font-bold tracking-tight text-neutral-900"
          >Tani Bawang</span
        >
        <span class="block text-[11px] font-medium tracking-wide text-brand-red uppercase"
          >Bandung Raya</span
        >
      </span>
    </a>

    <div class="hidden items-center gap-1 md:flex">
      {#each menu as item}
        <a
          href={href(item.href)}
          use:link
          class="rounded-full px-4 py-2 text-sm font-semibold transition-colors {$currentPath ===
          item.href
            ? 'bg-brand-red/10 text-brand-red'
            : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'}"
        >
          {item.label}
        </a>
      {/each}
      <a
        href={href("/contact")}
        use:link
        class="ml-2 rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-brand-red/30 transition-transform hover:scale-[1.03] hover:bg-brand-red-dark"
      >
        Pesan Sekarang
      </a>
    </div>

    <button
      class="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 text-neutral-700 md:hidden"
      aria-label="Buka menu"
      onclick={() => (open = !open)}
    >
      {#if open}
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      {:else}
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      {/if}
    </button>
  </nav>

  {#if open}
    <div class="border-t border-neutral-100 bg-white px-5 py-3 md:hidden">
      <div class="flex flex-col gap-1">
        {#each menu as item}
          <a
            href={href(item.href)}
            use:link
            onclick={close}
            class="rounded-lg px-3 py-2.5 text-sm font-semibold {$currentPath === item.href
              ? 'bg-brand-red/10 text-brand-red'
              : 'text-neutral-700'}"
          >
            {item.label}
          </a>
        {/each}
        <a
          href={href("/contact")}
          use:link
          onclick={close}
          class="mt-1 rounded-lg bg-brand-red px-3 py-2.5 text-center text-sm font-semibold text-white"
        >
          Pesan Sekarang
        </a>
      </div>
    </div>
  {/if}
</header>
