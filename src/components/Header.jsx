import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '홈 (Home)', path: '/' },
    { name: '소개 (About)', path: '/about' },
    { name: '문의 (Contact)', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          Dev<span>Insight</span>
        </Link>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={location.pathname === link.path ? 'active' : ''}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }
        .header.scrolled {
          padding: 1rem 0;
          background: rgba(10, 10, 10, 0.9);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1.5rem;
        }
        .logo {
          font-size: 1.8rem;
          font-weight: 800;
          color: #fff;
          text-decoration: none;
          letter-spacing: -1px;
        }
        .logo span {
          color: #3b82f6; /* Blue accent */
        }
        .desktop-nav {
          display: none;
          gap: 2.5rem;
          align-items: center;
        }
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
          }
        }
        .desktop-nav a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          transition: color 0.3s ease;
        }
        .desktop-nav a:hover, .desktop-nav a.active {
          color: #fff;
        }
        .mobile-menu-toggle {
          display: block;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
        }
        @media (min-width: 768px) {
          .mobile-menu-toggle {
            display: none;
          }
        }
        .mobile-nav {
          position: fixed;
          top: 0;
          right: -100%;
          width: 70%;
          height: 100vh;
          background: #0f1115;
          display: flex;
          flex-direction: column;
          padding: 6rem 2rem;
          gap: 1.5rem;
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 999;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
        }
        .mobile-nav.open {
          right: 0;
        }
        .mobile-nav a {
          color: #fff;
          font-size: 1.2rem;
          text-decoration: none;
          font-weight: 600;
        }
      `}</style>
    </header>
  );
};

export default Header;
