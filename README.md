# Gisacona Trans Company Profile

Website profil perusahaan (*company profile*) untuk Gisacona Trans, penyedia layanan sewa truk dan logistik di Indonesia.

## Arsitektur & Teknologi Baru
Website ini baru saja dimigrasikan ke arsitektur Single Page Application (SPA) modern untuk performa yang lebih cepat dan *developer experience* yang lebih baik:
- **ReactJS 18**
- **Vite** (Build Tool)
- **React Router v6** (Client-side Routing)
- **Vanilla CSS** (dengan variabel CSS dan struktur Flexbox/Grid modern)

## Cara Menjalankan Proyek Secara Lokal

Pastikan Anda memiliki **Node.js** terinstal di sistem Anda, lalu jalankan perintah berikut di terminal:

```bash
# 1. Install semua dependensi proyek
npm install

# 2. Jalankan server pengembangan (Development Server)
npm run dev
```
Setelah server berjalan, buka URL yang tertera di terminal (biasanya `http://localhost:5173`) di browser Anda.

## Cara Build untuk Produksi
Untuk melakukan *build* ke versi produksi yang telah dioptimasi, jalankan:
```bash
npm run build
```
Hasil build akan tersedia di dalam folder `dist/`.

## Fitur Utama
- **Desain Modern & Responsif**: Berjalan mulus di Desktop, Laptop, Tablet, dan Smartphone.
- **Transisi Halus SPA**: Berpindah halaman tanpa *reload* secara instan.
- **Scroll Reveal Animations**: Animasi *fade-in* kustom berbasiskan `Intersection Observer`.
- **Lightbox Galeri**: Galeri foto yang dapat difilter dan diklik untuk tampilan penuh.
