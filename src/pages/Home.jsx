import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import heroTruck from '../assets/images/hero_truck.png';
import cddBox from '../assets/images/cdd_box.png';
import fusoWingbox from '../assets/images/fuso_wingbox.png';
import trailerTruck from '../assets/images/trailer_truck.png';
import warehouse from '../assets/images/warehouse.png';

function StatItem({ number, suffix, label }) {
  const ref = useRef(null);
  const animated = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        let start = 0;
        const end = parseInt(number);
        const duration = 2000;
        const step = Math.ceil(end / (duration / 16));
        timerRef.current = setInterval(() => {
          start += step;
          if (start >= end) {
            if (ref.current) ref.current.textContent = end + (suffix || '');
            clearInterval(timerRef.current);
          } else {
            if (ref.current) ref.current.textContent = start + (suffix || '');
          }
        }, 16);
      }
    }, { threshold: 0.5 });

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [number, suffix]);

  return (
    <div className="stat-item">
      <div className="stat-number" ref={ref}>0{suffix || ''}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = 'Gisacona Trans | Solusi Penyewaan Truk Terpercaya';
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        background: `linear-gradient(rgba(15,23,42,0.75),rgba(15,23,42,0.85)), url(${heroTruck}) no-repeat center center/cover`,
        display: 'flex',
        alignItems: 'center',
        color: 'var(--text-light)',
        paddingTop: '80px'
      }}>
        <div className="container">
          <div className="hero-content reveal-left revealed" style={{ maxWidth: '700px' }}>
            <h1 className="hero-title">Solusi Sewa Truk <span>Terpercaya</span> untuk Bisnis Anda</h1>
            <p className="hero-desc">Gisacona Trans menyediakan armada truk modern dan prima untuk kebutuhan distribusi, logistik, dan pengiriman kargo Anda ke seluruh Indonesia.</p>
            <div className="hero-btns">
              <Link to="/services" className="btn btn-primary">Lihat Armada Kami</Link>
              <Link to="/contact" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}>Hubungi Kami</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section style={{ background: 'var(--bg-light)', paddingBottom: '60px' }}>
        <div className="container">
          <div className="stats-container">
            <ScrollReveal>
              <div className="stats-grid" style={{
                backgroundColor: 'var(--bg-white)',
                borderRadius: 'var(--border-radius-md)',
                boxShadow: 'var(--shadow-premium)',
                padding: '40px',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '32px'
              }}>
                <StatItem number="500" suffix="+" label="Klien Aktif" />
                <StatItem number="10" suffix="+" label="Tahun Pengalaman" />
                <StatItem number="150" suffix="+" label="Unit Armada" />
                <StatItem number="99" suffix="%" label="On-Time Delivery" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="section section-light">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">Mengapa Gisacona Trans</span>
              <h2 className="section-title">Layanan Prima, Armada Andal</h2>
              <p className="section-subtitle">Kami berkomitmen memberikan layanan logistik terbaik dengan armada terawat dan driver berpengalaman.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-3 features-grid" style={{ marginTop: '40px' }}>
            {[
              { icon: 'fa-truck', title: 'Armada Lengkap & Modern', desc: 'Tersedia pilihan truk CDD Box, Fuso Wingbox, hingga Trailer besar. Semua armada dirawat secara berkala untuk memastikan keandalan maksimal.' },
              { icon: 'fa-clock', title: 'Layanan 24 Jam Nonstop', desc: 'Tim kami siap melayani permintaan sewa dan koordinasi pengiriman selama 24 jam penuh, 7 hari seminggu tanpa libur.' },
              { icon: 'fa-shield-halved', title: 'Keselamatan Barang Terjamin', desc: 'Setiap misi pengiriman disertai SOP keselamatan ketat, asuransi kargo, dan pemantauan real-time untuk menjaga keutuhan barang.' },
            ].map((f, i) => (
              <ScrollReveal key={f.title} delay={i + 1}>
                <div className="feature-card">
                  <div className="feature-icon"><i className={`fa-solid ${f.icon}`}></i></div>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">Pilihan Armada</span>
              <h2 className="section-title">Armada Unggulan Kami</h2>
              <p className="section-subtitle">Tiga jenis kendaraan logistik unggulan kami yang siap mendukung kelancaran distribusi bisnis Anda.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-3">
            {[
              { img: cddBox, badge: 'Populer', title: 'CDD Box', desc: 'Ideal untuk pengiriman antarkota dengan kapasitas muatan 4-5 ton. Pilihan terbaik untuk FMCG dan ritel.' },
              { img: fusoWingbox, badge: 'Kapasitas Besar', title: 'Fuso Wingbox', desc: 'Kapasitas muatan 15-18 ton dengan desain bersayap untuk kemudahan bongkar muat menggunakan forklift.' },
              { img: trailerTruck, badge: 'Heavy Duty', title: 'Trailer Container', desc: 'Solusi pengiriman beban berat 25-32 ton untuk kontainer ekspor-impor dan material konstruksi berskala besar.' },
            ].map((s, i) => (
              <ScrollReveal key={s.title} delay={i + 1}>
                <div className="service-card">
                  <div className="service-img-wrapper">
                    <img src={s.img} alt={s.title} />
                    <span className="service-badge">{s.badge}</span>
                  </div>
                  <div className="service-content">
                    <h3 className="service-card-title">{s.title}</h3>
                    <p className="service-card-desc">{s.desc}</p>
                    <Link to="/services" className="service-link">Lihat Detail <i className="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/services" className="btn btn-primary">Lihat Semua Layanan</Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section" style={{
        background: `linear-gradient(rgba(15,23,42,0.9),rgba(15,23,42,0.95)), url(${warehouse}) no-repeat center center/cover`,
        padding: '120px 0',
        textAlign: 'center',
        color: 'var(--text-light)'
      }}>
        <div className="container">
          <ScrollReveal>
            <div className="cta-content" style={{ maxWidth: '750px', margin: '0 auto' }}>
              <h2 className="cta-title" style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '24px' }}>
                Siap Memperlancar Logistik Bisnis Anda?
              </h2>
              <p className="cta-desc" style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '40px' }}>
                Konsultasikan kebutuhan armada truk Anda sekarang dan dapatkan penawaran terbaik dari tim kami.
              </p>
              <div className="cta-btns">
                <Link to="/contact" className="btn btn-primary">Dapatkan Penawaran</Link>
                <a href="tel:085813774902" className="btn btn-white">
                  <i className="fa-solid fa-phone" style={{ marginRight: '8px' }}></i>0858 1377 4902
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
