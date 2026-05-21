import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Post from './pages/Post';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://gamsgocode.co.kr/",
    "name": "DevInsight - IT & 프론트엔드 블로그",
    "description": "최신 웹 프론트엔드 트렌드, React, AI 도구 튜토리얼을 제공하는 고품질 기술 블로그",
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevInsight",
    "url": "https://gamsgocode.co.kr/",
    "logo": "https://gamsgocode.co.kr/apple-touch-icon.png",
  };

  return (
    <HelmetProvider>
      <Router>
        <div className="app-container">
          <Helmet>
            <title>DevInsight - IT & 프론트엔드 기술 블로그</title>
            <meta name="description" content="2026년 최신 기술 트렌드를 가장 깊이 있게 탐구합니다. 프론트엔드 개발 가이드 및 AI 도구 활용법." />
            <meta name="keywords" content="React 19, 프론트엔드 개발, ChatGPT API, 기술 블로그, IT 트렌드, 성능 최적화, TypeScript" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="DevInsight - 전문 기술 블로그" />
            <meta property="og:description" content="최신 기술 트렌드를 가장 깊이 있게 탐구합니다." />
            <meta property="og:url" content="https://gamsgocode.co.kr/" />
            <meta property="og:site_name" content="DevInsight" />

            <link rel="canonical" href="https://gamsgocode.co.kr/" />

            <script type="application/ld+json">
              {JSON.stringify(websiteSchema)}
            </script>
            <script type="application/ld+json">
              {JSON.stringify(orgSchema)}
            </script>
          </Helmet>

          <ScrollToTop />
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:slug" element={<Post />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>

          <Footer />
          <Analytics />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
