import { Helmet } from 'react-helmet-async';

const officialDocs = [
  {
    group: '프론트엔드 기본',
    links: [
      { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/ko/' },
      { name: 'web.dev', url: 'https://web.dev/' },
      { name: 'Can I use', url: 'https://caniuse.com/' },
    ],
  },
  {
    group: 'React / TypeScript',
    links: [
      { name: 'React 공식 문서', url: 'https://react.dev/' },
      { name: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/' },
      { name: 'Vite Guide', url: 'https://vite.dev/guide/' },
    ],
  },
  {
    group: '성능 / 디버깅',
    links: [
      { name: 'PageSpeed Insights', url: 'https://pagespeed.web.dev/' },
      { name: 'Lighthouse', url: 'https://developer.chrome.com/docs/lighthouse/overview/' },
      { name: 'Chrome DevTools', url: 'https://developer.chrome.com/docs/devtools/' },
    ],
  },
  {
    group: '구조화 데이터 / 접근성',
    links: [
      { name: 'Schema.org', url: 'https://schema.org/' },
      { name: 'Rich Results Test', url: 'https://search.google.com/test/rich-results' },
      { name: 'WAI 접근성 기초', url: 'https://www.w3.org/WAI/fundamentals/' },
    ],
  },
];

const resourceTables = [
  {
    title: 'React 프로젝트 점검 자료',
    rows: [
      ['렌더링 성능', 'React DevTools Profiler로 느린 컴포넌트와 반복 렌더링을 확인합니다.', '상태 위치, memo 적용, 목록 key 안정성'],
      ['상태 관리', '서버 상태와 UI 상태를 분리해 전역 상태가 과해지지 않았는지 봅니다.', 'TanStack Query, Zustand, Context 분리'],
      ['빌드 결과', '번들 크기와 동적 import 적용 구간을 확인합니다.', 'Vite build, Lighthouse, Coverage 탭'],
    ],
  },
  {
    title: '프론트엔드 품질 점검 자료',
    rows: [
      ['HTML 구조', '페이지마다 h1, section, article, table, button, link의 의미가 맞는지 확인합니다.', '의미 있는 마크업, 스크린 리더 흐름'],
      ['접근성', '키보드 이동, 포커스 표시, 폼 라벨, 이미지 대체 텍스트를 실제 화면에서 점검합니다.', 'WAI 기초, Lighthouse Accessibility'],
      ['성능 예산', '초기 번들, 이미지 크기, LCP 후보 요소, 긴 작업을 배포 전에 확인합니다.', 'Coverage 탭, Performance 패널, PageSpeed'],
    ],
  },
];

const Resources = () => {
  return (
    <div className="page-wrapper resource-page">
      <Helmet>
        <title>프론트엔드 실무 자료실 | GamsGo Code</title>
        <meta name="description" content="React, TypeScript, JavaScript, CSS, 웹 성능, 접근성 점검에 필요한 공식 문서와 실무 참고 자료를 정리한 GamsGo Code 자료실입니다." />
      </Helmet>

      <div className="page-container wide-page-container">
        <h1>프론트엔드 실무 자료실</h1>
        <div className="content">
          <p>GamsGo Code 자료실은 글을 읽고 바로 확인해야 하는 공식 문서, 진단 도구, 실무 점검 기준을 한곳에 모아둔 페이지입니다. 단순 링크 모음이 아니라 React, TypeScript, CSS, 성능, 접근성 작업 중 필요한 자료를 빠르게 찾을 수 있도록 주제별로 나누었습니다.</p>

          <h2>공식 문서 빠른 링크</h2>
          <div className="resource-grid">
            {officialDocs.map((section) => (
              <section className="resource-card" key={section.group}>
                <h3>{section.group}</h3>
                <ul>
                  {section.links.map((link) => (
                    <li key={link.url}>
                      <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {resourceTables.map((table) => (
            <section className="resource-section" key={table.title}>
              <h2>{table.title}</h2>
              <div className="table-scroll">
                <table className="info-table">
                  <thead>
                    <tr>
                      <th>항목</th>
                      <th>확인 방법</th>
                      <th>함께 볼 기준</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map(([item, method, standard]) => (
                      <tr key={item}>
                        <td>{item}</td>
                        <td>{method}</td>
                        <td>{standard}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
