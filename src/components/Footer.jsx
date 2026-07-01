import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container footer-top">
        <div className="grid grid-4">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <div className="logo-icon">G</div>
              <div className="logo-text">GISACONA<span>TRANS</span></div>
            </Link>
            <p className="footer-desc">Solusi pengiriman logistik terpercaya di Indonesia dengan penyediaan armada truk terlengkap dan prima untuk bisnis Anda.</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="social-link" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="social-link" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Navigasi</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Beranda</Link></li>
              <li><Link to="/about" className="footer-link">Tentang Kami</Link></li>
              <li><Link to="/services" className="footer-link">Layanan &amp; Armada</Link></li>
              <li><Link to="/gallery" className="footer-link">Galeri</Link></li>
              <li><Link to="/contact" className="footer-link">Hubungi Kami</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Layanan</h3>
            <ul className="footer-links">
              <li><Link to="/services" className="footer-link">Sewa CDD Box</Link></li>
              <li><Link to="/services" className="footer-link">Sewa Fuso Wingbox</Link></li>
              <li><Link to="/services" className="footer-link">Sewa Trailer Container</Link></li>
              <li><Link to="/services" className="footer-link">Logistik Korporat</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Hubungi Kami</h3>
            <ul className="contact-info-list">
              <li className="contact-info-item">
                <i className="fa-solid fa-map-marker-alt"></i>
                <span>Jl. Sulawesi no.24 Blok DM14 no. 24, Kunciran, Pinang, Tangerang</span>
              </li>
              <li className="contact-info-item">
                <i className="fa-solid fa-phone"></i>
                <span>0858 1377 4902</span>
              </li>
              <li className="contact-info-item">
                <i className="fa-solid fa-envelope"></i>
                <span>info@gisaconatrans.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="footer-copyright">&copy; 2026 Gisacona Trans. Hak Cipta Dilindungi Undang-Undang.</p>
        <div className="footer-bottom-links">
          <a href="#" className="footer-bottom-link">Kebijakan Privasi</a>
          <a href="#" className="footer-bottom-link">Syarat &amp; Ketentuan</a>
        </div>
      </div>
    </footer>
  );
}
