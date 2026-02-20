import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '홈', path: '/' },
    { name: '유튜브 프리미엄', path: '/youtube-premium-bypass' },
    { name: 'ChatGPT 할인', path: '/chatgpt-plus-discount' },
    { name: '제미나이 할인', path: '/google-gemini-discount' },
    { name: 'AI 성능 비교', path: '/gpt5-vs-claude4' },
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
      <div className="container">
        <Link to="/" className="logo">
          GamsGo<span>PROMO</span>
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
          <a href="https://www.gamsgo.com/partner/Chgyp" target="_blank" rel="noopener noreferrer" className="cta-button">
            할인받기 <ExternalLink size={16} />
          </a>
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
        <a href="https://www.gamsgo.com/partner/Chgyp" target="_blank" rel="noopener noreferrer" className="mobile-cta">
          GamsGo 공식 사이트 바로가기
        </a>
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
          background: rgba(10, 10, 10, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1.5rem;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: #fff;
          text-decoration: none;
          letter-spacing: -1px;
          white-space: nowrap;
        }
        @media (max-width: 380px) {
          .logo {
            font-size: 1.2rem;
          }
        }
        .logo span {
          color: #ff3e00;
        }
        .desktop-nav {
          display: none;
          gap: 2rem;
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
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }
        .desktop-nav a:hover, .desktop-nav a.active {
          color: #fff;
        }
        .cta-button {
          background: #ff3e00;
          color: #fff !important;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600 !important;
          transition: transform 0.3s ease, box-shadow 0.3s ease !important;
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 62, 0, 0.3);
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
          width: 80%;
          height: 100vh;
          background: #0a0a0a;
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
        .mobile-cta {
          margin-top: auto;
          background: #333;
          text-align: center;
          padding: 1rem;
          border-radius: 12px;
          font-size: 1rem !important;
        }
      `}</style>
    </header>
  );
};

export default Header;
