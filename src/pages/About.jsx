import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import warehouse from '../assets/images/warehouse.png';

export default function About() {
  useEffect(() => {
    document.title = 'Tentang Kami | Gisacona Trans';
  }, []);

  return (
    <>
      {/* SUB HERO */}
      <section className="sub-hero" style={{
        padding: '140px 0 80px 0',
        background: `linear-gradient(rgba(15,23,42,0.85),rgba(15,23,42,0.95)), url(${warehouse}) no-repeat center center/cover`,
        color: 'var(--text-light)',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 className="sub-hero-title" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '12px' }}>Tentang Kami</h1>
          <div className="breadcrumbs" style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
            <Link to="/" style={{ color: 'var(--accent)' }}>Beranda</Link> &nbsp;/&nbsp; <span>Tentang Kami</span>
          </div>
        </div>
      </section>

      {/* COMPANY PROFILE */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2 profile-grid" style={{ alignItems: 'center' }}>
            <ScrollReveal direction="left">
              <div className="profile-text">
                <span className="section-tag">Profil Perusahaan</span>
                <h2 style={{ fontSize: '2.2rem', marginBottom: '24px' }}>Sejarah Gisacona Trans</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>Didirikan dengan tekad untuk mendukung kemajuan sektor industri dan perdagangan di Indonesia, Gisacona Trans telah berkembang menjadi salah satu penyedia jasa rental truk dan logistik darat yang terkemuka di tanah air.</p>
                <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>Kami menyadari bahwa ketepatan waktu, keselamatan barang, dan ketersediaan armada yang tangguh adalah kunci sukses logistik bisnis Anda. Oleh karena itu, sejak awal beroperasi, kami berkomitmen untuk menempatkan kepuasan dan kepercayaan pelanggan sebagai prioritas nomor satu.</p>
                <p style={{ color: 'var(--text-muted)' }}>Hingga saat ini, kami telah melayani ratusan korporasi, UMKM, dan industri manufaktur dalam memperlancar jalur supply chain mereka dengan ketersediaan berbagai tipe armada truk modern yang selalu siap jalan.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="profile-img-wrapper" style={{ borderRadius: 'var(--border-radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-premium)' }}>
                <img src={warehouse} alt="Warehouse Gisacona Trans" style={{ width: '100%', display: 'block' }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section section-light">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">Visi &amp; Misi</span>
              <h2 className="section-title">Arah Dan Landasan Kerja Kami</h2>
              <p className="section-subtitle">Menjadi mitra logistik darat yang andal dan menjadi pilihan utama untuk mendukung akselerasi bisnis di Indonesia.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-2" style={{ gap: '40px' }}>
            <ScrollReveal direction="left">
              <div className="vm-card" style={{ background: 'var(--bg-white)', padding: '48px', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--shadow-md)', borderTop: '4px solid var(--accent)', height: '100%' }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <i className="fa-solid fa-eye" style={{ color: 'var(--accent)' }}></i> Visi Kami
                </h3>
                <p style={{ color: 'var(--text-muted)' }}>Menjadi perusahaan jasa penyewaan truk dan logistik darat yang paling terpercaya, inovatif, dan berstandar internasional di Indonesia, memberikan kontribusi nyata dalam melancarkan rantai pasok nasional.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="vm-card" style={{ background: 'var(--bg-white)', padding: '48px', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--shadow-md)', borderTop: '4px solid var(--accent)', height: '100%' }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <i className="fa-solid fa-bullseye" style={{ color: 'var(--accent)' }}></i> Misi Kami
                </h3>
                <ul style={{ marginTop: '16px' }}>
                  {[
                    'Menyediakan armada truk berkualitas tinggi yang aman, ramah lingkungan, dan terawat secara berkala.',
                    'Menyajikan solusi pengiriman barang yang tepat waktu, efisien, dan berorientasi pada keselamatan kargo.',
                    'Meningkatkan kompetensi pengemudi dan staf operasional secara profesional berkelanjutan.',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '12px', marginBottom: '14px', color: 'var(--text-muted)' }}>
                      <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent)', marginTop: '4px', flexShrink: 0 }}></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">Nilai Kami</span>
              <h2 className="section-title">Nilai Utama Perusahaan</h2>
              <p className="section-subtitle">Nilai-nilai dasar yang dipegang teguh oleh setiap tim Gisacona Trans dalam melayani pelanggan kami setiap hari.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-4">
            {[
              { num: '01', title: 'Integritas', desc: 'Kejujuran dan transparansi dalam setiap transaksi sewa dan status pengiriman barang Anda.' },
              { num: '02', title: 'Reliabilitas', desc: 'Keandalan armada dan kepastian pelayanan untuk menjaga kepuasan mitra bisnis kami.' },
              { num: '03', title: 'Keselamatan', desc: 'Menerapkan standar keamanan berkendara yang ketat demi keutuhan barang kargo sampai tujuan.' },
              { num: '04', title: 'Profesional', desc: 'Didukung oleh kru, driver, dan CS yang berkompeten di bidang logistik darat.' },
            ].map((v, i) => (
              <ScrollReveal key={v.num} delay={i + 1}>
                <div className="value-card" style={{ backgroundColor: 'var(--bg-light)', padding: '32px', borderRadius: 'var(--border-radius-md)', transition: 'var(--transition-normal)', border: '1px solid transparent' }}>
                  <div className="value-number" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'rgba(249,115,22,0.15)', lineHeight: 1, marginBottom: '16px' }}>{v.num}</div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{v.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
