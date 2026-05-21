import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-info">
            <Link to="/" className="footer-logo">Dev<span>Insight</span></Link>
            <p>2026년 최신 IT 트렌드, 웹 프론트엔드 개발 가이드 및 AI 도구 활용법을 깊이 있게 다루는 전문 기술 블로그입니다.</p>
          </div>

          <div className="footer-links">
            <h4>사이트 메뉴</h4>
            <ul>
              <li><Link to="/">홈</Link></li>
              <li><Link to="/about">소개</Link></li>
              <li><Link to="/contact">문의하기</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>법적 고지</h4>
            <ul>
              <li><Link to="/privacy">개인정보처리방침</Link></li>
              <li><Link to="/terms">이용약관</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 DevInsight. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #0f1115;
          padding: 5rem 0 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .footer-info {
            grid-column: span 2;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-info {
            grid-column: span 1;
          }
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: #fff;
          text-decoration: none;
          margin-bottom: 1.5rem;
          display: inline-block;
        }
        .footer-logo span {
          color: #3b82f6;
        }
        .footer-info p {
          color: rgba(255, 255, 255, 0.5);
          max-width: 100%;
          line-height: 1.6;
          word-break: keep-all;
        }
        .footer h4 {
          color: #fff;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        .footer ul {
          list-style: none;
          padding: 0;
        }
        .footer li {
          margin-bottom: 0.8rem;
        }
        .footer li a {
          color: rgba(255, 255, 255, 0.5);
          transition: color 0.3s ease;
          font-size: 0.95rem;
          text-decoration: none;
        }
        .footer li a:hover {
          color: #3b82f6;
        }
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
        }
        .footer-bottom p {
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.85rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

