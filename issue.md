# Rencana Implementasi Website Gisacona Trans (ReactJS + Vite)

Website *company profile* untuk **Gisacona Trans** (penyewaan truk) awalnya dibangun menggunakan teknologi murni (HTML, CSS, JavaScript). Kini, proyek ini **telah dimigrasikan** menggunakan **ReactJS dan Vite** untuk menghadirkan pengalaman navigasi Single Page Application (SPA) yang dinamis, cepat, dan responsif.

## Panduan Desain (UI/UX)
- **Tipografi**: Menggunakan font Google **"Outfit"** untuk tajuk (*headings*) yang memberikan kesan kokoh dan modern, serta **"Inter"** untuk teks paragraf demi keterbacaan yang maksimal.
- **Palet Warna**:
  - *Primary*: Biru Tua (*Deep Navy/Slate*) - Menggambarkan kepercayaan, profesionalisme, dan keamanan.
  - *Accent*: Oranye Keemasan (*Amber/Orange*) - Mewakili energi, pergerakan, dan logistik/transportasi.
  - *Background*: Putih bersih dan Abu-abu sangat terang untuk membedakan antar seksi (*sections*).
- **Estetika & Animasi**:
  - Menggunakan efek kaca (*glassmorphism*) pada navigasi yang menempel di atas (*sticky navbar*).
  - Animasi mikro (*micro-animations*) pada tombol saat disentuh (hover).
  - Elemen akan muncul perlahan dari bawah/samping saat halaman digulir ke bawah (*scroll fade-in animations* kustom memanfaatkan hook `useEffect` dan `IntersectionObserver`).
- **Responsivitas**: Desain *Mobile-First*, memanfaatkan CSS Flexbox dan Grid untuk memastikan tampilan sempurna di HP, Tablet, dan Desktop.

## Struktur Komponen (React)
Website sekarang menggunakan pendekatan *Component-based* dan diatur melalui `react-router-dom`:
1. `Home.jsx` (Home) - Beranda dengan *Hero Banner* besar, ringkasan layanan, dan *Call to Action* (CTA).
2. `About.jsx` (About Us) - Sejarah perusahaan, visi-misi, dan nilai perusahaan.
3. `Services.jsx` (Services) - Detail layanan dan jenis armada truk yang disewakan.
4. `Gallery.jsx` (Gallery) - Foto-foto armada truk dan operasional Gisacona Trans dengan filter interaktif dan lightbox.
5. `Contact.jsx` (Contact Us) - Informasi kontak, lokasi peta, dan formulir pesan dengan *controlled state*.

## Struktur File Proyek Saat Ini
```text
/
├── public/
├── src/
│   ├── assets/
│   │   └── images/       (Gambar-gambar armada dan hero)
│   ├── components/
│   │   ├── Navbar.jsx    (Navigasi responsif)
│   │   ├── Footer.jsx    (Footer web)
│   │   └── ScrollReveal.jsx (Komponen animasi scroll)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   └── style.css     (Global stylesheet)
│   ├── App.jsx           (Konfigurasi React Router)
│   └── main.jsx          (Titik masuk aplikasi React)
├── index.html            (Titik masuk Vite)
├── package.json
└── vite.config.js
```
