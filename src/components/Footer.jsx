const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-left">
                        <span className="logo">GamsGo <span className="highlight">Promo</span></span>
                        <p>유튜브 프리미엄, 넷플릭스 등 프리미엄 서비스를 가장 저렴하게 즐기는 방법.</p>
                    </div>
                    <div className="footer-right">
                        <p>© 2026 GamsGo Promo Page. All rights reserved.</p>
                        <p className="notice">본 사이트는 GamsGo의 공식 파트너 활동의 일환으로 일정액의 수수료를 제공받을 수 있습니다.</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .footer {
          padding: 4rem 0;
          border-top: 1px solid var(--glass-border);
          background: rgba(0, 0, 0, 0.3);
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text);
        }
        .highlight {
          color: var(--primary);
        }
        .footer-left p {
          color: var(--text-muted);
          margin-top: 0.5rem;
          font-size: 0.9rem;
        }
        .footer-right {
          text-align: right;
          color: var(--text-muted);
          font-size: 0.85rem;
        }
        .notice {
          margin-top: 0.5rem;
          font-size: 0.75rem;
          opacity: 0.6;
        }
        @media (max-width: 768px) {
          .footer-content { flex-direction: column; text-align: center; }
          .footer-right { text-align: center; }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
