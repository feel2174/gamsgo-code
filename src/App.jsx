import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Post from './pages/Post';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Resources from './pages/Resources';
import Checklist from './pages/Checklist';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const location = useLocation();
  const currentUrl = `https://www.gamsgocode.co.kr${location.pathname === '/' ? '' : location.pathname}`;

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.gamsgocode.co.kr/",
    "name": "DevInsight - IT & 프론트엔드 블로그",
    "description": "최신 웹 프론트엔드 트렌드, React, AI 도구 튜토리얼과 실무 체크리스트를 제공하는 기술 자료실",
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevInsight",
    "url": "https://www.gamsgocode.co.kr/",
    "logo": "https://www.gamsgocode.co.kr/apple-touch-icon.png",
    "email": "devzucca@gmail.com",
  };

  return (
    <HelmetProvider>
      <div className="app-container">
        <Helmet>
          <title>DevInsight - IT & 프론트엔드 기술 블로그</title>
          <meta name="description" content="2026년 최신 기술 트렌드를 깊이 있게 정리합니다. 프론트엔드 개발 가이드, AI 도구 활용법, 배포 전 품질 체크리스트와 실무 자료실을 제공합니다." />
          <meta name="keywords" content="React 19, 프론트엔드 개발, ChatGPT API, 기술 블로그, IT 트렌드, 성능 최적화, TypeScript" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="DevInsight - 전문 기술 블로그" />
          <meta property="og:description" content="최신 기술 트렌드와 프론트엔드 실무 자료를 정리합니다." />
          <meta property="og:url" content="https://www.gamsgocode.co.kr/" />
          <meta property="og:site_name" content="DevInsight" />

          <link rel="canonical" href={currentUrl} />

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
            <Route path="/resources" element={<Resources />} />
            <Route path="/checklist" element={<Checklist />} />
          </Routes>
        </main>

        <Footer />
        <Analytics />
      </div>
    </HelmetProvider>
  );
}

export default App;
