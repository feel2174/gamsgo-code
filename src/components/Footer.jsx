import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-info">
            <Link to="/" className="footer-logo">Dev<span>Insight</span></Link>
            <p>2026년 최신 IT 트렌드, 웹 프론트엔드 개발 가이드, AI 도구 활용법과 배포 전 점검 자료를 정리하는 기술 블로그입니다.</p>
          </div>

          <div className="footer-links">
            <h4>사이트 메뉴</h4>
            <ul>
              <li><Link to="/">홈</Link></li>
              <li><Link to="/resources">자료실</Link></li>
              <li><Link to="/checklist">체크리스트</Link></li>
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
    </footer>
  );
};

export default Footer;
