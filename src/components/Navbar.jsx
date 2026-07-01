import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(prev => {
      document.body.style.overflow = prev ? '' : 'hidden';
      return !prev;
    });
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container navbar">
        <Link to="/" className="logo">
          <div className="logo-icon">G</div>
          <div className="logo-text">GISACONA<span>TRANS</span></div>
        </Link>

        <nav className={`nav-links${menuOpen ? ' active' : ''}`}>
          <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active-link' : ''}`} end>Beranda</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' active-link' : ''}`}>Tentang Kami</NavLink>
          <NavLink to="/services" className={({ isActive }) => `nav-link${isActive ? ' active-link' : ''}`}>Layanan &amp; Armada</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => `nav-link${isActive ? ' active-link' : ''}`}>Galeri</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' active-link' : ''}`}>Hubungi Kami</NavLink>
        </nav>

        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
