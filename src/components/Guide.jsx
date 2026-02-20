import { motion } from 'framer-motion';

const Guide = () => {
  const steps = [
    { num: '01', title: '서비스 선택', desc: 'GamsGo에서 원하는 서비스(넷플릭스, 유튜브 등)를 선택하세요.' },
    { num: '02', title: '프로모션 코드 입력', desc: '결제 전 [프로모션 코드 있음]을 누르고 TA9Y3를 입력하세요.' },
    { num: '03', title: '즉시 이용 시작', desc: '결제 완료 후 구독 페이지에서 계정 정보를 확인하고 이용하세요.' },
  ];

  return (
    <section className="guide">
      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text">3단계로 끝내는 가입 가이드</h2>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <a
              key={step.num}
              href="https://www.gamsgo.com/partner/Chgyp"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit', display: 'block', flex: 1 }}
            >
              <div className="step-item">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="step-line"
                />
                <div className="step-content">
                  <span className="step-num">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .guide .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .section-header {
          text-align: center;
          margin-bottom: 5.5rem;
          width: 100%;
        }
        h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
        }
        .steps-container {
          display: flex;
          justify-content: center;
          gap: 3rem;
          width: 100%;
          max-width: 1100px;
        }
        .step-item {
          flex: 1;
          position: relative;
          padding: 2.5rem 2rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          transition: all 0.3s ease;
        }
        .step-item:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 107, 0, 0.2);
          transform: translateY(-5px);
        }
        .step-line {
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
          opacity: 0.6;
        }
        .step-num {
          font-size: 3.5rem;
          font-weight: 900;
          color: rgba(255, 107, 0, 0.25);
          position: absolute;
          top: 1rem;
          right: 1.5rem;
          line-height: 1;
        }
        h3 {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #fff;
          position: relative;
        }
        p {
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.7;
          word-break: keep-all;
          position: relative;
          font-size: 1rem;
        }
        @media (max-width: 968px) {
          .steps-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }
        @media (max-width: 640px) {
          .steps-container {
            grid-template-columns: 1fr;
          }
          .section-header { margin-bottom: 3rem; }
        }
      `}</style>
    </section>
  );
};

export default Guide;
