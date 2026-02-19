import { HelmetProvider, Helmet } from 'react-helmet-async';
import Hero from './components/Hero';
import ServiceGrid from './components/ServiceGrid';
import TrustSection from './components/TrustSection';
import Guide from './components/Guide';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "GamsGo 프로모션 코드",
    "description": "GamsGo(겜스고) 프로모션 코드 TA9Y3를 사용하여 유튜브 프리미엄, 넷플릭스 등 프리미엄 서비스를 업계 최저가로 이용하세요.",
    "brand": {
      "@type": "Brand",
      "name": "GamsGo"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "KRW",
      "price": "3000",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "url": "https://www.gamsgo.com/partner/Chgyp"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "GamsGo 프로모션 코드는 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "2026년 기준 최신 프로모션 코드는 TA9Y3입니다. 결제 시 입력하면 추가 할인이 적용됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "겜스고는 안전한가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네, 겜스고는 500만 명 이상의 유저가 이용 중인 세계적인 구독 공유 서비스로 믿고 사용할 수 있습니다."
        }
      }
    ]
  };

  return (
    <HelmetProvider>
      <div className="app-container">
        <Helmet>
          <title>GamsGo 프로모션 코드 TA9Y3 - 유튜브 프리미엄 4,000원대</title>
          <meta name="description" content="2026년 최신 GamsGo(겜스고) 프로모션 코드 TA9Y3. 유튜브 프리미엄, 넷플릭스, ChatGPT Plus를 업계 최저가로 이용하는 법을 확인하세요." />
          <meta name="keywords" content="겜스고 프로모션 코드, GamsGo 할인코드, 유튜브 프리미엄 우회, 넷플릭스 싸게 보는 법, TA9Y3" />

          {/* Open Graph / Facebook / Naver */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="GamsGo 프로모션 코드 TA9Y3 - 유튜브 프리미엄, 넷플릭스 최저가" />
          <meta property="og:description" content="지금 TA9Y3 코드를 입력하고 유튜브 프리미엄 월 4,000원대 혜택을 받으세요." />
          <meta property="og:url" content="https://gamsgocode.com/" />
          <meta property="og:site_name" content="GamsGo 할인 가이드" />


          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="GamsGo 프로모션 코드 TA9Y3" />
          <meta name="twitter:description" content="유튜브 프리미엄, 넷플릭스 월 3,000원대! 겜스고 할인코드 TA9Y3 적용하기" />

          <link rel="canonical" href="https://gamsgocode.com/" />

          <script type="application/ld+json">
            {JSON.stringify(schemaMarkup)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        </Helmet>

        <main>
          <Hero />
          <TrustSection />
          <ServiceGrid />
          <Guide />
          <FAQ />
        </main>

        <Footer />
      </div>

      <style jsx>{`
        .app-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        main {
          flex: 1;
        }
      `}</style>
    </HelmetProvider>
  );
}

export default App;
