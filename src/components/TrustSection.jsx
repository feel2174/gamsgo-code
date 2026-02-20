import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Headphones, RefreshCcw } from 'lucide-react';

const TrustSection = () => {
  const points = [
    { icon: <ShieldCheck size={32} />, title: "검증된 안전성", desc: "5년 이상 운영, 500만 명 이상의 글로벌 유저가 선택한 1위 플랫폼" },
    { icon: <Zap size={32} />, title: "즉시 계정 발급", desc: "결제 완료 후 수 초 이내에 계정 정보가 자동으로 즉시 제공됩니다." },
    { icon: <Headphones size={32} />, title: "24/7 한국어 상담", desc: "언제든지 실시간 채팅을 통해 전문가의 도움을 받을 수 있습니다." },
    { icon: <RefreshCcw size={32} />, title: "100% 환불 보장", desc: "사용 중 문제가 발생할 경우 공정하고 투명한 환불 정책을 운영합니다." },
  ];

  return (
    <section className="trust">
      <div className="container">
        <div className="trust-grid">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="trust-card"
            >
              <div className="icon-wrapper">{point.icon}</div>
              <h3>{point.title}</h3>
              <p>{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem;
        }
        @media (max-width: 1024px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .trust-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        .trust-card {
          text-align: center;
          padding: 2rem;
        }
        .icon-wrapper {
          color: var(--primary);
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }
        h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        p {
          color: var(--text-muted);
          word-break: keep-all;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default TrustSection;
