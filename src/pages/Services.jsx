import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import heroTruck from '../assets/images/hero_truck.png';
import cddBox from '../assets/images/cdd_box.png';
import fusoWingbox from '../assets/images/fuso_wingbox.png';
import trailerTruck from '../assets/images/trailer_truck.png';

const fleet = [
  {
    img: cddBox,
    icon: 'fa-box',
    title: 'Colt Diesel Double (CDD) Box',
    desc: 'Sangat andal untuk rute antarkota dengan fleksibilitas manuver yang baik. Box tertutup dari bahan alumunium atau besi kokoh memastikan barang logistik Anda tetap kering dan aman.',
    specs: [
      ['Berat Muatan Maks', '4 - 5 Ton'],
      ['Kapasitas Volume', '14 CBM (Meter Kubik)'],
      ['Dimensi Box (PxLxT)', '4.2m x 2.0m x 2.0m'],
      ['Ideal Untuk', 'FMCG, Elektronik, Ritel, Furniture'],
    ],
    query: 'cdd',
  },
  {
    img: fusoWingbox,
    icon: 'fa-truck-ramp-box',
    title: 'Fuso Wingbox',
    desc: 'Truk favorit sektor industri manufaktur besar. Desain box bersayap memungkinkan pembukaan penuh dari sisi kanan dan kiri, mempercepat proses loading & unloading barang menggunakan forklift.',
    specs: [
      ['Berat Muatan Maks', '15 - 18 Ton'],
      ['Kapasitas Volume', '45 CBM (Meter Kubik)'],
      ['Dimensi Box (PxLxT)', '9.6m x 2.4m x 2.5m'],
      ['Ideal Untuk', 'Hasil Pabrik, Palet Logistik, Mesin Industri'],
    ],
    query: 'fuso',
  },
  {
    img: trailerTruck,
    icon: 'fa-truck-container',
    title: 'Trailer / Container',
    desc: 'Solusi logistik darat untuk pengangkutan beban super berat. Kami menawarkan sasis flatbed trailer berukuran 20 feet dan 40 feet untuk peti kemas atau material berat non-container.',
    specs: [
      ['Berat Muatan Maks', '25 - 32 Ton'],
      ['Ukuran Trailer', '20 Feet / 40 Feet Standard'],
      ['Dimensi Flatbed (PxLxT)', '12.2m x 2.4m x 1.5m'],
      ['Ideal Untuk', 'Kontainer Impor/Ekspor, Konstruksi Baja, Semen'],
    ],
    query: 'trailer',
  },
];

const steps = [
  { step: 'Langkah 01', title: 'Konsultasi Kebutuhan', desc: 'Hubungi staf Customer Service kami melalui email, telepon, atau form kontak untuk mendiskusikan tipe truk, rute tujuan, serta volume muatan Anda.' },
  { step: 'Langkah 02', title: 'Dapatkan Penawaran Resmi', desc: 'Kami akan menghitung tarif sewa yang kompetitif berdasarkan rute dan jenis truk, lalu mengirimkan proposal penawaran harga resmi (Quotation).' },
  { step: 'Langkah 03', title: 'Konfirmasi & DP', desc: 'Lakukan penandatanganan kesepakatan dan pembayaran uang muka (Down Payment/DP) sesuai nominal yang disepakati untuk reservasi jadwal armada.' },
  { step: 'Langkah 04', title: 'Pengiriman & Pelunasan', desc: 'Truk dan driver kami akan datang tepat waktu ke lokasi loading point. Setelah pengiriman selesai dengan bukti serah terima (Surat Jalan/POD), pelunasan dapat diselesaikan.' },
];

export default function Services() {
  useEffect(() => {
    document.title = 'Layanan & Armada | Gisacona Trans';
  }, []);

  return (
    <>
      {/* SUB HERO */}
      <section className="sub-hero" style={{
        padding: '140px 0 80px 0',
        background: `linear-gradient(rgba(15,23,42,0.85),rgba(15,23,42,0.95)), url(${heroTruck}) no-repeat center center/cover`,
        color: 'var(--text-light)',
        textAlign: 'center',
      }}>
        <div className="container">
          <h1 className="sub-hero-title" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '12px' }}>Layanan &amp; Armada</h1>
          <div className="breadcrumbs" style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
            <Link to="/" style={{ color: 'var(--accent)' }}>Beranda</Link> &nbsp;/&nbsp; <span>Layanan &amp; Armada</span>
          </div>
        </div>
      </section>

      {/* FLEET CATALOG */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">Katalog Truk</span>
              <h2 className="section-title">Pilihan Armada Gisacona Trans</h2>
              <p className="section-subtitle">Berikut adalah detail spesifikasi dan kegunaan utama dari armada pengiriman logistik yang kami sediakan.</p>
            </div>
          </ScrollReveal>

          {fleet.map((item, idx) => (
            <ScrollReveal key={item.title}>
              <div className="catalog-item" style={{
                backgroundColor: 'var(--bg-white)',
                borderRadius: 'var(--border-radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-color)',
                marginBottom: '60px',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: idx % 2 === 1 ? 'row-reverse' : 'row',
                  flexWrap: 'wrap',
                }}>
                  <div style={{ flex: '1 1 300px', minHeight: '300px', position: 'relative' }}>
                    <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ flex: '1 1 300px', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <i className={`fa-solid ${item.icon}`} style={{ color: 'var(--accent)' }}></i> {item.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>{item.desc}</p>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '30px' }}>
                      <tbody>
                        {item.specs.map(([label, val]) => (
                          <tr key={label}>
                            <td style={{ padding: '12px 0', borderBottom: '1px solid var(--border-color)', fontWeight: 600, width: '40%', fontSize: '0.95rem' }}>{label}</td>
                            <td style={{ padding: '12px 0', borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.95rem' }}>{val}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div>
                      <Link to={`/contact?armada=${item.query}`} className="btn btn-primary">Sewa Armada Ini</Link>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* RENTAL PROCEDURE */}
      <section className="section section-light">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">Cara Pemesanan</span>
              <h2 className="section-title">Alur Prosedur Penyewaan</h2>
              <p className="section-subtitle">Prosedur sewa truk di Gisacona Trans sangat mudah dan transparan demi kemudahan bisnis Anda.</p>
            </div>
          </ScrollReveal>

          <div style={{ maxWidth: '700px', margin: '40px auto 0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {steps.map((s, i) => (
              <ScrollReveal key={s.step} delay={(i % 4) + 1}>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', background: 'var(--accent)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', flexShrink: 0 }}>{i + 1}</div>
                  <div style={{ background: 'var(--bg-white)', padding: '24px', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--shadow-md)', flex: 1 }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>{s.step}</div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{s.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
