<script lang="ts">
  const values = [
    {
      icon: '🤝',
      title: 'Gotong Royong',
      desc: 'Bekerja sama sebagai satu kelompok tani demi kesejahteraan bersama.',
    },
    {
      icon: '💯',
      title: 'Kejujuran',
      desc: 'Transparan dalam takaran, mutu, dan harga kepada setiap mitra.',
    },
    {
      icon: '🌾',
      title: 'Kualitas',
      desc: 'Menjaga standar hasil panen dari lahan hingga ke tangan pelanggan.',
    },
    {
      icon: '♻️',
      title: 'Keberlanjutan',
      desc: 'Merawat tanah dan lingkungan agar tetap subur untuk generasi berikutnya.',
    },
  ]

  const timeline = [
    { year: '2009', text: 'Berawal dari lahan keluarga seluas 2 hektar di Lembang.' },
    { year: '2014', text: 'Membentuk kelompok tani mitra bersama petani sekitar Ciwidey.' },
    { year: '2019', text: 'Memperluas jaringan distribusi ke pasar induk se-Jawa Barat.' },
    { year: '2026', text: 'Mengelola 450+ hektar lahan bersama 250+ petani mitra di Bandung Raya.' },
  ]

  const locations = ['Lembang', 'Pangalengan', 'Ciwidey', 'Cikajang']
</script>

<svelte:head>
  <title>Tentang Kami — Tani Bawang Bandung</title>
</svelte:head>

<!-- Header -->
<section class="relative overflow-hidden bg-gradient-to-b from-red-50 via-white to-white">
  <div class="pointer-events-none absolute inset-0 flag-pattern opacity-[0.05]"></div>
  <div class="mx-auto max-w-6xl px-5 py-16 text-center md:px-8 md:py-20">
    <span
      class="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-4 py-1.5 text-xs font-semibold text-brand-red"
    >
      🇮🇩 Tentang Kami
    </span>
    <h1 class="mx-auto mt-5 max-w-2xl text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
      Berakar dari Tanah Bandung, Tumbuh untuk Kedaulatan Pangan
    </h1>
    <p class="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-600">
      Tani Bawang Bandung adalah kelompok tani mitra yang lahir dari semangat kemandirian
      dan gotong royong petani lokal di dataran tinggi Bandung Raya.
    </p>
  </div>
</section>

<!-- Cerita -->
<section class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
  <div class="grid gap-12 md:grid-cols-2 md:items-center">
    <div>
      <p class="text-sm font-semibold uppercase tracking-wide text-brand-red">Cerita Kami</p>
      <h2 class="mt-2 text-3xl font-bold text-neutral-900">Dari Ladang Keluarga menjadi Mitra Petani Bandung Raya</h2>
      <p class="mt-4 text-sm leading-relaxed text-neutral-600">
        Bermula dari sebidang lahan keluarga di Lembang, kami tumbuh bersama para petani di
        sekitar dataran tinggi Bandung. Dengan tanah vulkanik yang subur dan udara sejuk,
        kawasan ini menjadi rumah terbaik bagi budidaya bawang merah, bawang putih, dan
        bawang bombay.
      </p>
      <p class="mt-4 text-sm leading-relaxed text-neutral-600">
        Kini kami menaungi ratusan petani mitra yang bekerja dengan semangat gotong royong —
        mewujudkan kemandirian pangan sebagaimana cita-cita kemerdekaan bangsa: berdaulat
        di atas tanah sendiri.
      </p>
    </div>

    <div class="space-y-4">
      {#each timeline as t}
        <div class="flex gap-4 rounded-2xl border border-neutral-100 p-5">
          <div
            class="flex h-12 w-16 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-sm font-bold text-brand-red"
          >
            {t.year}
          </div>
          <p class="text-sm leading-relaxed text-neutral-700">{t.text}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Visi Misi -->
<section class="bg-neutral-50 py-16 md:py-20">
  <div class="mx-auto max-w-6xl px-5 md:px-8">
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-100">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-2xl">
          🎯
        </div>
        <h3 class="mt-4 text-xl font-bold text-neutral-900">Visi</h3>
        <p class="mt-3 text-sm leading-relaxed text-neutral-600">
          Menjadi kelompok tani bawang terdepan di Jawa Barat yang berdaulat, berdaya
          saing, dan berkelanjutan untuk mendukung ketahanan pangan nasional.
        </p>
      </div>
      <div class="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-100">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/15 text-2xl">
          🚩
        </div>
        <h3 class="mt-4 text-xl font-bold text-neutral-900">Misi</h3>
        <ul class="mt-3 space-y-2 text-sm leading-relaxed text-neutral-600">
          <li>• Meningkatkan kesejahteraan petani mitra melalui harga yang adil.</li>
          <li>• Menjaga mutu hasil panen dengan praktik budidaya berkelanjutan.</li>
          <li>• Memperluas akses pasar bagi produk bawang lokal Bandung.</li>
          <li>• Mendukung kemandirian pangan Indonesia dari hulu ke hilir.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Nilai -->
<section class="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
  <div class="mx-auto max-w-2xl text-center">
    <p class="text-sm font-semibold uppercase tracking-wide text-brand-red">Nilai Kami</p>
    <h2 class="mt-2 text-3xl font-bold text-neutral-900">Prinsip yang Kami Pegang</h2>
  </div>

  <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {#each values as v}
      <div class="rounded-2xl border border-neutral-100 p-6 text-center">
        <div
          class="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-2xl"
        >
          {v.icon}
        </div>
        <h3 class="mt-4 text-base font-bold text-neutral-900">{v.title}</h3>
        <p class="mt-2 text-sm leading-relaxed text-neutral-600">{v.desc}</p>
      </div>
    {/each}
  </div>
</section>

<!-- Lokasi lahan -->
<section class="pb-16 md:pb-20">
  <div class="mx-auto max-w-6xl px-5 md:px-8">
    <div
      class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-red to-brand-red-dark px-8 py-14 text-center shadow-xl"
    >
      <div class="pointer-events-none absolute inset-0 flag-pattern opacity-10"></div>
      <p class="relative text-sm font-semibold uppercase tracking-wide text-white/80">
        Lahan Mitra Kami
      </p>
      <h2 class="relative mx-auto mt-3 max-w-xl text-3xl font-extrabold text-white">
        Tersebar di Dataran Tinggi Bandung Raya
      </h2>
      <div class="relative mt-7 flex flex-wrap justify-center gap-3">
        {#each locations as loc}
          <span class="rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white">
            📍 {loc}
          </span>
        {/each}
      </div>
    </div>
  </div>
</section>
