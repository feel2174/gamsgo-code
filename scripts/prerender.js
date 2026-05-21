import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { posts } from '../src/data/posts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const INDEX_HTML_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(INDEX_HTML_PATH)) {
  console.error('Error: index.html not found in dist. Run "npm run build" first.');
  process.exit(1);
}

const template = fs.readFileSync(INDEX_HTML_PATH, 'utf8');

// SVG Icons for native HTML rendering
const SVGS = {
  calendar: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
  user: `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
  mail: `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  github: `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
  twitter: `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>`
};

const getHeaderHtml = (activePath) => `
  <header class="header">
    <div class="header-container">
      <a href="/" class="logo">Dev<span>Insight</span></a>
      <nav class="desktop-nav">
        <a href="/" class="${activePath === '/' ? 'active' : ''}">홈 (Home)</a>
        <a href="/about" class="${activePath === '/about' ? 'active' : ''}">소개 (About)</a>
        <a href="/contact" class="${activePath === '/contact' ? 'active' : ''}">문의 (Contact)</a>
      </nav>
      <button class="mobile-menu-toggle">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </div>
    <div class="mobile-nav">
      <a href="/" class="${activePath === '/' ? 'active' : ''}">홈 (Home)</a>
      <a href="/about" class="${activePath === '/about' ? 'active' : ''}">소개 (About)</a>
      <a href="/contact" class="${activePath === '/contact' ? 'active' : ''}">문의 (Contact)</a>
    </div>
  </header>
`;

const getFooterHtml = () => `
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <div class="footer-info">
          <a href="/" class="footer-logo">Dev<span>Insight</span></a>
          <p>2026년 최신 IT 트렌드, 웹 프론트엔드 개발 가이드 및 AI 도구 활용법을 깊이 있게 다루는 전문 기술 블로그입니다.</p>
        </div>
        <div class="footer-links">
          <h4>사이트 메뉴</h4>
          <ul>
            <li><a href="/">홈</a></li>
            <li><a href="/about">소개</a></li>
            <li><a href="/contact">문의하기</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>법적 고지</h4>
          <ul>
            <li><a href="/privacy">개인정보처리방침</a></li>
            <li><a href="/terms">이용약관</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 DevInsight. All rights reserved.</p>
      </div>
    </div>
  </footer>
`;

const wrapPage = (contentHtml, headerActivePath) => `
  <div class="app-container">
    ${getHeaderHtml(headerActivePath)}
    <main>
      ${contentHtml}
    </main>
    ${getFooterHtml()}
  </div>
`;

// Render logic for different routes
const pages = {
  '/': {
    title: 'DevInsight - IT & 프론트엔드 기술 블로그',
    description: '최신 웹 프론트엔드 개발 트렌드와 AI 활용 노하우를 깊이 있게 다룹니다. React 19, ChatGPT API 등 고품질 기술 튜토리얼.',
    contentHtml: () => {
      const postsHtml = posts.map(post => `
        <article class="post-card">
          <a href="/post/${post.slug}" class="card-image-link">
            <div class="image-wrapper">
              <img src="${post.coverImage}" alt="${post.title}" loading="lazy" />
            </div>
          </a>
          <div class="card-content">
            <span class="category-badge">${post.category}</span>
            <h3>
              <a href="/post/${post.slug}">${post.title}</a>
            </h3>
            <p class="excerpt">${post.excerpt}</p>
            <div class="meta">
              <span class="meta-item">${SVGS.calendar} ${post.date}</span>
              <span class="meta-item">${SVGS.user} ${post.author}</span>
            </div>
          </div>
        </article>
      `).join('');

      return wrapPage(`
        <div class="home-page">
          <section class="hero">
            <div class="home-container">
              <h1>최신 기술 트렌드를<br/><span>가장 깊이 있게</span> 탐구합니다</h1>
              <p>DevInsight는 웹 프론트엔드, AI, 생산성 도구에 대한 실무 중심의 전문적인 아티클을 제공합니다.</p>
            </div>
          </section>
          <section class="post-list-section">
            <div class="home-container">
              <div class="section-header">
                <h2>최신 아티클</h2>
              </div>
              <div class="post-grid">
                ${postsHtml}
              </div>
            </div>
          </section>
        </div>
      `, '/');
    }
  },
  '/about': {
    title: '소개 | DevInsight',
    description: 'DevInsight 블로그와 운영자에 대한 소개 페이지입니다. IT 트렌드와 개발 지식을 공유합니다.',
    contentHtml: () => wrapPage(`
      <div class="page-wrapper">
        <div class="page-container">
          <h1>DevInsight 소개</h1>
          <div class="content">
            <p>안녕하세요. DevInsight에 오신 것을 환영합니다.</p>
            <p>이 블로그는 2026년 급변하는 IT 트렌드 속에서 프론트엔드 개발자, 기획자, 그리고 AI 기술에 관심 있는 모든 분들을 위해 양질의 기술 문서와 튜토리얼을 제공하기 위해 설립되었습니다.</p>
            
            <h2>우리의 미션</h2>
            <p>단편적인 지식이 아닌, 실무에서 즉시 활용할 수 있는 깊이 있는 정보(Insight)를 제공하는 것이 목표입니다. React, TypeScript, 최신 성능 최적화 기법부터 ChatGPT API를 활용한 업무 자동화까지 다양한 주제를 다룹니다.</p>

            <h2>연락처</h2>
            <ul class="contact-list">
              <li>${SVGS.mail} devzucca@gmail.com</li>
              <li>${SVGS.github} github.com/feel2174</li>
              <li>${SVGS.twitter} feel2174</li>
            </ul>
          </div>
        </div>
      </div>
    `, '/about')
  },
  '/contact': {
    title: '문의하기 | DevInsight',
    description: 'DevInsight 운영진에게 피드백, 제휴 문의 등을 남겨주세요.',
    contentHtml: () => wrapPage(`
      <div class="page-wrapper">
        <div class="page-container">
          <h1>문의하기</h1>
          <div class="content">
            <p>블로그 콘텐츠에 대한 피드백, 비즈니스 제휴, 또는 오류 신고 등 어떠한 문의도 환영합니다.</p>
            <form class="contact-form">
              <div class="form-group">
                <label>이름</label>
                <input type="text" placeholder="홍길동" required />
              </div>
              <div class="form-group">
                <label>이메일</label>
                <input type="email" placeholder="example@email.com" required />
              </div>
              <div class="form-group">
                <label>메시지</label>
                <textarea rows="5" placeholder="문의하실 내용을 입력해주세요." required></textarea>
              </div>
              <button type="submit" class="submit-btn">메시지 보내기</button>
            </form>
          </div>
        </div>
      </div>
    `, '/contact')
  },
  '/privacy': {
    title: '개인정보처리방침 | DevInsight',
    description: 'DevInsight 개인정보처리방침 안내 페이지입니다.',
    contentHtml: () => wrapPage(`
      <div class="page-wrapper">
        <div class="page-container">
          <h1>개인정보처리방침</h1>
          <div class="content">
            <p><strong>시행일자: 2026년 5월 21일</strong></p>
            <p>DevInsight("본 사이트")는 이용자의 개인정보 보호를 매우 중요하게 생각하며, 관련 법령을 준수하고 있습니다.</p>
            
            <h2>1. 수집하는 개인정보 항목</h2>
            <p>본 사이트는 회원가입 절차가 없으며, 원칙적으로 사용자를 식별할 수 있는 민감한 개인정보를 수집하지 않습니다. 다만, 서비스 개선 및 구글 애드센스 등 맞춤형 광고 제공을 위해 쿠키(Cookie)와 방문 기록 등의 정보가 자동으로 수집될 수 있습니다.</p>

            <h2>2. 쿠키(Cookie)의 운용</h2>
            <p>본 사이트는 구글(Google)과 같은 제3자 업체가 제공하는 광고를 게재할 수 있습니다. 구글 등 광고 업체는 쿠키를 사용하여 사용자의 이전 방문 기록을 바탕으로 맞춤형 광고를 제공할 수 있습니다.</p>
            <ul>
              <li>사용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.</li>
              <li>구글 광고 설정 페이지를 방문하여 맞춤설정 광고에 사용되는 쿠키를 거부할 수 있습니다.</li>
            </ul>

            <h2>3. 웹 분석 도구의 사용</h2>
            <p>트래픽 분석을 위해 구글 애널리틱스(Google Analytics)를 사용하고 있습니다. 이를 통해 비식별화된 통계 데이터가 수집됩니다.</p>
          </div>
        </div>
      </div>
    `, '/privacy')
  },
  '/terms': {
    title: '이용약관 | DevInsight',
    description: 'DevInsight 서비스 이용약관 안내 페이지입니다.',
    contentHtml: () => wrapPage(`
      <div class="page-wrapper">
        <div class="page-container">
          <h1>이용약관</h1>
          <div class="content">
            <p><strong>시행일자: 2026년 5월 21일</strong></p>
            
            <h2>1. 목적</h2>
            <p>본 약관은 DevInsight(이하 "본 사이트")가 제공하는 모든 정보 및 서비스의 이용과 관련하여, 운영자와 이용자의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.</p>

            <h2>2. 서비스의 제공 및 변경</h2>
            <p>본 사이트는 IT, 개발, AI 등에 관한 정보성 콘텐츠를 무료로 제공합니다. 제공되는 정보는 사전 고지 없이 변경되거나 중단될 수 있습니다.</p>

            <h2>3. 저작권 및 지적재산권</h2>
            <p>본 사이트에 게시된 모든 텍스트, 이미지, 코드 스니펫 등의 저작물에 대한 지적재산권은 본 사이트에 귀속됩니다. 영리적 목적으로 무단 복제, 배포, 전송하는 행위는 엄격히 금지됩니다.</p>

            <h2>4. 면책 조항</h2>
            <p>본 사이트의 정보는 정확성을 위해 최선을 다하고 있으나, 오류가 발생할 수 있습니다. 본 사이트의 정보를 활용하여 발생한 어떠한 직/간접적 손해에 대해서도 운영자는 법적 책임을 지지 않습니다. 특히 코드 스니펫이나 튜토리얼은 참고용으로만 사용하시기 바랍니다.</p>
          </div>
        </div>
      </div>
    `, '/terms')
  }
};

// Main execution function
function run() {
  console.log('=== START PRERENDERING ===');

  // Prerender static pages
  for (const [route, page] of Object.entries(pages)) {
    let html = template;
    
    // Replace title
    html = html.replace(/<title>[^<]*<\/title>/i, `<title>${page.title}</title>`);
    
    // Replace meta description
    if (html.includes('name="description"')) {
      html = html.replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${page.description}" />`);
    } else {
      html = html.replace('</head>', `  <meta name="description" content="${page.description}" />\n</head>`);
    }

    // Inject contentHtml
    const content = page.contentHtml();
    html = html.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${content}</div>`);

    if (route === '/') {
      // Overwrite root index.html
      fs.writeFileSync(INDEX_HTML_PATH, html, 'utf8');
      console.log('Prerendered: / (overwrote dist/index.html)');
    } else {
      const outputDir = path.join(DIST_DIR, route.substring(1));
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      fs.writeFileSync(path.join(outputDir, 'index.html'), html, 'utf8');
      console.log(`Prerendered: ${route}/index.html`);
    }
  }

  // Prerender individual articles
  for (const post of posts) {
    const route = `/post/${post.slug}`;
    let html = template;

    const pageTitle = `${post.title} | DevInsight`;
    const pageDesc = post.excerpt;

    // Schema JSON-LD markup
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "image": [post.coverImage],
      "datePublished": post.date,
      "author": [{
        "@type": "Person",
        "name": post.author
      }]
    };

    const ogTags = `
  <meta property="og:title" content="${post.title}" />
  <meta property="og:description" content="${post.excerpt}" />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="${post.coverImage}" />
  <meta property="article:published_time" content="${post.date}" />
  <meta property="article:author" content="${post.author}" />
  <script type="application/ld+json">${JSON.stringify(articleSchema)}</script>
    `;

    // Replace title
    html = html.replace(/<title>[^<]*<\/title>/i, `<title>${pageTitle}</title>`);
    
    // Replace meta description
    if (html.includes('name="description"')) {
      html = html.replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${pageDesc}" />`);
    } else {
      html = html.replace('</head>', `  <meta name="description" content="${pageDesc}" />\n</head>`);
    }

    // Inject OG tags & Schema
    html = html.replace('</head>', `${ogTags}\n</head>`);

    // Build related articles HTML
    const relatedPosts = posts.filter(p => p.id !== post.id).slice(0, 3);
    const relatedPostsHtml = relatedPosts.map(p => `
      <li>
        <a href="/post/${p.slug}">
          <img src="${p.coverImage}" alt="" />
          <span>${p.title}</span>
        </a>
      </li>
    `).join('');

    // Inject post page content
    const postBodyHtml = `
      <div class="post-page">
        <div class="post-header" style="background-image: linear-gradient(rgba(0,0,0,0.7), rgba(15, 17, 21, 1)), url(${post.coverImage})">
          <div class="post-header-container">
            <a href="/" class="back-link">
              ${SVGS.arrowLeft} 목록으로 돌아가기
            </a>
            <span class="category-badge">${post.category}</span>
            <h1>${post.title}</h1>
            <div class="post-meta">
              <span class="meta-item">${SVGS.calendar} ${post.date}</span>
              <span class="meta-item">${SVGS.user} ${post.author}</span>
            </div>
          </div>
        </div>
        <div class="post-body-container post-content-container">
          <article class="post-content">
            ${post.content}
          </article>
          <div class="sidebar">
            <div class="sidebar-widget">
              <h3>관련 아티클</h3>
              <ul class="related-posts">
                ${relatedPostsHtml}
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;

    const wrappedHtml = wrapPage(postBodyHtml, '');
    html = html.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${wrappedHtml}</div>`);

    const outputDir = path.join(DIST_DIR, 'post', post.slug);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(path.join(outputDir, 'index.html'), html, 'utf8');
    console.log(`Prerendered article: /post/${post.slug}/index.html`);
  }

  // Generate sitemap.xml dynamically
  console.log('=== GENERATING SITEMAP.XML ===');
  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://gamsgocode.co.kr/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://gamsgocode.co.kr/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://gamsgocode.co.kr/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://gamsgocode.co.kr/privacy</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://gamsgocode.co.kr/terms</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
`;

  for (const post of posts) {
    sitemapXml += `  <url>
    <loc>https://gamsgocode.co.kr/post/${post.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;
  }

  sitemapXml += `</urlset>\n`;

  // Write to dist/sitemap.xml
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
  console.log('Generated: dist/sitemap.xml');

  // Also write back to public/sitemap.xml so it persists in Git
  const PUBLIC_DIR = path.resolve(__dirname, '../public');
  if (fs.existsSync(PUBLIC_DIR)) {
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
    console.log('Updated: public/sitemap.xml');
  }

  console.log('=== PRERENDERING COMPLETE ===');
}

run();
