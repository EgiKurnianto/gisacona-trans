# Rencana Implementasi Website Gisacona Trans

Website *company profile* untuk **Gisacona Trans** (penyewaan truk) akan dibangun menggunakan teknologi murni (HTML, CSS, JavaScript) dengan fokus pada desain yang modern, dinamis, dan responsif.

## Panduan Desain (UI/UX)
- **Tipografi**: Menggunakan font Google **"Outfit"** untuk tajuk (*headings*) yang memberikan kesan kokoh dan modern, serta **"Inter"** untuk teks paragraf demi keterbacaan yang maksimal.
- **Palet Warna**:
  - *Primary*: Biru Tua (*Deep Navy/Slate*) - Menggambarkan kepercayaan, profesionalisme, dan keamanan.
  - *Accent*: Oranye Keemasan (*Amber/Orange*) - Mewakili energi, pergerakan, dan logistik/transportasi.
  - *Background*: Putih bersih dan Abu-abu sangat terang untuk membedakan antar seksi (*sections*).
- **Estetika & Animasi**:
  - Menggunakan efek kaca (*glassmorphism*) pada navigasi yang menempel di atas (*sticky navbar*).
  - Animasi mikro (*micro-animations*) pada tombol saat disentuh (hover).
  - Elemen akan muncul perlahan dari bawah/samping saat halaman digulir ke bawah (*scroll fade-in animations* menggunakan `Intersection Observer`).
- **Responsivitas**: Desain *Mobile-First*, memanfaatkan CSS Flexbox dan Grid untuk memastikan tampilan sempurna di HP, Tablet, dan Desktop.

## Struktur Halaman
Kita akan menggunakan arsitektur **Multi-halaman (*Multi-page*)** agar lebih rapi dan baik untuk SEO, namun dengan transisi yang mulus.
Halaman yang akan dibuat:
1. `index.html` (Home) - Beranda dengan *Hero Banner* besar, ringkasan layanan, dan *Call to Action* (CTA).
2. `about.html` (About Us) - Sejarah perusahaan, visi-misi, dan nilai perusahaan.
3. `services.html` (Services) - Detail layanan dan jenis armada truk yang disewakan.
4. `gallery.html` (Gallery) - Foto-foto armada truk dan operasional Gisacona Trans.
5. `contact.html` (Contact Us) - Informasi kontak, lokasi peta, dan formulir pesan.

## Struktur File Proyek
```text
/
├── index.html
├── about.html
├── services.html
├── gallery.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    └── images/
```
