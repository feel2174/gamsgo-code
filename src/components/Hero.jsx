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

          <div className="cta-group">
            <div className="code-box-wrapper">
              <div className="code-box glass" onClick={handleCopy}>
                <div className="code-info">
                  <span className="label">프로모션 코드</span>
                  <span className="code">{PROMO_CODE}</span>
                </div>
                <div className="copy-action">
                  {copied && <span className="copy-notif-inner">복사 완료!</span>}
                  <button className="copy-btn">
                    {copied ? <Check size={20} color="#4ade80" /> : <Copy size={20} />}
                  </button>
                </div>
              </div>
            </div>

            {!copied ? (
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="main-cta">
                GamsGo 공식 홈페이지로 이동 <ExternalLink size={18} />
              </a>
            ) : (
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={handleGo}
                className="main-cta success"
              >
                지금 바로 할인 받으러 가기 <ExternalLink size={18} />
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          text-align: center;
          background: radial-gradient(circle at 50% -20%, rgba(255, 107, 0, 0.15), transparent 50%);
        }
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .badge {
          display: inline-block;
          padding: 0.5rem 1.25rem;
          background: rgba(255, 107, 0, 0.1);
          border: 1px solid rgba(255, 107, 0, 0.2);
          border-radius: 2rem;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }
        h1 {
          font-size: 4rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: 2rem;
        }
        h1 span {
          color: var(--primary);
          -webkit-text-fill-color: var(--primary);
        }
        .hero-desc {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 3.5rem;
          word-break: keep-all;
        }
        .cta-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .code-box-wrapper {
          position: relative;
        }
        .code-box {
          display: flex;
          align-items: center;
          padding: 1rem 2rem;
          gap: 3rem;
          cursor: pointer;
          transition: var(--transition);
        }
        .code-box:hover {
          border-color: var(--primary);
          background: rgba(255, 107, 0, 0.05);
        }
        .code-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .label {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.1em;
        }
        .code {
          font-size: 2rem;
          font-weight: 800;
          color: var(--primary);
          font-variant-numeric: tabular-nums;
        }
        .main-cta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1.25rem 2.5rem;
          background: var(--primary);
          border-radius: 1rem;
          font-weight: 700;
          font-size: 1.1rem;
          transition: var(--transition);
        }
        .main-cta.success {
          background: #4ade80;
          color: #000;
        }
        .main-cta.success:hover {
          background: #22c55e;
          box-shadow: 0 10px 30px rgba(74, 222, 128, 0.4);
        }
        .copy-action {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .copy-notif-inner {
          font-size: 0.85rem;
          color: #4ade80;
          font-weight: 600;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(5px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 768px) {
          h1 { font-size: 2.5rem; }
          .hero-desc { font-size: 1.1rem; }
          .code-box { gap: 1.5rem; padding: 0.75rem 1.5rem; }
          .code { font-size: 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
