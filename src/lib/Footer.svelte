<script lang="ts">
  import { href, link } from './router'
  const year = new Date().getFullYear()
</script>

<footer class="relative overflow-hidden bg-neutral-950 text-neutral-300">
  <div class="h-1.5 w-full bg-gradient-to-r from-brand-red via-brand-gold to-brand-red"></div>

  <div class="mx-auto max-w-6xl px-5 py-14 md:px-8">
    <div class="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <div class="flex items-center gap-2.5">
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-lg">
            🧅
          </span>
          <span class="text-base font-bold text-white">Tani Bawang Bandung</span>
        </div>
        <p class="mt-4 max-w-sm text-sm leading-relaxed text-neutral-400">
          Kelompok tani mitra dari dataran tinggi Lembang, Pangalengan, dan Ciwidey yang
          memasok bawang merah, bawang putih, dan bawang bombay berkualitas untuk mendukung
          kedaulatan pangan Indonesia.
        </p>
        <p class="mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-brand-gold uppercase">
          <span>🇮🇩</span> Merdeka Bertani, Berdaulat Pangan
        </p>
      </div>

      <div>
        <h3 class="text-sm font-semibold text-white">Tautan</h3>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li><a href={href('/')} use:link class="hover:text-white">Beranda</a></li>
          <li><a href={href('/about')} use:link class="hover:text-white">Tentang Kami</a></li>
          <li><a href={href('/contact')} use:link class="hover:text-white">Kontak</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-semibold text-white">Kontak</h3>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li class="flex gap-2">
            <span>📍</span>
            <span>Jl. Raya Lembang KM 12, Kab. Bandung Barat, Jawa Barat</span>
          </li>
          <li class="flex gap-2">
            <span>📞</span>
            <span>+62 812-3456-7890</span>
          </li>
          <li class="flex gap-2">
            <span>✉️</span>
            <span>halo@tanibawangbandung.id</span>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-neutral-500 md:flex-row"
    >
      <p>&copy; {year} Tani Bawang Bandung. Seluruh hak cipta dilindungi.</p>
      <p>Dibuat dengan bangga oleh petani lokal Bandung Raya.</p>
    </div>
  </div>
</footer>
