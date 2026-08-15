<script lang="ts">
  const info = [
    {
      icon: '📍',
      title: 'Alamat',
      lines: ['Jl. Raya Lembang KM 12', 'Kab. Bandung Barat, Jawa Barat 40391'],
    },
    {
      icon: '📞',
      title: 'Telepon / WhatsApp',
      lines: ['+62 812-3456-7890', 'Senin – Sabtu, 08.00 – 17.00 WIB'],
    },
    {
      icon: '✉️',
      title: 'Email',
      lines: ['halo@tanibawangbandung.id', 'kerjasama@tanibawangbandung.id'],
    },
  ]

  let name = $state('')
  let email = $state('')
  let phone = $state('')
  let message = $state('')
  let submitted = $state(false)
  let error = $state('')

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) {
      error = 'Mohon lengkapi nama, email, dan pesan Anda.'
      return
    }
    error = ''
    submitted = true
    name = ''
    email = ''
    phone = ''
    message = ''
  }
</script>

<svelte:head>
  <title>Kontak — Tani Bawang Bandung</title>
</svelte:head>

<!-- Header -->
<section class="relative overflow-hidden bg-gradient-to-b from-red-50 via-white to-white">
  <div class="pointer-events-none absolute inset-0 flag-pattern opacity-[0.05]"></div>
  <div class="mx-auto max-w-6xl px-5 py-16 text-center md:px-8 md:py-20">
    <span
      class="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-4 py-1.5 text-xs font-semibold text-brand-red"
    >
      🇮🇩 Hubungi Kami
    </span>
    <h1 class="mx-auto mt-5 max-w-2xl text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
      Mari Bermitra dengan Kami
    </h1>
    <p class="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-600">
      Ada pertanyaan seputar produk, harga, atau kerja sama distribusi? Tim kami siap
      membantu.
    </p>
  </div>
</section>

<!-- Info cards -->
<section class="mx-auto max-w-6xl px-5 md:px-8">
  <div class="grid gap-6 sm:grid-cols-3">
    {#each info as item}
      <div class="rounded-2xl border border-neutral-100 p-6 text-center shadow-sm">
        <div
          class="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-2xl"
        >
          {item.icon}
        </div>
        <h3 class="mt-4 text-base font-bold text-neutral-900">{item.title}</h3>
        {#each item.lines as line}
          <p class="mt-1 text-sm text-neutral-600">{line}</p>
        {/each}
      </div>
    {/each}
  </div>
</section>

<!-- Form + Map -->
<section class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
  <div class="grid gap-10 lg:grid-cols-2">
    <div class="rounded-3xl border border-neutral-100 p-7 shadow-sm md:p-9">
      <h2 class="text-2xl font-bold text-neutral-900">Kirim Pesan</h2>
      <p class="mt-2 text-sm text-neutral-600">
        Isi formulir di bawah ini dan kami akan segera menghubungi Anda kembali.
      </p>

      {#if submitted}
        <div class="mt-6 rounded-2xl bg-green-50 p-6 text-center">
          <p class="text-3xl">✅</p>
          <p class="mt-3 text-sm font-semibold text-green-800">
            Terima kasih! Pesan Anda telah terkirim.
          </p>
          <p class="mt-1 text-sm text-green-700">
            Tim kami akan segera menghubungi Anda melalui email atau telepon.
          </p>
          <button
            class="mt-4 text-sm font-semibold text-brand-red underline"
            onclick={() => (submitted = false)}
          >
            Kirim pesan lain
          </button>
        </div>
      {:else}
        <form class="mt-6 space-y-4" onsubmit={handleSubmit}>
          {#if error}
            <p class="rounded-xl bg-red-50 px-4 py-3 text-sm text-brand-red">{error}</p>
          {/if}
          <div>
            <label for="name" class="text-sm font-semibold text-neutral-800">Nama Lengkap</label>
            <input
              id="name"
              type="text"
              bind:value={name}
              placeholder="Nama Anda"
              class="mt-1.5 w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
            />
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label for="email" class="text-sm font-semibold text-neutral-800">Email</label>
              <input
                id="email"
                type="email"
                bind:value={email}
                placeholder="nama@email.com"
                class="mt-1.5 w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
              />
            </div>
            <div>
              <label for="phone" class="text-sm font-semibold text-neutral-800">No. HP / WhatsApp</label>
              <input
                id="phone"
                type="tel"
                bind:value={phone}
                placeholder="08xx-xxxx-xxxx"
                class="mt-1.5 w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
              />
            </div>
          </div>
          <div>
            <label for="message" class="text-sm font-semibold text-neutral-800">Pesan</label>
            <textarea
              id="message"
              bind:value={message}
              rows="4"
              placeholder="Tuliskan kebutuhan atau pertanyaan Anda..."
              class="mt-1.5 w-full resize-none rounded-xl border border-neutral-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full rounded-xl bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-red/30 transition-transform hover:scale-[1.01] hover:bg-brand-red-dark"
          >
            Kirim Pesan
          </button>
        </form>
      {/if}
    </div>

    <div class="flex flex-col gap-6">
      <div class="overflow-hidden rounded-3xl border border-neutral-100 shadow-sm">
        <iframe
          title="Lokasi Tani Bawang Bandung"
          class="h-72 w-full md:h-full"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Lembang%2C+Bandung+Barat&t=&z=12&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
      <div
        class="rounded-2xl bg-gradient-to-r from-brand-red to-brand-red-dark p-6 text-center text-white"
      >
        <p class="text-sm font-semibold">Butuh respons cepat?</p>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noreferrer"
          class="mt-3 inline-block rounded-full bg-white px-6 py-2.5 text-sm font-bold text-brand-red transition-transform hover:scale-105"
        >
          💬 Chat via WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>
