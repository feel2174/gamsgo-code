import { Helmet } from 'react-helmet-async';
import { LayoutGrid, Cloud, ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const GeminiDiscount = () => {
  return (
    <div className="page-content">
      <Helmet>
        <title>구글 제미나이 어드밴스드 할인: 월 3,500원 이용법 | 겜스고</title>
        <meta name="description" content="구글 제미나이(Google Gemini Advanced)를 월 3,500원에 이용하는 초저가 할인 팁! 겜스고 프로모션 코드 TA9Y3를 활용하세요." />
        <meta name="keywords" content="제미나이 할인, Google Gemini Advanced 가격, 겜스고 제미나이, 구글 AI 할인, 제미나이 어드밴스드 저렴하게" />
        <link rel="canonical" href="https://gamsgocode.co.kr/google-gemini-discount" />
      </Helmet>

      <section className="hero-sub gemini-theme">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-sub-content"
          >
            <div className="badge">Google AI 특가</div>
            <h1>구글 제미나이 할인 받는 법<br className="mo-only" /> <span>월 3,500원의 압도적 가성비</span></h1>
            <div className="hero-sub-p-wrapper">
              <p>구글 원(Google One) 2TB와 제미나이 어드밴스드를 훨씬 저렴한 가격에! 겜스고가 제안하는 2026년형 AI 구독 최적화 전략.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <div className="card-grid">
            <motion.div
              whileHover={{ y: -10 }}
              className="info-card"
            >
              <LayoutGrid className="icon" size={48} color="#4285f4" />
              <h3>강력한 Google 생태계</h3>
              <p>제미나이 어드밴스드뿐만 아니라 구글 독스, 드라이브 등 협업 툴에서의 AI 기능을 모두 경험할 수 있습니다.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="info-card highlight-gemini"
            >
              <Cloud className="icon pulse" size={48} color="#4285f4" />
              <h3>월 3,500원의 놀라움</h3>
              <p>기존 구독료 대비 80% 이상 저렴한 가격! 겜스고의 안전한 공유 인프라 덕분에 가능합니다.</p>
              <a href="https://www.gamsgo.com/partner/Chgyp" target="_blank" rel="noopener noreferrer" className="btn-gemini">
                지금 할인 적용하기 <ArrowRight size={18} />
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="info-card"
            >
              <ShieldCheck className="icon" size={48} color="#34a853" />
              <h3>공식 파트너 혜택</h3>
              <p>추가 할인코드 <strong>TA9Y3</strong>를 잊지 마세요. 결제 시 입력하면 즉시 할인이 적용됩니다.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="content-detail">
        <div className="container">
          <div className="text-content">
            <h2>제미나이 할인 후기 더보기</h2>
            <p>월 3,500원의 저렴한 가격으로 제미나이 어드밴스드를 직접 사용해본 이용자들의 생생한 후기를 읽어보세요.</p>
            <a href="https://zucca100.com/google-gemini-halin-wol-3500won/"
              target="_blank" rel="noopener noreferrer" className="external-link gemini-color">
              <ExternalLink size={20} /> 월 3,500원 이용 후기
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-content {
          padding-top: 80px;
          background: #050505;
          color: #fff;
          overflow-x: hidden;
        }
        .hero-sub {
          padding: 8rem 0 5rem;
          background: radial-gradient(circle at center, rgba(66, 133, 244, 0.1) 0%, transparent 70%);
        }
        .hero-sub-content {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .badge {
          display: inline-block;
          background: rgba(66, 133, 244, 0.15);
          color: #4285f4;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.85rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(66, 133, 244, 0.2);
          letter-spacing: 0.05em;
        }
        h1 {
          font-size: clamp(2.5rem, 6vw, 4.2rem);
          line-height: 1.1;
          margin-bottom: 2rem;
          word-break: keep-all;
        }
        h1 span {
          background: linear-gradient(135deg, #fff 0%, #4285f4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-sub-p-wrapper {
          max-width: 700px;
        }
        .hero-sub-p-wrapper p {
          font-size: clamp(1.1rem, 1.8vw, 1.35rem);
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          word-break: keep-all;
        }
        
        .mo-only { display: none; }
        
        @media (max-width: 768px) {
          .hero-sub { padding: 4rem 0 3rem; }
          .mo-only { display: block; }
          h1 { font-size: 2.5rem; margin-bottom: 1.5rem; }
        }

        .info-section {
          padding: 4rem 1.5rem;
        }
        .card-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 1024px) {
          .card-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .card-grid { grid-template-columns: 1fr; }
        }

        .info-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 3rem 2rem;
          border-radius: 32px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
        }
        .info-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
        }
        .info-card.highlight-gemini {
          background: linear-gradient(180deg, rgba(66, 133, 244, 0.12) 0%, rgba(66, 133, 244, 0.02) 100%);
          border: 1px solid rgba(66, 133, 244, 0.3);
        }
        .icon {
          margin-bottom: 1.5rem;
        }
        h3 {
          font-size: 1.5rem;
          margin-bottom: 1.2rem;
          color: #fff;
        }
        .info-card p {
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          word-break: keep-all;
        }
        .btn-gemini {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          background: #4285f4;
          color: #fff;
          padding: 1rem 1.8rem;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 700;
          margin-top: 1.5rem;
          transition: all 0.3s ease;
        }
        .btn-gemini:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 20px rgba(66, 133, 244, 0.25);
        }
        .content-detail {
          padding: 6rem 1.5rem 10rem;
        }
        .text-content {
          max-width: 860px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.02);
          padding: 4rem 2rem;
          border-radius: 40px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .text-content h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }
        .text-content p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.7);
        }
        .external-link {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          color: #4285f4;
          font-weight: 700;
          text-decoration: none;
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          background: rgba(66, 133, 244, 0.1);
          transition: all 0.3s ease;
        }
        .external-link:hover {
          background: rgba(66, 133, 244, 0.2);
        }
        .pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default GeminiDiscount;
