import { motion } from 'framer-motion';

const services = [
  { name: 'YouTube Premium', price: '$5.93', official: '14,900원', tag: 'BEST', color: '#FF0000', logo: 'https://cdn.simpleicons.org/youtube/white' },
  { name: 'ChatGPT Plus', price: '$4.77', official: '28,000원', tag: 'AI 혁신', color: '#10A37F', logo: 'https://img.icons8.com/ios-filled/50/ffffff/chatgpt.png' },
  { name: 'Netflix (UHD)', price: '$4.17', official: '17,000원', tag: '인기', color: '#E50914', logo: 'https://cdn.simpleicons.org/netflix/white' },
  { name: 'Disney Plus', price: '$4.17', official: '9,900원', tag: '추천', color: '#006E99', logo: 'https://cdn.simpleicons.org/disney/white' },
  { name: 'Gemini (제미나이)', price: '$2.34', official: '26,000원', tag: 'Nano Banana', color: '#4285F4', logo: 'https://cdn.simpleicons.org/googlegemini/white' },
  { name: 'Tidal Plus', price: '$2.75', official: '15,000원', tag: '고음질', color: '#00E5FF', logo: 'https://cdn.simpleicons.org/tidal/white' },
  { name: 'Spotify (스포티파이)', price: '$3.65', official: '10,900원', tag: '음악 무제한', color: '#1DB954', logo: 'https://cdn.simpleicons.org/spotify/white' },
  { name: 'Claude (클로드)', price: '$18.99', official: '28,000원', tag: 'Opus 4.6 완료', color: '#D2691E', logo: 'https://cdn.simpleicons.org/anthropic/white' },
  { name: 'Midjourney', price: '$9.99', official: '38,000원', tag: '이미지 AI', color: '#FFFFFF', logo: 'https://img.icons8.com/ios-filled/50/ffffff/midjourney.png' },
  { name: 'Adobe (어도비)', price: '$12.67', official: '62,000원', tag: 'Creative Cloud', color: '#FF0000', logo: 'https://cdn.simpleicons.org/adobe/white' },
  { name: 'Canva (캔바)', price: '$4.68', official: '14,000원', tag: '디자인 도구', color: '#00C4CC', logo: 'https://cdn.simpleicons.org/canva/white' },
  { name: 'Office 365', price: '$3.34', official: '8,900원', tag: '협업 업무', color: '#D83B01', logo: 'https://cdn.simpleicons.org/microsoft365/white' },
  { name: 'NordVPN', price: '$2.00', official: '12,000원', tag: '보안 VPN', color: '#0055A4', logo: 'https://cdn.simpleicons.org/nordvpn/white' },
  { name: 'Duolingo', price: '$2.21', official: '12,900원', tag: '언어 학습', color: '#58CC02', logo: 'https://cdn.simpleicons.org/duolingo/white' },
  { name: 'CapCut (캡컷)', price: '$7.49', official: '12,000원', tag: '영상 편집', color: '#ffffff', logo: 'https://img.icons8.com/ios-filled/50/ffffff/video-editing.png' },
  { name: 'Envato Elements', price: '$5.84', official: '22,000원', tag: '에셋 센터', color: '#81B441', logo: 'https://cdn.simpleicons.org/envato/white' },
];

const ServiceGrid = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text">지원하는 모든 서비스</h2>
          <p>정가 대비 최대 80% 저렴하게 프리미엄을 경험하세요.</p>
        </div>

        <div className="grid">
          {services.map((item, index) => (
            <a
              key={item.name}
              href="https://www.gamsgo.com/partner/Chgyp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.name} 할인 받기`}
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="service-card glass"
              >
                <div className="card-top">
                  <div className="logo-wrapper">
                    <img
                      src={item.logo}
                      alt={`${item.name} 공식 로고`}
                      loading="lazy"
                      className="service-logo"
                      onError={(e) => {
                        e.target.src = 'https://img.icons8.com/ios-filled/50/ffffff/broken-link.png';
                      }}
                    />
                    <span className="service-tag" style={{ backgroundColor: `${item.color}20`, color: item.color }}>{item.tag}</span>
                  </div>
                  <span className="official-price">{item.official}</span>
                </div>
                <h3>{item.name}</h3>
                <div className="price-info">
                  <span className="save-label">GamsGo 최저가</span>
                  <span className="price">
                    {item.price}
                    <span className="unit">/ 월</span>
                  </span>
                </div>
                <div className="card-footer">
                  <span className="promo-applied">코드 TA9Y3 할인 적용됨</span>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services {
          background-color: rgba(255, 255, 255, 0.02);
        }
        .services .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .section-header {
          text-align: center;
          margin-bottom: 5rem;
          width: 100%;
        }
        h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
        }
        .section-header p {
          color: #a1a1aa;
          font-size: 1.2rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          width: 100%;
        }
        @media (max-width: 1200px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 900px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
        .service-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          transition: var(--transition);
          height: 100%;
        }
        .service-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.05);
        }
        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .service-logo {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }
        .service-tag {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.75rem;
          border-radius: 0.5rem;
        }
        .official-price {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.4);
          text-decoration: line-through;
        }
        h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff !important;
        }
        .price-info {
          display: flex;
          flex-direction: column;
          margin-top: 0.5rem;
        }
        .save-label {
          font-size: 0.85rem;
          color: var(--primary);
          font-weight: 600;
        }
        .price {
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffffff !important;
          display: flex;
          align-items: baseline;
          gap: 0.25rem;
        }
        .unit {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 500;
        }
        .card-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--glass-border);
        }
        .promo-applied {
          font-size: 0.8rem;
          color: #a1a1aa;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        @media (max-width: 768px) {
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default ServiceGrid;
