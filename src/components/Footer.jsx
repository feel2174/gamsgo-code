import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-info">
            <Link to="/" className="footer-logo">GamsGo<span>Code</span></Link>
            <p>React, TypeScript, JavaScript, CSS Layout, 웹 성능과 접근성 문제를 실무 코드와 점검 기준으로 정리하는 프론트엔드 개발 자료실입니다.</p>
          </div>

          <div className="footer-links">
            <h4>사이트 메뉴</h4>
            <ul>
              <li><Link to="/">홈</Link></li>
              <li><Link to="/resources">자료실</Link></li>
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
          <p>&copy; 2026 GamsGo Code. All rights reserved.</p>
          <p className="footer-owner">김영주 <a href="mailto:devzucca@gmail.com">devzucca@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
