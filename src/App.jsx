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
import { Analytics } from '@vercel/analytics/react';

function App() {
  const location = useLocation();
  const currentUrl = `https://www.frontendnote.com${location.pathname === '/' ? '' : location.pathname}`;

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.frontendnote.com/",
    "name": "Frontend Note - 프론트엔드 실무 코드 자료실",
    "description": "React, TypeScript, JavaScript, CSS Layout, 웹 성능과 접근성 문제를 실무 코드 중심으로 정리하는 프론트엔드 개발 자료실",
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Frontend Note",
    "url": "https://www.frontendnote.com/",
    "logo": "https://www.frontendnote.com/apple-touch-icon.png",
    "email": "devzucca@gmail.com",
    "sameAs": [
      "https://github.com/feel2174"
    ],
  };

  return (
    <HelmetProvider>
      <div className="app-container">
        <Helmet>
          <title>Frontend Note - 프론트엔드 실무 코드 자료실</title>
          <meta name="description" content="React, TypeScript, JavaScript, CSS Layout, 웹 성능과 접근성 문제를 실무 코드 중심으로 정리하는 프론트엔드 개발 자료실입니다." />
          <meta name="keywords" content="React, TypeScript, JavaScript, CSS Layout, 웹 성능, 웹 접근성, Chrome DevTools, Git Workflow, 프론트엔드 코드" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Frontend Note - 프론트엔드 실무 코드 자료실" />
          <meta property="og:description" content="React, TypeScript, JavaScript, CSS, 성능과 접근성 문제를 코드 예시와 체크리스트로 정리합니다." />
          <meta property="og:url" content="https://www.frontendnote.com/" />
          <meta property="og:site_name" content="Frontend Note" />

          <link rel="canonical" href={currentUrl} />
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8785405056367250"
     crossorigin="anonymous"></script>
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
          </Routes>
        </main>

        <Footer />
        <Analytics />
      </div>
    </HelmetProvider>
  );
}

export default App;
