import { Link } from 'react-router-dom';
import { Mail, Shield, Zap, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <Link to="/" className="footer-logo">GamsGo<span>PROMO</span></Link>
            <p>2026년 최신 GamsGo 프로모션 코드 TA9Y3를 통해 유튜브 프리미엄, 넷플릭스, ChatGPT 등 프리미엄 서비스를 업계 최저가로 이용하세요.</p>
          </div>

          <div className="footer-links">
            <h4>서비스 가이드</h4>
            <ul>
              <li><Link to="/youtube-premium-bypass">유튜브 프리미엄 우회</Link></li>
              <li><Link to="/chatgpt-plus-discount">ChatGPT 플러스 할인</Link></li>
              <li><Link to="/google-gemini-discount">구글 제미나이 할인</Link></li>
              <li><Link to="/gpt5-vs-claude4">AI 성능 비교</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>고객 지원</h4>
            <ul>
              <li><a href="https://www.gamsgo.com/partner/Chgyp" target="_blank" rel="noopener noreferrer">공식 사이트 <ExternalLink size={14} /></a></li>
              <li><a href="#faq">자주 묻는 질문</a></li>
              <li><a href="mailto:support@gamsgocode.co.kr">문의하기</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 GamsGo Promo Guide. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #050505;
          padding: 5rem 0 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
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
          color: #ff3e00;
        }
        .footer-info p {
          color: rgba(255, 255, 255, 0.5);
          max-width: 100%;
          line-height: 1.6;
          word-break: keep-all;
        }
        h4 {
          color: #fff;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        ul {
          list-style: none;
        }
        li {
          margin-bottom: 0.8rem;
        }
        li a {
          color: rgba(255, 255, 255, 0.5);
          transition: color 0.3s ease;
          font-size: 0.95rem;
        }
        li a:hover {
          color: #ff3e00;
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
