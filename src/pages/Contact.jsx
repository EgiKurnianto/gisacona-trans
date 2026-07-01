import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import heroTruck from '../assets/images/hero_truck.png';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState({ name: '', email: '', phone: '', armada: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Hubungi Kami | Gisacona Trans';
  }, []);

  useEffect(() => {
    const armada = searchParams.get('armada');
    if (armada) setForm(f => ({ ...f, armada }));
  }, [searchParams]);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', armada: '', message: '' });
  };

  return (
    <>
      {/* SUB HERO */}
      <section className="sub-hero" style={{
        padding: '140px 0 80px 0',
        background: `linear-gradient(rgba(15,23,42,0.85),rgba(15,23,42,0.95)), url(${heroTruck}) no-repeat center center/cover`,
        color: 'var(--text-light)', textAlign: 'center',
      }}>
        <div className="container">
          <h1 className="sub-hero-title" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '12px' }}>Hubungi Kami</h1>
          <div className="breadcrumbs" style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
            <Link to="/" style={{ color: 'var(--accent)' }}>Beranda</Link> &nbsp;/&nbsp; <span>Hubungi Kami</span>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2 contact-grid">
            {/* Info Card */}
            <ScrollReveal direction="left">
              <div className="contact-info-card" style={{ background: 'var(--primary)', color: '#fff', padding: '48px', borderRadius: 'var(--border-radius-md)' }}>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '12px' }}>Hubungi Kantor Kami</h3>
                <p style={{ color: '#94a3b8', marginBottom: '32px' }}>Silakan pilih jalur kontak yang paling mudah bagi Anda untuk berkonsultasi mengenai kebutuhan logistik perusahaan Anda.</p>

                <div className="contact-detail-list" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {[
                    { icon: 'fa-location-dot', label: 'Alamat Kantor', lines: ['Jl. Sulawesi no.24 Blok DM14 no. 24,', 'Kunciran, Pinang, Tangerang'] },
                    { icon: 'fa-phone', label: 'Hubungi Kami', lines: ['0858 1377 4902'] },
                    { icon: 'fa-envelope', label: 'Email Resmi', lines: ['info@gisaconatrans.com', 'sales@gisaconatrans.com'] },
                    { icon: 'fa-clock', label: 'Jam Operasional', lines: ['Senin - Sabtu: 08:00 - 17:00 WIB', 'Layanan Sewa & Driver: 24 Jam Nonstop'] },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <div style={{ width: '44px', height: '44px', background: 'rgba(249,115,22,0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <i className={`fa-solid ${item.icon}`} style={{ color: 'var(--accent)' }}></i>
                      </div>
                      <div>
                        <h4 style={{ color: '#fff', marginBottom: '4px', fontSize: '0.95rem' }}>{item.label}</h4>
                        {item.lines.map(l => <p key={l} style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{l}</p>)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="social-links" style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
                  {[['fa-facebook-f', 'Facebook'], ['fa-instagram', 'Instagram'], ['fa-linkedin-in', 'LinkedIn']].map(([icon, label]) => (
                    <a key={label} href="#" aria-label={label} style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'var(--transition-normal)' }}>
                      <i className={`fa-brands ${icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Form Card */}
            <ScrollReveal direction="right">
              <div className="contact-form-card" style={{ background: 'var(--bg-white)', padding: '48px', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--shadow-premium)' }}>
                <h3 style={{ marginBottom: '8px' }}>Kirim Pesan</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Kirim pesan kepada tim sales kami, kami akan menghubungi Anda dalam waktu maksimal 1x24 jam.</p>

                {submitted && (
                  <div style={{ background: '#d1fae5', color: '#065f46', padding: '16px', borderRadius: '8px', marginBottom: '24px', fontWeight: 600 }}>
                    ✅ Pesan Anda berhasil terkirim! Kami akan segera menghubungi Anda.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', fontSize: '0.9rem' }}>Nama Lengkap *</label>
                      <input name="name" type="text" className="form-control" placeholder="Masukkan nama Anda" value={form.name} onChange={handleChange} required style={{ width: '100%', padding: '12px 16px', border: '1.5px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', fontSize: '0.95rem' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', fontSize: '0.9rem' }}>Alamat Email *</label>
                      <input name="email" type="email" className="form-control" placeholder="contoh@email.com" value={form.email} onChange={handleChange} required style={{ width: '100%', padding: '12px 16px', border: '1.5px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', fontSize: '0.95rem' }} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', fontSize: '0.9rem' }}>Nomor Telepon / WA</label>
                      <input name="phone" type="tel" className="form-control" placeholder="08xxxxxxxxxx" value={form.phone} onChange={handleChange} style={{ width: '100%', padding: '12px 16px', border: '1.5px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', fontSize: '0.95rem' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', fontSize: '0.9rem' }}>Tipe Armada</label>
                      <select name="armada" className="form-control" value={form.armada} onChange={handleChange} style={{ width: '100%', padding: '12px 16px', border: '1.5px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', fontSize: '0.95rem' }}>
                        <option value="">-- Pilih Tipe Armada (Opsional) --</option>
                        <option value="cdd">Colt Diesel Double (CDD) Box</option>
                        <option value="fuso">Fuso Wingbox</option>
                        <option value="trailer">Trailer / Container</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', fontSize: '0.9rem' }}>Pesan / Detail Kebutuhan Sewa *</label>
                    <textarea name="message" className="form-control" placeholder="Tuliskan detail barang yang akan dikirim, rute tujuan, serta tanggal pengiriman..." value={form.message} onChange={handleChange} required style={{ width: '100%', padding: '12px 16px', border: '1.5px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', fontSize: '0.95rem', minHeight: '120px', resize: 'vertical' }}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Kirim Pesan</button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ borderRadius: 'var(--border-radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-premium)', border: '1px solid var(--border-color)' }}>
              <iframe
                width="100%"
                height="450"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://www.openstreetmap.org/export/embed.html?bbox=106.8778%2C-6.1287%2C106.9078%2C-6.1087&layer=mapnik&marker=-6.1187%2C106.8928"
                style={{ border: 0, display: 'block' }}
                title="Lokasi Kantor Gisacona Trans"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
