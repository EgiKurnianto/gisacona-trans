import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import heroTruck from '../assets/images/hero_truck.png';
import cddBox from '../assets/images/cdd_box.png';
import fusoWingbox from '../assets/images/fuso_wingbox.png';
import trailerTruck from '../assets/images/trailer_truck.png';
import warehouse from '../assets/images/warehouse.png';

const galleryItems = [
  { img: cddBox, category: 'cdd', label: 'CDD Box', title: 'Colt Diesel Double Box', alt: 'Colt Diesel Double Box Ready di Gudang Hub' },
  { img: fusoWingbox, category: 'fuso', label: 'Fuso Wingbox', title: 'Fuso Wingbox', alt: 'Fuso Wingbox untuk Angkutan Pabrik' },
  { img: trailerTruck, category: 'trailer', label: 'Trailer', title: 'Trailer Flatbed', alt: 'Trailer Container Pengiriman Antar Provinsi' },
  { img: warehouse, category: 'warehouse', label: 'Warehouse', title: 'Logistik Hub Gudang', alt: 'Fasilitas Pergudangan Modern Gisacona Trans' },
  { img: heroTruck, category: 'trailer', label: 'Trailer', title: 'Pengiriman Kontainer', alt: 'Armada Trailer Melintasi Jalur Tol Trans Jawa' },
  { img: cddBox, category: 'cdd', label: 'CDD Box', title: 'CDD Box Operasional', alt: 'Persiapan Driver CDD Box Sebelum Keberangkatan' },
];

const filters = [
  { key: 'all', label: 'Semua Foto' },
  { key: 'cdd', label: 'CDD Box' },
  { key: 'fuso', label: 'Fuso Wingbox' },
  { key: 'trailer', label: 'Trailer' },
  { key: 'warehouse', label: 'Gudang / Operasional' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    document.title = 'Galeri Armada & Kegiatan | Gisacona Trans';
  }, []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  const filtered = activeFilter === 'all' ? galleryItems : galleryItems.filter(i => i.category === activeFilter);

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
          <h1 className="sub-hero-title" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '12px' }}>Galeri Foto</h1>
          <div className="breadcrumbs" style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
            <Link to="/" style={{ color: 'var(--accent)' }}>Beranda</Link> &nbsp;/&nbsp; <span>Galeri</span>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">Dokumentasi</span>
              <h2 className="section-title">Armada &amp; Operasional Kami</h2>
              <p className="section-subtitle">Tinjau kesiapan armada truk dan aktivitas pergudangan kami dalam mengelola logistik pengiriman.</p>
            </div>
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal>
            <div className="gallery-filters" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '48px' }}>
              {filters.map(f => (
                <button
                  key={f.key}
                  className={`filter-btn${activeFilter === f.key ? ' active' : ''}`}
                  onClick={() => setActiveFilter(f.key)}
                  style={{
                    background: activeFilter === f.key ? 'var(--accent)' : 'var(--bg-light)',
                    color: activeFilter === f.key ? '#fff' : 'var(--text-dark)',
                    border: `1px solid ${activeFilter === f.key ? 'var(--accent)' : 'var(--border-color)'}`,
                    padding: '10px 24px', borderRadius: '30px', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
                    transition: 'var(--transition-normal)',
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Gallery Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {filtered.map((item, i) => (
              <ScrollReveal key={`${item.category}-${i}`} delay={(i % 4) + 1}>
                <div
                  className="gallery-item"
                  style={{ position: 'relative', borderRadius: 'var(--border-radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', aspectRatio: '4/3', cursor: 'zoom-in' }}
                  onClick={() => setLightbox(item)}
                >
                  <img src={item.img} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition-slow)' }} />
                  <div className="gallery-overlay" style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.2))',
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                    padding: '24px', opacity: 0, transition: 'var(--transition-normal)',
                  }}>
                    <span style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '4px' }}>{item.label}</span>
                    <h3 style={{ color: 'var(--text-light)', fontSize: '1.15rem', fontWeight: 600 }}>{item.title}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(9,13,22,0.95)', zIndex: 2000,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', padding: '24px',
          }}
          onClick={() => setLightbox(null)}
        >
          <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '80vh' }} onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              style={{ position: 'absolute', top: '-40px', right: 0, color: '#fff', fontSize: '2rem', cursor: 'pointer', background: 'none', border: 'none' }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img
              src={lightbox.img}
              alt={lightbox.alt}
              style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: 'var(--border-radius-sm)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', animation: 'zoomIn 0.3s ease' }}
            />
          </div>
          <div style={{ color: '#fff', marginTop: '16px', fontSize: '1.1rem', fontWeight: 500 }}>{lightbox.title}</div>
        </div>
      )}

      <style>{`
        .gallery-item:hover img { transform: scale(1.08); }
        .gallery-item:hover .gallery-overlay { opacity: 1 !important; }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </>
  );
}
