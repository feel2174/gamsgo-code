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
        .section-header { text-align: center; margin-bottom: 4rem; }
        h2 { font-size: 2.5rem; font-weight: 800; }
        .steps-container {
          display: flex;
          justify-content: space-between;
          gap: 4rem;
          margin-top: 4rem;
        }
        .step-item {
          flex: 1;
          position: relative;
        }
        .step-line {
          height: 2px;
          background: linear-gradient(90deg, var(--primary), transparent);
          margin-bottom: 2rem;
        }
        .step-num {
          font-size: 3rem;
          font-weight: 900;
          color: rgba(255, 107, 0, 0.1);
          position: absolute;
          top: 1rem;
          left: 0;
          z-index: -1;
        }
        h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text);
        }
        p {
          color: var(--text-muted);
          word-break: keep-all;
        }
        @media (max-width: 768px) {
          .steps-container { flex-direction: column; gap: 3rem; }
          .step-line { display: none; }
        }
      `}</style>
        </section>
    );
};

export default Guide;
