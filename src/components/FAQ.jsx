import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        q: "GamsGo는 합법적인가요?",
        a: "네, GamsGo는 정식으로 등록된 공유 플랫폼입니다. 글로벌 가족 플랜이나 비즈니스 플랜의 빈 슬롯을 공유하는 방식으로 운영되어 법적으로 안전하며 정가보다 저렴한 가격을 제안합니다."
    },
    {
        q: "프로모션 코드는 어떻게 적용하나요?",
        a: "구독할 서비스를 선택한 후 '결제' 단계에서 [프로모션 코드 있음] 버튼을 누르세요. 나타나는 입력란에 'TA9Y3'를 입력하고 [적용]을 누르면 즉시 추가 할인이 적용됩니다."
    },
    {
        q: "계정 정보는 언제 받을 수 있나요?",
        a: "결제가 완료되면 상단 메뉴의 [구독] 탭에서 즉시 확인할 수 있습니다. 가입한 이메일과 비밀번호, 시청하실 프로모 정보를 바로 확인하고 로그인하시면 됩니다."
    },
    {
        q: "유튜브 프리미엄 우회 결제와 무엇이 다른가요?",
        a: "우회 결제는 계정 정지 위험이나 VPN 설정의 번거로움이 있지만, GamsGo는 정식 공유 플랜을 사용하므로 한국 계정 그대로 안전하게 이용할 수 있습니다."
    },
    {
        q: "결제 수단은 어떤 것들이 있나요?",
        a: "카카오페이, 삼성페이, 네이버페이, 페이코 등 국내 간편 결제는 물론 신용카드와 가상화폐 결제까지 모두 지원하여 매우 편리합니다."
    },
    {
        q: "중간에 계정이 막히면 어떻게 하나요?",
        a: "GamsGo는 24시간 실시간 고객 지원을 제공합니다. 계정 문제 발생 시 채팅 상담을 통해 즉시 새로운 계정으로 교체받거나 문제를 해결할 수 있습니다."
    },
    {
        q: "환불 규정은 어떻게 되나요?",
        a: "서비스 이용이 불가능한 경우 정해진 규정에 따라 잔여 기간에 대한 환불을 진행합니다. 고객 센터를 통해 투명하게 처리되므로 안심하고 이용하세요."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="faq">
            <div className="container">
                <div className="section-header">
                    <h2 className="gradient-text">자주 묻는 질문</h2>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item glass">
                            <button
                                className="faq-question"
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                <span>{faq.q}</span>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                >
                                    <ChevronDown />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="faq-answer"
                                    >
                                        <p>{faq.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item {
          overflow: hidden;
          transition: var(--transition);
        }
        .faq-question {
          width: 100%;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text);
          text-align: left;
        }
        .faq-answer {
          padding: 0 2rem 1.5rem;
          color: var(--text-muted);
          line-height: 1.7;
        }
      `}</style>
        </section>
    );
};

export default FAQ;
