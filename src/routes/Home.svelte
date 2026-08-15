<script lang="ts">
  import { href, link } from '../lib/router'

  const features = [
    {
      icon: '🌾',
      title: 'Kualitas Premium',
      desc: 'Dipanen dari dataran tinggi 1.200–1.600 mdpl dengan tanah vulkanik subur khas Bandung.',
    },
    {
      icon: '🤝',
      title: 'Gotong Royong Petani',
      desc: 'Dikelola langsung oleh kelompok tani mitra binaan, menjaga kesejahteraan petani lokal.',
    },
    {
      icon: '🌱',
      title: 'Ramah Lingkungan',
      desc: 'Praktik tanam berkelanjutan, minim pestisida kimia, menjaga kelestarian lahan.',
    },
    {
      icon: '🚚',
      title: 'Siap Kirim Nasional',
      desc: 'Distribusi ke pasar induk, ritel modern, hingga UMKM di seluruh Indonesia.',
    },
  ]

  const products = [
    {
      emoji: '🧅',
      name: 'Bawang Merah',
      desc: 'Umbi padat, warna merah pekat, rasa tajam khas dataran tinggi Bandung.',
      tag: 'Best Seller',
    },
    {
      emoji: '🧄',
      name: 'Bawang Putih',
      desc: 'Aroma kuat, ukuran seragam, cocok untuk kebutuhan rumah tangga & industri.',
      tag: 'Kualitas Ekspor',
    },
    {
      emoji: '🥔',
      name: 'Bawang Bombay',
      desc: 'Tekstur renyah dan manis, hasil budidaya varietas unggul dataran tinggi.',
      tag: 'Panen Segar',
    },
  ]

  const stats = [
    { value: '17+', label: 'Tahun Pengalaman Bertani' },
    { value: '250+', label: 'Petani Mitra' },
    { value: '450 Ha', label: 'Luas Lahan Tani' },
    { value: '81', label: 'Semangat Kemerdekaan RI' },
  ]

  const testimonials = [
    {
      quote:
        'Bawang merahnya konsisten kualitasnya, umbinya besar dan tahan lama. Sudah jadi langganan tetap untuk restoran kami.',
      name: 'Bu Ratna',
      role: 'Pemilik Warung Makan, Bandung',
    },
    {
      quote:
        'Pengiriman selalu tepat waktu dan harga bersaing untuk kebutuhan pasar. Kerja sama yang saling menguntungkan.',
      name: 'Pak Dedi',
      role: 'Pedagang Pasar Induk Caringin',
    },
    {
      quote:
        'Senang bisa mendukung petani lokal. Kualitas bawang putihnya setara produk impor, tapi harga lebih terjangkau.',
      name: 'Chef Andra',
      role: 'Restoran Bandung Culinary',
    },
  ]
</script>

<svelte:head>
  <title>Tani Bawang Bandung — Bawang Berkualitas untuk Kedaulatan Pangan</title>
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden bg-gradient-to-b from-red-50 via-white to-white">
  <div class="pointer-events-none absolute inset-0 flag-pattern opacity-[0.05]"></div>
  <div class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
    <div class="grid items-center gap-12 md:grid-cols-2">
      <div>
        <span
          class="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-4 py-1.5 text-xs font-semibold text-brand-red"
        >
          🇮🇩 Menyambut HUT Kemerdekaan RI ke-81
        </span>
        <h1 class="mt-5 text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
          Bawang Berkualitas dari
          <span class="text-brand-red">Dataran Tinggi Bandung</span>
          untuk Kedaulatan Pangan Bangsa
        </h1>
        <p class="mt-5 max-w-lg text-base leading-relaxed text-neutral-600">
          Kami adalah kelompok tani mitra di Bandung Raya yang menanam dan memasok bawang
          merah, bawang putih, serta bawang bombay segar berkualitas tinggi — dengan
          semangat gotong royong dan kemandirian pangan Indonesia.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a
            href={href('/contact')}
            use:link
            class="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-red/30 transition-transform hover:scale-[1.03] hover:bg-brand-red-dark"
          >
            Hubungi Kami
          </a>
          <a
            href={href('/about')}
            use:link
            class="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:border-brand-red hover:text-brand-red"
          >
            Kenali Kami Lebih Jauh
          </a>
        </div>
      </div>

      <div class="relative">
        <div
          class="relative rounded-3xl border border-brand-red/10 bg-white p-8 shadow-xl shadow-brand-red/5"
        >
          <div class="grid grid-cols-2 gap-4">
            {#each stats as s}
              <div
                class="rounded-2xl border border-neutral-100 bg-gradient-to-br from-red-50 to-white p-5 text-center"
              >
                <p class="text-2xl font-extrabold text-brand-red md:text-3xl">{s.value}</p>
                <p class="mt-1 text-xs font-medium text-neutral-500">{s.label}</p>
              </div>
            {/each}
          </div>
          <div
            class="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 py-3 text-sm font-semibold text-white"
          >
            <span>🌾</span> Ditanam &amp; Dipanen Petani Lokal Bandung
          </div>
        </div>
        <div
          class="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-brand-gold/20 md:-bottom-6 md:-right-6"
        ></div>
      </div>
    </div>
  </div>
</section>

<!-- Galeri -->
<section class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
  <div class="mx-auto max-w-2xl text-center">
    <p class="text-sm font-semibold uppercase tracking-wide text-brand-red">Galeri Kami</p>
    <h2 class="mt-2 text-3xl font-bold text-neutral-900">Dari Lahan hingga Panen</h2>
    <p class="mt-3 text-neutral-600">
      Sekilas suasana lahan, petani mitra, dan hasil panen bawang segar dari dataran tinggi
      Bandung.
    </p>
  </div>

  <div class="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
    <figure class="group relative col-span-2 row-span-2 overflow-hidden rounded-2xl">
      <img
        src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1000&q=70"
        alt="Lahan pertanian bawang di dataran tinggi Bandung dilihat dari udara"
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <figcaption
        class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm font-semibold text-white"
      >
        Lahan Tani di Dataran Tinggi Bandung
      </figcaption>
    </figure>

    <figure class="group relative overflow-hidden rounded-2xl">
      <img
        src="https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=600&q=70"
        alt="Panen bawang merah segar"
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <figcaption
        class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs font-semibold text-white"
      >
        Panen Bawang Merah
      </figcaption>
    </figure>

    <figure class="group relative overflow-hidden rounded-2xl">
      <img
        src="https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?auto=format&fit=crop&w=600&q=70"
        alt="Bawang bombay segar hasil panen"
        loading="lazy"
        class="h-full w-full bg-white object-contain p-4 transition-transform duration-500 group-hover:scale-105"
      />
      <figcaption
        class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs font-semibold text-white"
      >
        Bawang Bombay Pilihan
      </figcaption>
    </figure>

    <figure class="group relative col-span-2 overflow-hidden rounded-2xl">
      <img
        src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=70"
        alt="Petani mitra bekerja sama di ladang dengan semangat gotong royong"
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <figcaption
        class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs font-semibold text-white"
      >
        Gotong Royong Petani Mitra
      </figcaption>
    </figure>
  </div>
</section>

<!-- Keunggulan -->
<section class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
  <div class="mx-auto max-w-2xl text-center">
    <p class="text-sm font-semibold uppercase tracking-wide text-brand-red">Keunggulan Kami</p>
    <h2 class="mt-2 text-3xl font-bold text-neutral-900">Mengapa Memilih Kami</h2>
    <p class="mt-3 text-neutral-600">
      Berkomitmen menghadirkan hasil bumi terbaik dari tangan petani Bandung dengan standar
      mutu yang terjaga.
    </p>
  </div>

  <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {#each features as f}
      <div
        class="group rounded-2xl border border-neutral-100 p-6 transition-shadow hover:shadow-lg hover:shadow-brand-red/5"
      >
        <div
          class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-2xl transition-colors group-hover:bg-brand-red/15"
        >
          {f.icon}
        </div>
        <h3 class="mt-4 text-base font-bold text-neutral-900">{f.title}</h3>
        <p class="mt-2 text-sm leading-relaxed text-neutral-600">{f.desc}</p>
      </div>
    {/each}
  </div>
</section>

<!-- Produk -->
<section class="bg-neutral-50 py-16 md:py-20">
  <div class="mx-auto max-w-6xl px-5 md:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <p class="text-sm font-semibold uppercase tracking-wide text-brand-red">Produk Unggulan</p>
      <h2 class="mt-2 text-3xl font-bold text-neutral-900">Hasil Panen Terbaik</h2>
      <p class="mt-3 text-neutral-600">
        Tiga komoditas utama yang kami budidayakan dengan perawatan intensif dari lahan
        hingga panen.
      </p>
    </div>

    <div class="mt-12 grid gap-6 md:grid-cols-3">
      {#each products as p}
        <div
          class="relative overflow-hidden rounded-2xl bg-white p-7 shadow-sm ring-1 ring-neutral-100 transition-transform hover:-translate-y-1 hover:shadow-lg"
        >
          <span
            class="absolute right-5 top-5 rounded-full bg-brand-gold/15 px-3 py-1 text-[11px] font-bold text-brand-gold-dark"
          >
            {p.tag}
          </span>
          <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-4xl">
            {p.emoji}
          </div>
          <h3 class="mt-5 text-lg font-bold text-neutral-900">{p.name}</h3>
          <p class="mt-2 text-sm leading-relaxed text-neutral-600">{p.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Testimoni -->
<section class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
  <div class="mx-auto max-w-2xl text-center">
    <p class="text-sm font-semibold uppercase tracking-wide text-brand-red">Testimoni</p>
    <h2 class="mt-2 text-3xl font-bold text-neutral-900">Kata Mitra Kami</h2>
  </div>

  <div class="mt-12 grid gap-6 md:grid-cols-3">
    {#each testimonials as t}
      <div class="flex flex-col rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
        <p class="text-3xl text-brand-red/30">&ldquo;</p>
        <p class="-mt-3 flex-1 text-sm italic leading-relaxed text-neutral-700">{t.quote}</p>
        <div class="mt-5 border-t border-neutral-100 pt-4">
          <p class="text-sm font-bold text-neutral-900">{t.name}</p>
          <p class="text-xs text-neutral-500">{t.role}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- CTA -->
<section class="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-20">
  <div
    class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-red to-brand-red-dark px-8 py-14 text-center shadow-xl"
  >
    <div class="pointer-events-none absolute inset-0 flag-pattern opacity-10"></div>
    <p class="relative text-sm font-semibold uppercase tracking-wide text-white/80">
      Merdeka Bertani, Berdaulat Pangan
    </p>
    <h2 class="relative mx-auto mt-3 max-w-xl text-3xl font-extrabold text-white">
      Mari Bermitra untuk Kebutuhan Bawang Berkualitas Anda
    </h2>
    <p class="relative mx-auto mt-3 max-w-lg text-sm text-white/90">
      Hubungi kami untuk informasi harga, ketersediaan stok, dan kerja sama distribusi.
    </p>
    <a
      href={href('/contact')}
      use:link
      class="relative mt-7 inline-block rounded-full bg-white px-7 py-3 text-sm font-bold text-brand-red shadow-lg transition-transform hover:scale-105"
    >
      Hubungi Kami Sekarang
    </a>
  </div>
</section>
