import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { posts } from '../src/data/posts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const INDEX_HTML_PATH = path.join(DIST_DIR, 'index.html');
const SITE_URL = 'https://www.frontendnote.com';

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
      <a href="/" class="logo">Frontend<span>Note</span></a>
      <nav class="desktop-nav">
        <a href="/" class="${activePath === '/' ? 'active' : ''}">홈 (Home)</a>
        <a href="/resources" class="${activePath === '/resources' ? 'active' : ''}">자료실 (Resources)</a>
        <a href="/about" class="${activePath === '/about' ? 'active' : ''}">소개 (About)</a>
        <a href="/contact" class="${activePath === '/contact' ? 'active' : ''}">문의 (Contact)</a>
      </nav>
      <button class="mobile-menu-toggle">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </div>
    <div class="mobile-nav">
      <a href="/" class="${activePath === '/' ? 'active' : ''}">홈 (Home)</a>
      <a href="/resources" class="${activePath === '/resources' ? 'active' : ''}">자료실 (Resources)</a>
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
          <a href="/" class="footer-logo">Frontend<span>Note</span></a>
          <p>React, TypeScript, JavaScript, CSS Layout, 웹 성능과 접근성 문제를 실무 코드와 점검 기준으로 정리하는 프론트엔드 개발 자료실입니다.</p>
        </div>
        <div class="footer-links">
          <h4>사이트 메뉴</h4>
          <ul>
            <li><a href="/">홈</a></li>
            <li><a href="/resources">자료실</a></li>
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
        <p>&copy; 2026 Frontend Note. All rights reserved.</p>
        <p class="footer-owner">김영주 <a href="mailto:devzucca@gmail.com">devzucca@gmail.com</a></p>
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
    title: 'Frontend Note - 프론트엔드 실무 코드 자료실',
    description: 'React, TypeScript, JavaScript, CSS, 웹 성능과 접근성 문제를 코드 예시와 체크리스트로 정리하는 프론트엔드 개발 자료실입니다.',
    contentHtml: () => {
      const postsHtml = posts.map(post => `
        <article class="post-card">
          <a href="/post/${post.slug}" class="card-image-link">
            <div class="image-wrapper">
              <img src="${post.coverImage}" alt="${post.title}" loading="lazy" onerror="this.onerror=null;this.src='/og-image.svg';" />
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
              <h1>프론트엔드 실무 코드를<br/><span>문제 해결 중심으로</span> 정리합니다</h1>
              <p>Frontend Note는 React, TypeScript, JavaScript, CSS, 성능과 접근성을 실제 코드와 체크리스트로 정리하는 개발 자료실입니다.</p>
            </div>
          </section>
          <section class="home-focus-section">
            <div class="home-container">
              <div class="home-focus-grid">
                <article class="home-focus-card">
                  <h2>실무 코드 가이드</h2>
                  <p>새 문법 소개보다 실제 프로젝트에서 어디에 적용하고 무엇을 조심해야 하는지 기준을 먼저 정리합니다.</p>
                </article>
                <article class="home-focus-card">
                  <h2>문제 해결 노트</h2>
                  <p>느린 화면, 복잡한 상태, 깨지는 레이아웃처럼 자주 만나는 문제를 재현 순서와 수정 코드로 설명합니다.</p>
                </article>
                <article class="home-focus-card">
                  <h2>개발 자료실</h2>
                  <p>React, TypeScript, CSS, 접근성, 성능 점검에 바로 쓰는 공식 문서와 도구 링크를 모아둡니다.</p>
                </article>
              </div>
            </div>
          </section>
          <section class="post-list-section">
            <div class="home-container">
              <div class="section-header">
                <h2>실무 코드 가이드</h2>
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
    title: '소개 | Frontend Note',
    description: 'Frontend Note의 운영 목적, 콘텐츠 작성 기준, 공식 도메인과 문의 정보를 안내합니다.',
    contentHtml: () => wrapPage(`
      <div class="page-wrapper">
        <div class="page-container">
          <h1>Frontend Note 소개</h1>
          <div class="content">
            <p>안녕하세요. Frontend Note에 오신 것을 환영합니다.</p>
            <p>Frontend Note는 한국어 프론트엔드 개발자가 실무에서 다시 찾아볼 수 있는 코드 자료와 문제 해결 노트를 정리하기 위해 운영되는 사이트입니다. 운영자는 김영주이며, 사이트 관련 문의는 devzucca@gmail.com으로 받고 있습니다.</p>
            
            <h2>우리의 미션</h2>
            <p>단편적인 용어 설명보다 실제 프로젝트에서 판단할 수 있는 기준을 제공하는 것이 목표입니다. React, TypeScript, JavaScript, CSS Layout, Web Performance, Accessibility, Git Workflow, Chrome DevTools처럼 프론트엔드 작업에 직접 연결되는 주제를 우선 다룹니다.</p>

            <h2>콘텐츠 작성 기준</h2>
            <p>Frontend Note의 글은 단순한 용어 설명에 그치지 않고, 실제 개발자가 의사결정할 때 확인해야 하는 장단점, 적용 조건, 점검 항목을 함께 정리하는 것을 원칙으로 합니다. 기술 변화가 빠른 주제는 공식 문서와 실무 적용 사례를 함께 확인하며, 오래된 정보나 오류가 발견되면 수정합니다.</p>

            <h2>운영 원칙</h2>
            <p>이 사이트는 독자가 콘텐츠를 방해 없이 읽을 수 있도록 명확한 문서 구조와 쉬운 탐색을 지향합니다. 외부 위젯이나 안내 요소가 추가되더라도 본문과 명확히 구분되도록 배치하며, 사용자를 혼동시키는 표현은 사용하지 않습니다.</p>

            <h2>운영 정보</h2>
            <p>www.frontendnote.com는 프론트엔드 실무 코드와 개발 자료를 정리하는 Frontend Note의 공식 도메인입니다. 도메인 이름은 개발 코드와 실무 개발 자료를 다루는 사이트라는 의미를 담고 있으며, 공개 브랜드명은 Frontend Note로 통일해 사용합니다. 2026년 6월 3일 사이트 구조와 콘텐츠 정책을 프론트엔드 코드 자료실 중심으로 개편했으며, 이후 글의 최신성, 오류 여부, 공식 문서 변경 사항을 주기적으로 확인합니다.</p>
            <p>새 글을 작성할 때는 독자가 바로 활용할 수 있는 점검 항목, 적용 조건, 참고 링크를 포함하는 것을 기준으로 삼습니다. 오래된 정보가 확인되면 글 하단의 참고 자료와 함께 수정 내용을 반영합니다.</p>

            <h2>검토 방식</h2>
            <p>Frontend Note의 글은 주제 선정, 초안 작성, 공식 문서 확인, 실무 적용 관점 보강, 최종 링크 점검 순서로 발행합니다. 특히 버전 변화가 빠른 React, TypeScript, 브라우저 성능 주제는 단정적인 표현을 피하고 적용 조건과 한계를 함께 적는 것을 원칙으로 합니다.</p>

            <h2>오류 제보와 수정 요청</h2>
            <p>기술 문서 특성상 프레임워크 버전, 브라우저 지원 현황, API 정책이 바뀔 수 있습니다. 잘못된 설명이나 깨진 링크를 발견하면 이메일로 알려주세요. 확인 후 필요한 경우 본문을 수정하고 업데이트 기준에 반영합니다.</p>

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
    title: '문의하기 | Frontend Note',
    description: 'Frontend Note 운영자에게 콘텐츠 오류 신고, 제휴 문의, 개인정보 관련 요청을 보낼 수 있는 연락처 안내 페이지입니다.',
    contentHtml: () => wrapPage(`
      <div class="page-wrapper">
        <div class="page-container">
          <h1>문의하기</h1>
          <div class="content">
            <p>Frontend Note는 기술 콘텐츠의 정확성과 독자 경험을 중요하게 생각합니다. 글의 오류 신고, 보완 의견, 제휴 문의, 개인정보 관련 요청은 아래 이메일로 보내주세요.</p>
            <div class="contact-card">
              <h2>운영자 연락처</h2>
              <p><strong>운영자:</strong> 김영주</p>
              <p><strong>이메일:</strong> <a href="mailto:devzucca@gmail.com">devzucca@gmail.com</a></p>
              <a class="submit-btn contact-mail-link" href="mailto:devzucca@gmail.com?subject=Frontend Note%20문의">이메일 보내기</a>
            </div>
            <p>문의에는 오류가 있는 글 주소, 보완이 필요한 문장, 참고할 공식 문서 링크를 함께 보내주시면 더 빠르게 확인할 수 있습니다. 대량 홍보성 메시지와 자동 발송 메시지는 답변하지 않을 수 있습니다.</p>
          </div>
        </div>
      </div>
    `, '/contact')
  },
  '/resources': {
    title: '프론트엔드 실무 자료실 | Frontend Note',
    description: 'React, TypeScript, JavaScript, CSS, 웹 성능, 접근성 점검에 필요한 공식 문서와 실무 참고 자료를 정리한 Frontend Note 자료실입니다.',
    contentHtml: () => wrapPage(`
      <div class="page-wrapper resource-page">
        <div class="page-container wide-page-container">
          <h1>프론트엔드 실무 자료실</h1>
          <div class="content">
            <p>Frontend Note 자료실은 글을 읽고 바로 확인해야 하는 공식 문서, 진단 도구, 실무 점검 기준을 한곳에 모아둔 페이지입니다. 단순 링크 모음이 아니라 React, TypeScript, CSS, 성능, 접근성 작업 중 필요한 자료를 빠르게 찾을 수 있도록 주제별로 나누었습니다.</p>

            <h2>공식 문서 빠른 링크</h2>
            <div class="resource-grid">
              <section class="resource-card">
                <h3>프론트엔드 기본</h3>
                <ul>
                  <li><a href="https://developer.mozilla.org/ko/" target="_blank" rel="noreferrer">MDN Web Docs</a></li>
                  <li><a href="https://web.dev/" target="_blank" rel="noreferrer">web.dev</a></li>
                  <li><a href="https://caniuse.com/" target="_blank" rel="noreferrer">Can I use</a></li>
                </ul>
              </section>
              <section class="resource-card">
                <h3>React / TypeScript</h3>
                <ul>
                  <li><a href="https://react.dev/" target="_blank" rel="noreferrer">React 공식 문서</a></li>
                  <li><a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noreferrer">TypeScript Handbook</a></li>
                  <li><a href="https://vite.dev/guide/" target="_blank" rel="noreferrer">Vite Guide</a></li>
                </ul>
              </section>
              <section class="resource-card">
                <h3>성능 / 디버깅</h3>
                <ul>
                  <li><a href="https://pagespeed.web.dev/" target="_blank" rel="noreferrer">PageSpeed Insights</a></li>
                  <li><a href="https://developer.chrome.com/docs/lighthouse/overview/" target="_blank" rel="noreferrer">Lighthouse</a></li>
                  <li><a href="https://developer.chrome.com/docs/devtools/" target="_blank" rel="noreferrer">Chrome DevTools</a></li>
                </ul>
              </section>
              <section class="resource-card">
                <h3>구조화 데이터 / 접근성</h3>
                <ul>
                  <li><a href="https://schema.org/" target="_blank" rel="noreferrer">Schema.org</a></li>
                  <li><a href="https://search.google.com/test/rich-results" target="_blank" rel="noreferrer">Rich Results Test</a></li>
                  <li><a href="https://www.w3.org/WAI/fundamentals/" target="_blank" rel="noreferrer">WAI 접근성 기초</a></li>
                </ul>
              </section>
            </div>

            <section class="resource-section">
              <h2>React 프로젝트 점검 자료</h2>
              <div class="table-scroll">
                <table class="info-table">
                  <thead><tr><th>항목</th><th>확인 방법</th><th>함께 볼 기준</th></tr></thead>
                  <tbody>
                    <tr><td>렌더링 성능</td><td>React DevTools Profiler로 느린 컴포넌트와 반복 렌더링을 확인합니다.</td><td>상태 위치, memo 적용, 목록 key 안정성</td></tr>
                    <tr><td>상태 관리</td><td>서버 상태와 UI 상태를 분리해 전역 상태가 과해지지 않았는지 봅니다.</td><td>TanStack Query, Zustand, Context 분리</td></tr>
                    <tr><td>빌드 결과</td><td>번들 크기와 동적 import 적용 구간을 확인합니다.</td><td>Vite build, Lighthouse, Coverage 탭</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section class="resource-section">
              <h2>프론트엔드 품질 점검 자료</h2>
              <div class="table-scroll">
                <table class="info-table">
                  <thead><tr><th>항목</th><th>확인 방법</th><th>함께 볼 기준</th></tr></thead>
                  <tbody>
                    <tr><td>HTML 구조</td><td>페이지마다 h1, section, article, table, button, link의 의미가 맞는지 확인합니다.</td><td>의미 있는 마크업, 스크린 리더 흐름</td></tr>
                    <tr><td>접근성</td><td>키보드 이동, 포커스 표시, 폼 라벨, 이미지 대체 텍스트를 실제 화면에서 점검합니다.</td><td>WAI 기초, Lighthouse Accessibility</td></tr>
                    <tr><td>성능 예산</td><td>초기 번들, 이미지 크기, LCP 후보 요소, 긴 작업을 배포 전에 확인합니다.</td><td>Coverage 탭, Performance 패널, PageSpeed</td></tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    `, '/resources')
  },
  '/privacy': {
    title: '개인정보처리방침 | Frontend Note',
    description: 'Frontend Note 개인정보처리방침 안내 페이지입니다.',
    contentHtml: () => wrapPage(`
      <div class="page-wrapper">
        <div class="page-container">
          <h1>개인정보처리방침</h1>
          <div class="content">
            <p><strong>시행일자: 2026년 6월 3일</strong></p>
            <p>Frontend Note("본 사이트")는 이용자의 개인정보 보호를 중요하게 생각하며, 사이트 운영과 콘텐츠 개선에 필요한 최소한의 정보만 처리합니다.</p>
            
            <h2>1. 수집하는 개인정보 항목</h2>
            <p>본 사이트는 회원가입 기능과 자체 문의 저장 기능을 제공하지 않으며 주민등록번호, 결제 정보 등 민감한 개인정보를 요구하지 않습니다. 다만 이용자가 운영자 이메일로 직접 문의를 보내는 경우 이름, 이메일 주소, 문의 내용이 처리될 수 있습니다.</p>
            <p>또한 사이트 안정성 확인, 방문 통계 분석, 광고 제공을 위해 IP 주소, 브라우저 정보, 방문 페이지, 쿠키(Cookie)와 같은 비식별 정보가 자동으로 수집될 수 있습니다.</p>

            <h2>2. 개인정보의 이용 목적</h2>
            <ul>
              <li>문의, 오류 신고, 제휴 요청에 대한 회신</li>
              <li>콘텐츠 품질 개선 및 사이트 이용 통계 분석</li>
              <li>부정 이용 방지, 보안 점검, 서비스 안정성 유지</li>
              <li>Google AdSense 등 제3자 광고 서비스 제공</li>
            </ul>

            <h2>3. 보관 및 파기</h2>
            <p>문의 처리에 필요한 정보는 답변 및 후속 확인을 위해 필요한 기간 동안 보관한 뒤 파기합니다. 법령상 보관 의무가 있거나 분쟁 대응을 위해 필요한 경우에는 해당 목적이 종료될 때까지 보관할 수 있습니다.</p>

            <h2>4. 쿠키(Cookie)의 운용 및 광고</h2>
            <p>본 사이트는 Google AdSense를 포함한 제3자 광고 서비스를 사용할 수 있습니다. Google과 제3자 광고 사업자는 쿠키 또는 이와 유사한 기술을 사용하여 이용자의 이전 방문 기록, 관심사, 브라우저 환경에 기반한 광고를 제공할 수 있습니다.</p>
            <ul>
              <li>이용자는 브라우저 설정을 통해 쿠키 저장을 거부하거나 삭제할 수 있습니다.</li>
              <li><a href="https://adssettings.google.com/" target="_blank" rel="noreferrer">Google 광고 설정</a> 페이지에서 맞춤형 광고 사용을 제한할 수 있습니다.</li>
              <li>Google의 광고 쿠키 사용 방식은 <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">Google 광고 관련 정책 안내</a>에서 확인할 수 있습니다.</li>
              <li>쿠키를 차단할 경우 일부 광고 또는 분석 기능이 정상적으로 작동하지 않을 수 있습니다.</li>
            </ul>

            <h2>5. 웹 분석 도구의 사용</h2>
            <p>본 사이트는 방문 통계와 콘텐츠 개선을 위해 Google Analytics 및 Vercel Analytics와 같은 분석 도구를 사용할 수 있습니다. 분석 정보는 개별 이용자를 직접 식별하기보다 페이지 이용 흐름과 성능을 파악하는 목적으로 활용됩니다.</p>

            <h2>6. 개인정보 관련 문의</h2>
            <p>개인정보 열람, 정정, 삭제 요청 또는 기타 문의는 <a href="mailto:devzucca@gmail.com">devzucca@gmail.com</a>으로 연락해 주세요.</p>
          </div>
        </div>
      </div>
    `, '/privacy')
  },
  '/terms': {
    title: '이용약관 | Frontend Note',
    description: 'Frontend Note 서비스 이용약관 안내 페이지입니다.',
    contentHtml: () => wrapPage(`
      <div class="page-wrapper">
        <div class="page-container">
          <h1>이용약관</h1>
          <div class="content">
            <p><strong>시행일자: 2026년 6월 3일</strong></p>
            
            <h2>1. 목적</h2>
            <p>본 약관은 Frontend Note(이하 "본 사이트")가 제공하는 모든 정보 및 서비스의 이용과 관련하여, 운영자와 이용자의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.</p>

            <h2>2. 서비스의 제공 및 변경</h2>
            <p>본 사이트는 프론트엔드 개발, 코드 예시, 웹 성능, 접근성, 개발 워크플로에 관한 정보성 콘텐츠를 무료로 제공합니다. 제공되는 정보는 사전 고지 없이 변경되거나 중단될 수 있습니다.</p>

            <h2>3. 저작권 및 지적재산권</h2>
            <p>본 사이트에 게시된 모든 텍스트, 이미지, 코드 스니펫 등의 저작물에 대한 지적재산권은 본 사이트에 귀속됩니다. 영리적 목적으로 무단 복제, 배포, 전송하는 행위는 엄격히 금지됩니다.</p>

            <h2>4. 면책 조항</h2>
            <p>본 사이트의 정보는 정확성을 위해 최선을 다하고 있으나, 오류가 발생할 수 있습니다. 본 사이트의 정보를 활용하여 발생한 어떠한 직/간접적 손해에 대해서도 운영자는 법적 책임을 지지 않습니다. 특히 코드 스니펫이나 튜토리얼은 참고용으로만 사용하시기 바랍니다.</p>

            <h2>5. 문의 및 오류 신고</h2>
            <p>콘텐츠 오류, 저작권 관련 요청, 개인정보 관련 문의는 <a href="mailto:devzucca@gmail.com">devzucca@gmail.com</a>으로 연락해 주세요. 운영자는 합리적인 범위에서 내용을 확인하고 필요한 경우 수정 또는 삭제 조치를 진행합니다.</p>
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

    // Inject Canonical URL
    const canonicalUrl = `${SITE_URL}${route === '/' ? '' : route}`;
    html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n</head>`);

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

    const pageTitle = `${post.title} | Frontend Note`;
    const pageDesc = post.excerpt;
    const canonicalUrl = `${SITE_URL}${route}`;

    // Schema JSON-LD markup
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      },
      "image": [post.coverImage],
      "datePublished": post.date,
      "dateModified": post.updated ?? post.date,
      "publisher": {
        "@type": "Organization",
        "name": "Frontend Note",
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/apple-touch-icon.png`
        }
      },
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
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="article:published_time" content="${post.date}" />
  <meta property="article:modified_time" content="${post.updated ?? post.date}" />
  <meta property="article:author" content="${post.author}" />
  <link rel="canonical" href="${canonicalUrl}" />
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
          <img src="${p.coverImage}" alt="" onerror="this.onerror=null;this.src='/og-image.svg';" />
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
              <span class="meta-item">업데이트 ${post.updated ?? post.date}</span>
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
    <loc>${SITE_URL}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/resources</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${SITE_URL}/privacy</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${SITE_URL}/terms</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
`;

  for (const post of posts) {
    sitemapXml += `  <url>
    <loc>${SITE_URL}/post/${post.slug}</loc>
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
