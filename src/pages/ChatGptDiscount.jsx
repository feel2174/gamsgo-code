import { Helmet } from 'react-helmet-async';
import { MessageSquare, CreditCard, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ChatGptDiscount = () => {
  return (
    <div className="page-content">
      <Helmet>
        <title>챗GPT 플러스 유료 할인: 월 6,700원의 기적 | 겜스고 후기</title>
        <meta name="description" content="챗GPT 플러스(GPT-4o) 비싼 구독료가 부담되셨나요? 겜스고를 통해 월 6,700원에 이용하는 법과 실제 사용 후기를 공개합니다." />
        <meta name="keywords" content="챗GPT 플러스 할인, ChatGPT 유료 가격, 겜스고 챗GPT, GPT-4o 저렴하게, AI 구독 할인" />
        <link rel="canonical" href="https://gamsgocode.co.kr/chatgpt-plus-discount" />
      </Helmet>

      <section className="hero-sub gpt-theme">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-sub-content"
          >
            <div className="badge">AI 구독 할인 가이드</div>
            <h1>챗GPT 플러스 유료 할인<br className="mo-only" /> <span>월 6,700원의 파격적 혜택</span></h1>
            <div className="hero-sub-p-wrapper">
              <p>공식 가격인 월 20달러($) 대신 1/4 가격으로 ChatGPT-4o의 모든 기능을 사용하세요. 복잡한 과정 없이 즉시 적용 가능합니다.</p>
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
              <CreditCard className="icon" size={48} color="#10a37f" />
              <h3>부담되는 구독료 해결</h3>
              <p>환율 상승으로 인해 3만원에 육박하는 구독료를 단돈 6,700원대로 낮출 수 있습니다. 매달 커피 한 잔 가격으로 끝내세요.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="info-card highlight-gpt"
            >
              <Sparkles className="icon pulse" size={48} color="#10a37f" />
              <h3>모든 기능 100% 동일</h3>
              <p>GPT-4o, 데이터 분석, DALL-E 3 이미지 생성 등 플러스 계정의 모든 권한을 제한 없이 누리세요.</p>
              <a href="https://www.gamsgo.com/partner/Chgyp" target="_blank" rel="noopener noreferrer" className="btn-gpt">
                할인 링크 이동 <ArrowRight size={18} />
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="info-card"
            >
              <MessageSquare className="icon" size={48} color="#555" />
              <h3>코드로 추가 할인</h3>
              <p>결제 페이지에서 <strong>TA9Y3</strong> 코드를 입력하면 최종 가격에서 추가 할인이 한 번 더 적용됩니다.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="content-detail">
        <div className="container">
          <div className="text-content">
            <h2>리얼 사용 후기 확인하기</h2>
            <p>실제 겜스고를 통해 챗GPT 플러스를 1년 넘게 사용 중인 실사용자의 상세 후기와 가이드를 확인해보세요.</p>
            <a href="https://zucca100.com/chatgpt-yuryo-halin-gamsgo-hubgi/"
              target="_blank" rel="noopener noreferrer" className="external-link gpt-color">
              <ExternalLink size={20} /> 월 6,700원 후기 보러가기
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
          background: radial-gradient(circle at center, rgba(16, 163, 127, 0.1) 0%, transparent 70%);
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
          background: rgba(16, 163, 127, 0.15);
          color: #10a37f;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.85rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(16, 163, 127, 0.2);
          letter-spacing: 0.05em;
        }
        h1 {
          font-size: clamp(2.5rem, 6vw, 4.2rem);
          line-height: 1.1;
          margin-bottom: 2rem;
          word-break: keep-all;
        }
        h1 span {
          background: linear-gradient(135deg, #fff 0%, #10a37f 100%);
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
        .info-card.highlight-gpt {
          background: linear-gradient(180deg, rgba(16, 163, 127, 0.12) 0%, rgba(16, 163, 127, 0.02) 100%);
          border: 1px solid rgba(16, 163, 127, 0.3);
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
        .btn-gpt {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          background: #10a37f;
          color: #fff;
          padding: 1rem 1.8rem;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 700;
          margin-top: 1.5rem;
          transition: all 0.3s ease;
        }
        .btn-gpt:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 20px rgba(16, 163, 127, 0.25);
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
          color: #10a37f;
          font-weight: 700;
          text-decoration: none;
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          background: rgba(16, 163, 127, 0.1);
          transition: all 0.3s ease;
        }
        .external-link:hover {
          background: rgba(16, 163, 127, 0.2);
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

export default ChatGptDiscount;
