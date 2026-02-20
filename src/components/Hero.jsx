import { motion } from 'framer-motion';
import { Copy, ExternalLink, Check } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const PROMO_CODE = 'TA9Y3';
  const AFFILIATE_LINK = 'https://www.gamsgo.com/partner/Chgyp';

  const handleCopy = () => {
    navigator.clipboard.writeText(PROMO_CODE);
    setCopied(true);
  };

  const handleGo = () => {
    window.open(AFFILIATE_LINK, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="badge"
          >
            2026 최신 할인 혜택
          </motion.span>

          <h1 className="gradient-text">
            유튜브 프리미엄, 넷플릭스<br />
            <span>우회 없이 월 3,000원대</span> 종결
          </h1>

          <p className="hero-desc">
            전 세계 500만 유저가 선택한 1위 구독 공유 플랫폼 GamsGo(겜스고).<br />
            광고 없는 유튜브 프리미엄과 4K 넷플릭스를 가장 안전하고 저렴하게 이용하는 법.
          </p>

          <div className="cta-wrapper">
            <div className="cta-card glass">
              <div className="code-display" onClick={handleCopy}>
                <span className="label">추가 할인 프로모션 코드</span>
                <div className="code-row">
                  <span className="code">{PROMO_CODE}</span>
                  <button className="copy-btn-inner">
                    {copied ? <Check size={20} color="#4ade80" /> : <Copy size={20} />}
                  </button>
                </div>
                {copied && <p className="msg">코드가 복사되었습니다!</p>}
              </div>

              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className={`main-button ${copied ? 'success' : ''}`}>
                공식 홈페이지 할인받기 <ExternalLink size={18} />
              </a>
              <p className="hint">※ 결제 시 적용하면 추가 할인이 적용됩니다.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          padding: 10rem 0 8rem;
          background: radial-gradient(circle at 50% 20%, rgba(255, 107, 0, 0.15), transparent 50%);
          overflow: hidden;
        }
        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .badge {
          display: inline-block;
          padding: 0.5rem 1.25rem;
          background: rgba(255, 107, 0, 0.1);
          border: 1px solid rgba(255, 107, 0, 0.2);
          border-radius: 2rem;
          color: var(--primary);
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }
        h1 {
          font-size: clamp(2.5rem, 6vw, 4.2rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 2rem;
          word-break: keep-all;
        }
        h1 span {
          color: var(--primary);
          -webkit-text-fill-color: var(--primary);
        }
        .hero-desc {
          font-size: clamp(1.1rem, 1.8vw, 1.3rem);
          color: var(--text-muted);
          line-height: 1.7;
          word-break: keep-all;
          max-width: 700px;
          margin-bottom: 4rem;
        }
        
        .cta-wrapper {
          width: 100%;
          max-width: 480px;
        }
        .cta-card {
          padding: 2.5rem;
          border-radius: 32px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
        }
        .code-display {
          background: rgba(0, 0, 0, 0.4);
          padding: 1.5rem;
          border-radius: 20px;
          margin-bottom: 1.5rem;
          cursor: pointer;
          border: 2px dashed rgba(255, 107, 0, 0.3);
          transition: var(--transition);
        }
        .code-display:hover {
          border-color: var(--primary);
          background: rgba(255, 107, 0, 0.08);
        }
        .label {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .code-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
        .code {
          font-size: clamp(2rem, 5vw, 2.5rem);
          font-weight: 900;
          color: var(--primary);
          letter-spacing: 2px;
        }
        .msg {
          font-size: 0.85rem;
          color: #4ade80;
          margin-top: 0.5rem;
          font-weight: 600;
        }
        .main-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: 1.25rem;
          background: var(--primary);
          color: #fff;
          border-radius: 16px;
          font-weight: 700;
          font-size: 1.1rem;
          transition: var(--transition);
          text-decoration: none;
        }
        .main-button.success {
          background: #22c55e;
        }
        .main-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255, 107, 0, 0.4);
        }
        .hint {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.4);
          margin-top: 1.2rem;
        }

        @media (max-width: 768px) {
          .hero { padding: 6rem 0 4rem; }
          h1 { font-size: 2.5rem; }
          .hero-desc { font-size: 1rem; margin-bottom: 3rem; }
          .cta-card { padding: 1.5rem; }
          .code { font-size: 1.8rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
