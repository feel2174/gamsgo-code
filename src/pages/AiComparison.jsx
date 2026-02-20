import { Helmet } from 'react-helmet-async';
import { BarChart3, Cpu, Wallet, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AiComparison = () => {
  return (
    <div className="page-content">
      <Helmet>
        <title>GPT-5.3 vs Claude Opus 4.6 성능 분석 및 구독료 70% 할인 비결</title>
        <meta name="description" content="AI 전쟁의 정점! GPT-5.3과 클로드 4.6의 성능을 전격 비교합니다. 성능 분석 결과와 함께 월 구독료를 최대 70% 아끼는 꿀팁을 확인하세요." />
        <meta name="keywords" content="GPT-5.3 성능, 클로드 4.6 비교, Claude Opus 4.6, 겜스고 할인코드, AI 구독료 절약, 챗GPT vs 클로드" />
        <link rel="canonical" href="https://gamsgocode.co.kr/gpt5-vs-claude4" />
      </Helmet>

      <section className="hero-sub ai-theme">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-sub-content"
          >
            <div className="badge">차세대 AI 비교</div>
            <h1>GPT-5.3 vs Claude 4.6<br className="mo-only" /> <span>최강의 AI는 누구인가?</span></h1>
            <div className="hero-sub-p-wrapper">
              <p>단순한 성능 비교를 넘어, 가성비까지 고려한 끝판왕 가이드. 현존하는 최고의 언어 모델들을 70% 이상 할인된 가격에 구독하는 법을 공개합니다.</p>
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
              <BarChart3 className="icon" size={48} color="#ab7fe4" />
              <h3>심층 성능 분석</h3>
              <p>코딩 능력, 논리적 사고, 창의적 글쓰기 등 각 분야별로 어떤 AI가 우세한지 데이터로 입증합니다.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="info-card highlight-ai"
            >
              <Wallet className="icon pulse" size={48} color="#ab7fe4" />
              <h3>구독료 70% 아끼기</h3>
              <p>비싼 공식 가격 대신 겜스고를 통해 두 서비스 모두를 파격적인 가격으로 이용할 수 있는 전략을 제시합니다.</p>
              <a href="https://www.gamsgo.com/partner/Chgyp" target="_blank" rel="noopener noreferrer" className="btn-ai">
                할인 혜택 확인 <ArrowRight size={18} />
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="info-card"
            >
              <Cpu className="icon" size={48} color="#888" />
              <h3>정확한 코드 적용</h3>
              <p>추가 할인코드 <strong>TA9Y3</strong>를 적용하여 최저가에 도전하세요. 모든 AI 모델을 가장 경제적으로 쓰는 법입니다.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="content-detail">
        <div className="container">
          <div className="text-content">
            <h2>성능 비교 분석 리포트</h2>
            <p>GPT-5.3과 Claude 4.6의 실제 벤치마크 테스트 결과와 상세한 비교 후기를 아래 블로그에서 확인해보세요.</p>
            <a href="https://zucca100.com/gpt-5-3-vs-claude-opus-4-6-review-discount/"
              target="_blank" rel="noopener noreferrer" className="external-link ai-color">
              <ExternalLink size={20} /> 성능 분석 & 할인법 읽기
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
          background: radial-gradient(circle at center, rgba(171, 127, 228, 0.1) 0%, transparent 70%);
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
          background: rgba(171, 127, 228, 0.15);
          color: #ab7fe4;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.85rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(171, 127, 228, 0.2);
          letter-spacing: 0.05em;
        }
        h1 {
          font-size: clamp(2.5rem, 6vw, 4.2rem);
          line-height: 1.1;
          margin-bottom: 2rem;
          word-break: keep-all;
        }
        h1 span {
          background: linear-gradient(135deg, #fff 0%, #ab7fe4 100%);
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
        .info-card.highlight-ai {
          background: linear-gradient(180deg, rgba(171, 127, 228, 0.12) 0%, rgba(171, 127, 228, 0.02) 100%);
          border: 1px solid rgba(171, 127, 228, 0.3);
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
        .btn-ai {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          background: #ab7fe4;
          color: #fff;
          padding: 1rem 1.8rem;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 700;
          margin-top: 1.5rem;
          transition: all 0.3s ease;
        }
        .btn-ai:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 20px rgba(171, 127, 228, 0.25);
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
          color: #ab7fe4;
          font-weight: 700;
          text-decoration: none;
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          background: rgba(171, 127, 228, 0.1);
          transition: all 0.3s ease;
        }
        .external-link:hover {
          background: rgba(171, 127, 228, 0.2);
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

export default AiComparison;
